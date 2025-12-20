import { useEffect, useState } from "react";
import axios from "axios";
import ProjectCard from "../components/ProjectCard";
import ClientCard from "../components/ClientCard";

export default function LandingPage() {
  const [projects, setProjects] = useState([]);
  const [clients, setClients] = useState([]);
  const [contact, setContact] = useState({});
  const [email, setEmail] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/api/projects").then(res => setProjects(res.data));
    axios.get("http://localhost:5000/api/clients").then(res => setClients(res.data));
  }, []);

  const submitContact = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/contact", contact);
    alert("Contact submitted");
  };

  const subscribe = async () => {
    await axios.post("http://localhost:5000/api/subscribe", { email });
    alert("Subscribed");
  };

  return (
    <div>
      <h1>Landing Page</h1>

      {/* Projects */}
      <h2>Our Projects</h2>
      <div style={{ display: "flex", gap: 20 }}>
        {projects.map(p => <ProjectCard key={p._id} project={p} />)}
      </div>

      {/* Clients */}
      <h2>Happy Clients</h2>
      <div style={{ display: "flex", gap: 20 }}>
        {clients.map(c => <ClientCard key={c._id} client={c} />)}
      </div>

      {/* Contact */}
      <h2>Contact Us</h2>
      <form onSubmit={submitContact}>
        <input placeholder="Name" onChange={e => setContact({ ...contact, name: e.target.value })} />
        <input placeholder="Email" onChange={e => setContact({ ...contact, email: e.target.value })} />
        <input placeholder="Mobile" onChange={e => setContact({ ...contact, mobile: e.target.value })} />
        <input placeholder="City" onChange={e => setContact({ ...contact, city: e.target.value })} />
        <button>Submit</button>
      </form>

      {/* Newsletter */}
      <h2>Newsletter</h2>
      <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <button onClick={subscribe}>Subscribe</button>
    </div>
  );
}
