import { useState, useEffect } from 'react';
import { getComplaints, createComplaint, updateComplaint, deleteComplaint } from '../api/complaintApi';

const Complaints = () => {
  const [data, setData] = useState([]);
  const [form, setForm] = useState({ studentName: '', message: '' });
  const [editId, setEditId] = useState(null);

  const loadData = async () => { const res = await getComplaints(); setData(res.data); };
  useEffect(() => { loadData(); }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editId) await updateComplaint(editId, { status: 'Resolved' }); 
    else await createComplaint(form);
    setForm({ studentName: '', message: '' }); setEditId(null); loadData();
  };

  return (
    <div style={{ padding: '20px' }}>
      <div style={{ background: '#f9f9f9', padding: '20px', borderRadius: '8px', marginBottom: '20px' }}>
        <h3>{editId ? 'Mark as Resolved' : 'Submit New Complaint'}</h3>
        <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          {!editId && (<>
            <input placeholder="Student Name" value={form.studentName} onChange={e => setForm({...form, studentName: e.target.value})} required style={inputStyle} />
            <input placeholder="Message" value={form.message} onChange={e => setForm({...form, message: e.target.value})} required style={{ ...inputStyle, width: '300px' }} />
          </>)}
          <button type="submit" style={{ ...btnStyle, background: editId ? '#27ae60' : '#8e44ad' }}>{editId ? 'Confirm Resolved' : 'Submit'}</button>
          {editId && <button type="button" onClick={() => { setEditId(null); }} style={{ ...btnStyle, background: '#95a5a6' }}>Cancel</button>}
        </form>
      </div>
      <table style={tableStyle}><thead><tr><th>Student</th><th>Message</th><th>Status</th><th>Actions</th></tr></thead>
        <tbody>{data.map(c => (
          <tr key={c._id}><td>{c.studentName}</td><td>{c.message}</td>
            <td><span style={{ padding: '5px 10px', borderRadius: '10px', color: 'white', background: c.status === 'Resolved' ? '#27ae60' : '#e74c3c' }}>{c.status}</span></td>
            <td>
              {c.status === 'Pending' && <button onClick={() => setEditId(c._id)} style={editBtn}>Resolve</button>}
              <button onClick={async () => { if(window.confirm('Delete?')) { await deleteComplaint(c._id); loadData(); }}} style={delBtn}>Delete</button>
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
export default Complaints;