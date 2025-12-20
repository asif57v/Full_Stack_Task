import { useEffect, useState } from "react";
import API from "../services/api";
import Navbar from "../components/Navbar";

export default function AdminDashboard() {
  const [projects, setProjects] = useState([]);
  const [clients, setClients] = useState([]);

  const [p, setP] = useState({ name: "", description: "", imageUrl: "" });
  const [c, setC] = useState({ name: "", description: "", imageUrl: "" });

  const load = async () => {
    setProjects((await API.get("/projects")).data);
    setClients((await API.get("/clients")).data);
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <>
      <Navbar />
      <div style={{ padding: 20 }}>
        <h2>Add Project</h2>
        <input placeholder="Name" onChange={e=>setP({...p,name:e.target.value})}/>
        <input placeholder="Desc" onChange={e=>setP({...p,description:e.target.value})}/>
        <input placeholder="Image URL" onChange={e=>setP({...p,imageUrl:e.target.value})}/>
        <button onClick={async()=>{await API.post("/projects",p);load();}}>Add</button>

        <h3>All Projects</h3>
        {projects.map(x=><p key={x._id}>{x.name}</p>)}

        <hr/>

        <h2>Add Client</h2>
        <input placeholder="Name" onChange={e=>setC({...c,name:e.target.value})}/>
        <input placeholder="Desc" onChange={e=>setC({...c,description:e.target.value})}/>
        <input placeholder="Image URL" onChange={e=>setC({...c,imageUrl:e.target.value})}/>
        <button onClick={async()=>{await API.post("/clients",c);load();}}>Add</button>

        <h3>All Clients</h3>
        {clients.map(x=><p key={x._id}>{x.name}</p>)}
      </div>
    </>
  );
}
