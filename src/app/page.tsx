import Hero from "@/components/Hero";
import SkillsBento from "@/components/SkillsBento";
import Showcase from "@/components/Showcase";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";
import ProjectsGallery from "@/components/ProjectsGallery";
import Terminal from "@/components/Terminal";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-charcoal text-foreground overflow-x-hidden">
      <Hero />
      <SkillsBento />
      <Showcase />
      <Experience />
      <Certifications />
      <ProjectsGallery />
      <Terminal />
      <Contact />
    </main>
  );
}

