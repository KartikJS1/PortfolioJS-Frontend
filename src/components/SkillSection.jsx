import React from "react";
import SkillCard from "./SkillCard";

export default function SkillSection({ skills, isAdmin, onDelete }) {
  return (
    <section id="skills">
      <h2 id="title">Skills</h2>
      <div className="skill-list">
        {skills.map((s) => (
          <SkillCard
            key={s._id}
            skill={s}
            isAdmin={isAdmin}
            onDelete={() => onDelete && onDelete(s._id)}
          />
        ))}
      </div>
    </section>
  );
}
