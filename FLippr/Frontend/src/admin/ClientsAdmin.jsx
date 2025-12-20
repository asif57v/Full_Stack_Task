import { useEffect, useState } from "react";
import axios from "axios";

export default function ClientsAdmin() {
  const [clients, setClients] = useState([]);
  const [form, setForm] = useState({});

  const fetch = () => {
    axios.get("http://localhost:5000/api/clients").then(res => setClients(res.data));
  };

  useEffect(fetch, []);

  const submit = async () => {
    await axios.post("http://localhost:5000/api/clients", form);
    fetch();
  };

  const del = async (id) => {
    await axios.delete(`http://localhost:5000/api/clients/${id}`);
    fetch();
  };

  return (
    <div>
      <h2>Manage Clients</h2>

      <input placeholder="Name" onChange={e => setForm({ ...form, name: e.target.value })} />
      <input placeholder="Designation" onChange={e => setForm({ ...form, designation: e.target.value })} />
      <input placeholder="Description" onChange={e => setForm({ ...form, description: e.target.value })} />
      <input placeholder="Image URL" onChange={e => setForm({ ...form, imageUrl: e.target.value })} />

      {form.imageUrl && <img src={form.imageUrl} width="150" />}

      <button onClick={submit}>Add Client</button>

      {clients.map(c => (
        <div key={c._id}>
          <h4>{c.name}</h4>
          <button onClick={() => del(c._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
