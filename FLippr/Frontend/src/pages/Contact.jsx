import { useState } from "react";
import API from "../services/api";
import Navbar from "../components/Navbar";

export default function Contact() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    mobile: "",
    city: ""
  });

  const submit = async () => {
    await API.post("/contact", form);
    alert("Contact form submitted");
    setForm({ fullName: "", email: "", mobile: "", city: "" });
  };

  return (
    <div>
      <Navbar />

      <div className="pt-28 min-h-screen bg-gray-100">
        <h1 className="text-3xl font-bold text-center mb-8">
          Contact Us
        </h1>

        <div className="bg-white p-6 rounded-xl shadow max-w-xl mx-auto">
          <input
            className="border p-3 rounded w-full mb-3"
            placeholder="Full Name"
            value={form.fullName}
            onChange={(e) =>
              setForm({ ...form, fullName: e.target.value })
            }
          />

          <input
            className="border p-3 rounded w-full mb-3"
            placeholder="Email"
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
          />

          <input
            className="border p-3 rounded w-full mb-3"
            placeholder="Mobile"
            value={form.mobile}
            onChange={(e) =>
              setForm({ ...form, mobile: e.target.value })
            }
          />

          <input
            className="border p-3 rounded w-full mb-3"
            placeholder="City"
            value={form.city}
            onChange={(e) =>
              setForm({ ...form, city: e.target.value })
            }
          />

          <button
            onClick={submit}
            className="bg-blue-600 text-white px-6 py-2 rounded w-full"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
