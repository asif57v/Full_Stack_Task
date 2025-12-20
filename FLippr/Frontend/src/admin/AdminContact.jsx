import { useEffect, useState } from "react";
import axios from "axios";

export default function ContactsAdmin() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/contact").then(res => setData(res.data));
  }, []);

  return (
    <>
      <h2>Contacts</h2>
      {data.map(c => <p key={c._id}>{c.name} - {c.email}</p>)}
    </>
  );
}
