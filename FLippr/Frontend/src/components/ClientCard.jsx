export default function ClientCard({ client }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: 10, width: 250 }}>
      <img src={client.imageUrl} width="100%" />
      <h3>{client.name}</h3>
      <p>{client.designation}</p>
      <p>{client.description}</p>
    </div>
  );
}
