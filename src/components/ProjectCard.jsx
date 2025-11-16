import React from "react";

export default function ProjectCard({ project, isAdmin, onDelete }) {
  const cardContent = (
    <>
      {project.imageUrl && <img src={project.imageUrl} alt={project.title} />}
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      {isAdmin && (
        <button className="delete-btn" onClick={onDelete}>
          Delete
        </button>
      )}
    </>
  );

  return project.link ? (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div className="project-card">{cardContent}</div>
    </a>
  ) : (
    <div className="project-card">{cardContent}</div>
  );
}
