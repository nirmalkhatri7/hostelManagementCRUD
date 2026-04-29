import { useState, useEffect } from 'react';
import { getRooms, createRoom, updateRoom, deleteRoom } from '../api/roomApi';

const Rooms = () => {
  const [data, setData] = useState([]);
  const [form, setForm] = useState({ roomNumber: '', capacity: 1 });
  const [editId, setEditId] = useState(null);

  const loadData = async () => { const res = await getRooms(); setData(res.data); };
  useEffect(() => { loadData(); }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editId) await updateRoom(editId, form); else await createRoom(form);
    setForm({ roomNumber: '', capacity: 1 }); setEditId(null); loadData();
  };

  return (
    <div style={{ padding: '20px' }}>
      <div style={{ background: '#f9f9f9', padding: '20px', borderRadius: '8px', marginBottom: '20px' }}>
        <h3>{editId ? 'Edit Room' : 'Add New Room'}</h3>
        <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '10px' }}>
          <input placeholder="Room Number" value={form.roomNumber} onChange={e => setForm({...form, roomNumber: e.target.value})} required style={inputStyle} />
          <input type="number" placeholder="Capacity" value={form.capacity} onChange={e => setForm({...form, capacity: e.target.value})} required style={inputStyle} />
          <button type="submit" style={{ ...btnStyle, background: editId ? '#f39c12' : '#27ae60' }}>{editId ? 'Update' : 'Add'}</button>
          {editId && <button type="button" onClick={() => { setEditId(null); setForm({roomNumber:'', capacity: 1}); }} style={{ ...btnStyle, background: '#95a5a6' }}>Cancel</button>}
        </form>
      </div>
      <table style={tableStyle}><thead><tr><th>Room Number</th><th>Capacity</th><th>Actions</th></tr></thead>
        <tbody>{data.map(r => (
          <tr key={r._id}><td>{r.roomNumber}</td><td>{r.capacity}</td>
            <td>
              <button onClick={() => { setForm({roomNumber: r.roomNumber, capacity: r.capacity}); setEditId(r._id); }} style={editBtn}>Edit</button>
              <button onClick={async () => { if(window.confirm('Delete?')) { await deleteRoom(r._id); loadData(); }}} style={delBtn}>Delete</button>
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
export default Rooms;