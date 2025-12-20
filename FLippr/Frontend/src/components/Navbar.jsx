import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        <h1 className="text-xl font-bold text-blue-600">
          Flipr Task
        </h1>

        <div className="flex gap-6 font-medium">
          <Link to="/" className="hover:text-blue-600">
            Home
          </Link>

          <Link to="/#projects" className="hover:text-blue-600">
            Projects
          </Link>

          <Link to="/#clients" className="hover:text-blue-600">
            Clients
          </Link>

          <Link to="/contact" className="hover:text-blue-600">
            Contact
          </Link>

          <Link
            to="/admin"
            className="bg-blue-600 text-white px-4 py-1 rounded"
          >
            Admin
          </Link>
        </div>
      </div>
    </nav>
  );
}
