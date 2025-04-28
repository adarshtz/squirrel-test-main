import React from "react";
import { cn } from "@/lib/utils";
import ShinyText from "@/components/shiny-text";
import { projectsData } from "@/constants";
import { Button } from "@/components/ui/button";
import ProjectCard from "@/components/project-card";

const Projects = () => {
  return (
    <section id="projects" className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="projects-header text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight bg-gradient-to-b from-white to-[#363535] text-transparent bg-clip-text leading-[1.1] sm:leading-[1.15] md:leading-[1.2]">
            Our Search Solutions in Action
          </h2>
          <p className="text-base sm:text-lg font-normal leading-7 text-transparent bg-clip-text bg-gradient-to-r from-zinc-400 to-zinc-600">
            Explore how our technology is powering search experiences across
            industries
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-8">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* View all projects button */}
        {/* <div className="flex justify-center mt-12">
          <Button size="lg" className="px-8">
            View All Projects
          </Button>
        </div> */}
      </div>
    </section>
  );
};

export default Projects;
