import { useEffect, useState } from "react";
import axios from "axios";

export default function SubscribersAdmin() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/subscribe").then(res => setData(res.data));
  }, []);

  return (
    <>
      <h2>Subscribers</h2>
      {data.map(s => <p key={s._id}>{s.email}</p>)}
    </>
  );
}
