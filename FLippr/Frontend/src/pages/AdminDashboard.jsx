import { useEffect, useState } from "react";
import API from "../services/api";
import Navbar from "../components/Navbar";

export default function AdminDashboard() {
  // ================= PROJECT STATE =================
  const [projects, setProjects] = useState([]);
  const [projectForm, setProjectForm] = useState({
    name: "",
    description: "",
    imageUrl: ""
  });
  const [editProjectId, setEditProjectId] = useState(null);

  // ================= CLIENT STATE =================
  const [clients, setClients] = useState([]);
  const [clientForm, setClientForm] = useState({
    name: "",
    designation: "",
    description: "",
    imageUrl: ""
  });
  const [editClientId, setEditClientId] = useState(null);

  // ================= FETCH DATA =================
  const loadData = async () => {
    const p = await API.get("/projects");
    const c = await API.get("/clients");
    setProjects(p.data);
    setClients(c.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  // ================= PROJECT CRUD =================
  const submitProject = async () => {
    if (editProjectId) {
      await API.put(`/projects/${editProjectId}`, projectForm);
      setEditProjectId(null);
    } else {
      await API.post("/projects", projectForm);
    }

    setProjectForm({ name: "", description: "", imageUrl: "" });
    loadData();
  };

  const deleteProject = async (id) => {
    if (window.confirm("Delete this project?")) {
      await API.delete(`/projects/${id}`);
      loadData();
    }
  };

  // ================= CLIENT CRUD =================
  const submitClient = async () => {
    if (editClientId) {
      await API.put(`/clients/${editClientId}`, clientForm);
      setEditClientId(null);
    } else {
      await API.post("/clients", clientForm);
    }

    setClientForm({
      name: "",
      designation: "",
      description: "",
      imageUrl: ""
    });
    loadData();
  };

  const deleteClient = async (id) => {
    if (window.confirm("Delete this client?")) {
      await API.delete(`/clients/${id}`);
      loadData();
    }
  };

  return (
    <div>
      <Navbar />

      <div className="pt-24 min-h-screen bg-gray-100 p-6">
        <h1 className="text-3xl font-bold text-center mb-10">
          Admin Dashboard
        </h1>

        {/* ================= PROJECT FORM ================= */}
        <div className="bg-white p-6 rounded-xl shadow max-w-4xl mx-auto mb-10">
          <h2 className="text-xl font-semibold mb-4">
            {editProjectId ? "Edit Project" : "Add Project"}
          </h2>

          <input
            className="border p-3 rounded w-full mb-3"
            placeholder="Project Name"
            value={projectForm.name}
            onChange={(e) =>
              setProjectForm({ ...projectForm, name: e.target.value })
            }
          />

          <textarea
            className="border p-3 rounded w-full mb-3"
            placeholder="Project Description"
            value={projectForm.description}
            onChange={(e) =>
              setProjectForm({
                ...projectForm,
                description: e.target.value
              })
            }
          />

          <input
            className="border p-3 rounded w-full mb-3"
            placeholder="Project Image URL"
            value={projectForm.imageUrl}
            onChange={(e) =>
              setProjectForm({
                ...projectForm,
                imageUrl: e.target.value
              })
            }
          />

          <button
            onClick={submitProject}
            className="bg-blue-600 text-white px-6 py-2 rounded"
          >
            {editProjectId ? "Update Project" : "Add Project"}
          </button>
        </div>

        {/* ================= PROJECT LIST ================= */}
        <div className="bg-white p-6 rounded-xl shadow max-w-6xl mx-auto mb-14">
          <h2 className="text-xl font-semibold mb-4">
            All Projects
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((p) => (
              <div key={p._id} className="border p-4 rounded">
                <img
                  src={p.image}
                  alt={p.name}
                  className="h-32 w-full object-cover rounded"
                />
                <h3 className="font-bold mt-2">{p.name}</h3>
                <p className="text-sm text-gray-600">
                  {p.description}
                </p>

                <div className="flex gap-3 mt-3">
                  <button
                    onClick={() => {
                      setEditProjectId(p._id);
                      setProjectForm({
                        name: p.name,
                        description: p.description,
                        imageUrl: p.image
                      });
                    }}
                    className="bg-yellow-500 text-white px-3 py-1 rounded"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => deleteProject(p._id)}
                    className="bg-red-600 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= CLIENT FORM ================= */}
        <div className="bg-white p-6 rounded-xl shadow max-w-4xl mx-auto mb-10">
          <h2 className="text-xl font-semibold mb-4">
            {editClientId ? "Edit Client" : "Add Client"}
          </h2>

          <input
            className="border p-3 rounded w-full mb-3"
            placeholder="Client Name"
            value={clientForm.name}
            onChange={(e) =>
              setClientForm({ ...clientForm, name: e.target.value })
            }
          />

          <input
            className="border p-3 rounded w-full mb-3"
            placeholder="Designation"
            value={clientForm.designation}
            onChange={(e) =>
              setClientForm({
                ...clientForm,
                designation: e.target.value
              })
            }
          />

          <textarea
            className="border p-3 rounded w-full mb-3"
            placeholder="Client Description"
            value={clientForm.description}
            onChange={(e) =>
              setClientForm({
                ...clientForm,
                description: e.target.value
              })
            }
          />

          <input
            className="border p-3 rounded w-full mb-3"
            placeholder="Client Image URL"
            value={clientForm.imageUrl}
            onChange={(e) =>
              setClientForm({
                ...clientForm,
                imageUrl: e.target.value
              })
            }
          />

          <button
            onClick={submitClient}
            className="bg-green-600 text-white px-6 py-2 rounded"
          >
            {editClientId ? "Update Client" : "Add Client"}
          </button>
        </div>

        {/* ================= CLIENT LIST ================= */}
        <div className="bg-white p-6 rounded-xl shadow max-w-6xl mx-auto">
          <h2 className="text-xl font-semibold mb-4">
            All Clients
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {clients.map((c) => (
              <div
                key={c._id}
                className="border p-4 rounded text-center"
              >
                <img
                  src={c.image}
                  alt={c.name}
                  className="h-24 w-24 rounded-full mx-auto object-cover"
                />
                <h3 className="font-bold mt-2">{c.name}</h3>
                <p className="text-sm text-gray-500">
                  {c.designation}
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  {c.description}
                </p>

                <div className="flex justify-center gap-3 mt-3">
                  <button
                    onClick={() => {
                      setEditClientId(c._id);
                      setClientForm({
                        name: c.name,
                        designation: c.designation,
                        description: c.description,
                        imageUrl: c.image
                      });
                    }}
                    className="bg-yellow-500 text-white px-3 py-1 rounded"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => deleteClient(c._id)}
                    className="bg-red-600 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
