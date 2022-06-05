const fields = [
  { name: "Participación", prop: "participation" },
  { name: "Tipo", prop: "type" },
  { name: "Nivel", prop: "level" },
  { name: "Area", prop: "area" },
  { name: "Autor", prop: "author" },
  { name: "Año", prop: "year" },
  { name: "Centro de estudios", prop: "study_center" },
  { name: "Observación", prop: "observation" },
  { name: "Enlace", prop: "link" },
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
