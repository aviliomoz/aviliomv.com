import Link from "next/link";

const fields = [
  { name: "Participación", prop: "participation" },
  { name: "Tipo", prop: "type" },
  { name: "Nivel", prop: "level" },
  { name: "Area", prop: "area" },
  { name: "Autor", prop: "author" },
  { name: "Año", prop: "year" },
  { name: "Centro de estudios", prop: "study_center" },
  { name: "Observación", prop: "observation" },
];

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <h4>{project.title}</h4>
      {fields.map((field, index) => {
        return (
          project[field.prop] && (
            <p key={index}>
              <span>{`${field.name}: `}</span>
              {project[field.prop]}
            </p>
          )
        );
      })}
      {project.link && (
        <p>
          <span>Enlace: </span>
          <Link href={project.link}>
            <a target="_blank" style={{ color: "#0093AB" }}>Disponible aquí</a>
          </Link>
        </p>
      )}
      <hr
        style={{
          margin: "20px 0px",
          border: "none",
          borderBottom: "1px solid rgba(0,0,0,0.2)",
        }}
      />
    </div>
  );
};

export default ProjectCard;
