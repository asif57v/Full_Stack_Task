import { useEffect, useState } from "react";
import API from "../services/api";
import Navbar from "../components/Navbar";

const BASE_URL = "http://localhost:5000";

export default function Home() {
  const [projects, setProjects] = useState([]);
  const [clients, setClients] = useState([]);

  const [contact, setContact] = useState({
    fullName: "",
    email: "",
    mobile: "",
    city: ""
  });

  const [email, setEmail] = useState("");

  // ================= FETCH DATA =================
  useEffect(() => {
    API.get("/projects")
      .then(res => setProjects(res.data))
      .catch(err => console.log(err));

    API.get("/clients")
      .then(res => setClients(res.data))
      .catch(err => console.log(err));
  }, []);

  // ================= CONTACT FORM =================
  const submitContact = async () => {
    await API.post("/contact", contact);
    alert("Contact form submitted");
    setContact({ fullName: "", email: "", mobile: "", city: "" });
  };

  // ================= NEWSLETTER =================
  const subscribe = async () => {
    await API.post("/subscribe", { email });
    alert("Subscribed successfully");
    setEmail("");
  };

  return (
    <div>
      <Navbar />

      {/* ================= HERO ================= */}
      <section className="pt-32 bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 text-center">
        <h1 className="text-4xl font-bold">
          Grow Your Business With Us
        </h1>
        <p className="mt-4 text-lg">
          We build scalable & modern web applications
        </p>
      </section>

      {/* ================= ABOUT US ================= */}
      <section id="about" className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">
          About Us
        </h2>
        <p className="text-gray-600 text-center leading-relaxed">
          We are a full-stack development team delivering high-quality
          digital solutions. Our focus is on performance, scalability,
          and user experience.
        </p>
      </section>

      {/* ================= PROJECTS ================= */}
      <section id="projects" className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Our Projects
        </h2>

        {projects.length === 0 && (
          <p className="text-center text-gray-500">
            No projects found
          </p>
        )}

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project._id}
              className="bg-white rounded-xl shadow overflow-hidden"
            >
              {/* 🔥 IMAGE FIX IS HERE */}
              <img
  src={project.image}
  alt={project.name}
  className="h-48 w-full object-cover"
/>

              <div className="p-5">
                <h3 className="text-xl font-semibold">
                  {project.name}
                </h3>
                <p className="text-gray-600 mt-2">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= HAPPY CLIENTS ================= */}
      <section className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Happy Clients
        </h2>

        {clients.length === 0 && (
          <p className="text-center text-gray-500">
            No clients found
          </p>
        )}

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {clients.map((client) => (
            <div
              key={client._id}
              className="bg-white p-6 rounded-xl shadow text-center"
            >
              {/* 🔥 IMAGE FIX IS HERE */}
            <img
  src={client.image}
  alt={client.name}
  className="w-20 h-20 rounded-full mx-auto object-cover"
/>

              <p className="text-gray-600 mt-4">
                {client.description}
              </p>
              <h4 className="mt-4 font-semibold">
                {client.name}
              </h4>
              <p className="text-sm text-gray-500">
                {client.designation}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="py-16 px-6 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          Contact Us
        </h2>

        <div className="grid gap-4">
          <input
            className="border p-3 rounded"
            placeholder="Full Name"
            value={contact.fullName}
            onChange={(e) =>
              setContact({ ...contact, fullName: e.target.value })
            }
          />

          <input
            className="border p-3 rounded"
            placeholder="Email"
            value={contact.email}
            onChange={(e) =>
              setContact({ ...contact, email: e.target.value })
            }
          />

          <input
            className="border p-3 rounded"
            placeholder="Mobile"
            value={contact.mobile}
            onChange={(e) =>
              setContact({ ...contact, mobile: e.target.value })
            }
          />

          <input
            className="border p-3 rounded"
            placeholder="City"
            value={contact.city}
            onChange={(e) =>
              setContact({ ...contact, city: e.target.value })
            }
          />

          <button
            onClick={submitContact}
            className="bg-blue-600 text-white py-3 rounded hover:bg-blue-700"
          >
            Submit
          </button>
        </div>
      </section>

      {/* ================= NEWSLETTER ================= */}
      <section className="bg-blue-600 py-12 text-white text-center">
        <h2 className="text-2xl font-bold mb-4">
          Subscribe to our Newsletter
        </h2>

        <div className="flex justify-center gap-2">
          <input
            className="p-3 rounded text-black w-64"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            onClick={subscribe}
            className="bg-black px-6 py-3 rounded"
          >
            Subscribe
          </button>
        </div>
      </section>
    </div>
  );
}
