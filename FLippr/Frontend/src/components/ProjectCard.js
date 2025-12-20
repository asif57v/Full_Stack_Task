export default function ProjectCard({ project, onDelete }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      padding: "15px",
      width: "250px"
    }}>
      <img src={project.imageUrl} alt="" width="100%" />
      <h3>{project.projectName}</h3>
      <p>{project.projectDescription}</p>

      <button onClick={() => onDelete(project._id)}>Delete</button>
    </div>
  );
}
