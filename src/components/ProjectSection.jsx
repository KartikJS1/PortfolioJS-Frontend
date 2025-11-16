import React from "react";
import ProjectCard from "./ProjectCard";

export default function ProjectSection({ projects, isAdmin, onDelete }) {
  return (
    <section id="projects">
      <h2 id="title">Projects</h2>
      <div className="project-list">
        {projects.map((p) => (
          <ProjectCard
            key={p._id}
            project={p}
            isAdmin={isAdmin}
            onDelete={() => onDelete && onDelete(p._id)}
          />
        ))}
      </div>
    </section>
  );
}
