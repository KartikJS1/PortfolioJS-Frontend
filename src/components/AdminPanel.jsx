import React, { useState } from "react";
import {
  login,
  addProject,
  deleteProject,
  addSkill,
  deleteSkill,
} from "../api";

export default function AdminPanel({ onClose, onRefresh }) {
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [error, setError] = useState("");
  const [project, setProject] = useState({
    title: "",
    description: "",
    image: "",
    link: "",
  });
  const [projectImage, setProjectImage] = useState(null);
  const [skill, setSkill] = useState({ name: "", level: "" });

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await login(password);
      setToken(res.token);
      setError("");
      if (onLogin) onLogin(res.token);
    } catch {
      setError("Invalid password");
    }
  };

  const handleAddProject = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("title", project.title);
      formData.append("description", project.description);
      formData.append("link", project.link); // <-- add this
      if (projectImage) formData.append("image", projectImage);

      await addProject(formData, token);
      setProject({ title: "", description: "", image: "", link: "" }); // <-- reset link
      setProjectImage(null);
      onRefresh();
    } catch {
      setError("Failed to add project");
    }
  };

  const handleAddSkill = async (e) => {
    e.preventDefault();
    try {
      await addSkill(skill, token);
      setSkill({ name: "", level: "" });
      onRefresh();
    } catch {
      setError("Failed to add skill");
    }
  };

  return (
    <div className="admin-panel">
      <button className="close-btn" onClick={onClose}>
        X
      </button>
      {!token ? (
        <form onSubmit={handleLogin}>
          <h3>Admin Login</h3>
          <input
            type="password"
            placeholder="Enter admin password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </form>
      ) : (
        <div>
          <h3>Add Project</h3>
          <form onSubmit={handleAddProject}>
            <input
              type="text"
              placeholder="Title"
              value={project.title}
              onChange={(e) =>
                setProject({ ...project, title: e.target.value })
              }
              required
            />
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setProjectImage(e.target.files[0])}
            />
            <textarea
              placeholder="Description"
              value={project.description}
              onChange={(e) =>
                setProject({ ...project, description: e.target.value })
              }
              required
            />
            <input
              type="text"
              placeholder="Project Link (GitHub or Live URL)"
              value={project.link}
              onChange={(e) => setProject({ ...project, link: e.target.value })}
            />
            <button type="submit">Add Project</button>
          </form>
          <h3>Add Skill</h3>
          <form onSubmit={handleAddSkill}>
            <input
              type="text"
              placeholder="Skill Name"
              value={skill.name}
              onChange={(e) => setSkill({ ...skill, name: e.target.value })}
              required
            />
            <input
              type="text"
              placeholder="Level"
              value={skill.level}
              onChange={(e) => setSkill({ ...skill, level: e.target.value })}
              required
            />
            <button type="submit">Add Skill</button>
          </form>
        </div>
      )}
    </div>
  );
}
