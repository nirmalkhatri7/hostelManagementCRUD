import { useState, useEffect } from 'react';
import { getStudents, createStudent, updateStudent, deleteStudent } from '../api/studentApi';

const Students = () => {
  const [data, setData] = useState([]);
  const [form, setForm] = useState({ name: '', email: '', room: '' });
  const [editId, setEditId] = useState(null);

  const loadData = async () => { const res = await getStudents(); setData(res.data); };
  useEffect(() => { loadData(); }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editId) await updateStudent(editId, form); else await createStudent(form);
    setForm({ name: '', email: '', room: '' }); setEditId(null); loadData();
  };

  return (
    <div style={{ padding: '20px' }}>
      <div style={{ background: '#0ecf9b', padding: '20px', borderRadius: '8px', marginBottom: '20px' }}>
        <h3>{editId ? 'Edit Student' : 'Add New Student'}</h3>
        <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <input placeholder="Name" value={form.name} onChange={e => setForm({...form, name: e.target.value})} required style={inputStyle} />
          <input placeholder="Email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} required style={inputStyle} />
          <input placeholder="Room No." value={form.room} onChange={e => setForm({...form, room: e.target.value})} required style={inputStyle} />
          <button type="submit" style={{ ...btnStyle, background: editId ? '#f39c12' : '#27ae60' }}>{editId ? 'Update' : 'Add'}</button>
          {editId && <button type="button" onClick={() => { setEditId(null); setForm({name:'', email:'', room:''}); }} style={{ ...btnStyle, background: '#95a5a6' }}>Cancel</button>}
        </form>
      </div>
      <table style={tableStyle}><thead><tr><th>Name</th><th>Email</th><th>Room</th><th>Actions</th></tr></thead>
        <tbody>{data.map(s => (
          <tr key={s._id}><td>{s.name}</td><td>{s.email}</td><td>{s.room}</td>
            <td>
              <button onClick={() => { setForm({name: s.name, email: s.email, room: s.room}); setEditId(s._id); }} style={editBtn}>Edit</button>
              <button onClick={async () => { if(window.confirm('Delete?')) { await deleteStudent(s._id); loadData(); }}} style={delBtn}>Delete</button>
            </td></tr>
        ))}</tbody>
      </table>
    </div>
  );
};
const inputStyle = { padding: '10px', border: '1px solid #ccc', borderRadius: '4px', width: '180px' };
const btnStyle = { padding: '10px 20px', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' };
const tableStyle = { width: '100%', borderCollapse: 'collapse', background: 'white' };
const editBtn = { padding: '5px 10px', background: '#3498db', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', marginRight: '5px' };
const delBtn = { padding: '5px 10px', background: '#e74c3c', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' };
export default Students;