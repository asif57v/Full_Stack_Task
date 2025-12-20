export default function ProjectCard({ project }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: 10, width: 250 }}>
      <img src={project.imageUrl} width="100%" />
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <button>Read More</button>
    </div>
  );
}
