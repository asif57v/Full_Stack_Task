import { useEffect, useState } from "react";
import axios from "axios";
import AddProject from "./components/AddProject";
import ProjectCard from "./components/ProjectCard";

function App() {
  const [projects, setProjects] = useState([]);

  const fetchProjects = async () => {
    const res = await axios.get("http://localhost:5000/api/projects");
    setProjects(res.data);
  };

  const deleteProject = async (id) => {
    await axios.delete(`http://localhost:5000/api/projects/${id}`);
    fetchProjects();
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <>
      <h1>Admin Dashboard</h1>

      <h2>Add Project</h2>
      <AddProject refresh={fetchProjects} />

      <h2>Projects</h2>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {projects.map((p) => (
          <ProjectCard key={p._id} project={p} onDelete={deleteProject} />
        ))}
      </div>
    </>
  );
}

export default App;
