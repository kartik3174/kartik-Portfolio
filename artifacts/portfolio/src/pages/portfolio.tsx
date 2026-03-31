import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturedProject from "@/components/FeaturedProject";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import TimelineSection from "@/components/TimelineSection";
import AchievementsSection from "@/components/AchievementsSection";
import CertificationsSection from "@/components/CertificationsSection";
import GitHubStats from "@/components/GitHubStats";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ChatbotWidget from "@/components/ChatbotWidget";
import LoadingScreen from "@/components/LoadingScreen";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const sections = [
      "hero", "featured", "about", "skills", "projects",
      "timeline", "achievements", "certifications", "github", "education", "contact",
    ];
    const observers: IntersectionObserver[] = [];

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { threshold: 0.3 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <>
      <LoadingScreen />

      <div className="min-h-screen bg-background text-foreground grid-bg relative">
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />
          <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-cyan-500/5 rounded-full blur-2xl" />
        </div>

        <Navbar activeSection={activeSection} />

        <main className="relative z-10">
          <section id="hero"><HeroSection /></section>
          <section id="featured"><FeaturedProject /></section>
          <section id="about"><AboutSection /></section>
          <section id="skills"><SkillsSection /></section>
          <section id="projects"><ProjectsSection /></section>
          <section id="timeline"><TimelineSection /></section>
          <section id="achievements"><AchievementsSection /></section>
          <section id="certifications"><CertificationsSection /></section>
          <section id="github"><GitHubStats /></section>
          <section id="education"><EducationSection /></section>
          <section id="contact"><ContactSection /></section>
        </main>

        <Footer />
        <ChatbotWidget />
      </div>
    </>
  );
}
