import React, { useEffect, useState } from "react";
import { fetchProjects, fetchSkills, deleteProject, deleteSkill } from "./api";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProjectSection from "./components/ProjectSection";
import SkillSection from "./components/SkillSection";
import AdminPanel from "./components/AdminPanel";
import "./App.css";

export default function App() {
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);
  const [showAdmin, setShowAdmin] = useState(false);
  const [adminToken, setAdminToken] = useState("");

  const loadData = () => {
    fetchProjects().then(setProjects);
    fetchSkills().then(setSkills);
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleDeleteProject = async (id) => {
    if (!adminToken) return;
    await deleteProject(id, adminToken);
    loadData();
  };

  const handleDeleteSkill = async (id) => {
    if (!adminToken) return;
    await deleteSkill(id, adminToken);
    loadData();
  };

  return (
    <div>
      <Navbar onAdminClick={() => setShowAdmin(true)} />
      <section id="home" className="home-section">
        <h1>Hello I am Kartik Ramesh Chavan</h1>
        <h2>Software Developer</h2>
        <p>Explore my projects and skills below.</p>
      </section>
      <ProjectSection
        projects={projects}
        isAdmin={!!adminToken}
        onDelete={handleDeleteProject}
      />
      <SkillSection
        skills={skills}
        isAdmin={!!adminToken}
        onDelete={handleDeleteSkill}
      />
      <Footer />
      {showAdmin && (
        <AdminPanel
          onClose={() => setShowAdmin(false)}
          onRefresh={loadData}
          onLogin={setAdminToken}
          token={adminToken}
        />
      )}
    </div>
  );
}
