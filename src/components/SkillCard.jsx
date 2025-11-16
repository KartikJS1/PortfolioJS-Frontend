import React from "react";

export default function SkillCard({ skill, isAdmin, onDelete }) {
  return (
    <div className="skill-card">
      <h4>{skill.name}</h4>
      <p>Level: {skill.level}</p>
      {isAdmin && (
        <button className="delete-btn" onClick={onDelete}>
          Delete
        </button>
      )}
    </div>
  );
}
