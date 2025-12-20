import { useEffect, useState } from "react";
import axios from "axios";

export default function ProjectsAdmin() {
  const [projects, setProjects] = useState([]);
  const [form, setForm] = useState({});

  const fetch = () => {
    axios.get("http://localhost:5000/api/projects").then(res => setProjects(res.data));
  };

  useEffect(fetch, []);

  const submit = async () => {
    await axios.post("http://localhost:5000/api/projects", form);
    fetch();
  };

  const del = async (id) => {
    await axios.delete(`http://localhost:5000/api/projects/${id}`);
    fetch();
  };

  return (
    <div>
      <h2>Manage Projects</h2>

      <input placeholder="Name" onChange={e => setForm({ ...form, name: e.target.value })} />
      <input placeholder="Description" onChange={e => setForm({ ...form, description: e.target.value })} />
      <input placeholder="Image URL" onChange={e => setForm({ ...form, imageUrl: e.target.value })} />

      {form.imageUrl && <img src={form.imageUrl} width="150" />}

      <button onClick={submit}>Add Project</button>

      {projects.map(p => (
        <div key={p._id}>
          <h4>{p.name}</h4>
          <button onClick={() => del(p._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
