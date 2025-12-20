import { useState } from "react";
import axios from "axios";

export default function AddProject({ refresh }) {
  const [data, setData] = useState({
    projectName: "",
    projectDescription: "",
    imageUrl: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/projects", data);
    refresh();
    setData({ projectName: "", projectDescription: "", imageUrl: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Project Name"
        value={data.projectName}
        onChange={(e) => setData({ ...data, projectName: e.target.value })}
      />

      <textarea
        placeholder="Project Description"
        value={data.projectDescription}
        onChange={(e) => setData({ ...data, projectDescription: e.target.value })}
      />

      <input
        placeholder="Image URL"
        value={data.imageUrl}
        onChange={(e) => setData({ ...data, imageUrl: e.target.value })}
      />

      <button>Add Project</button>
    </form>
  );
}
