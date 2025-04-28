"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const ProjectCard = ({ project }) => {
  return (
    <div className="group overflow-hidden rounded-xl border border-white/5 bg-neutral-900/30 transition-all duration-300 hover:bg-neutral-900/50 hover:shadow-lg">
      {/* Project image */}
      <div className="relative h-40 w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-squirrel-primary-800/10 group-hover:bg-squirrel-primary-800/0 transition-all duration-300 z-10"></div>
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          onError={(e) => {
            // Fallback image if the project image doesn't load
            e.target.src = "/client/aid-circle.png";
          }}
        />
      </div>

      {/* Project content */}
      <div className="p-4 space-y-3">
        <h3 className="text-white text-lg font-medium">{project.title}</h3>
        <p className="text-squirrel-neutral-100 text-sm line-clamp-2">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mt-2">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs px-2 py-0.5 rounded-full bg-neutral-800 text-squirrel-neutral-100"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Call to action */}
        <div className="pt-2">
          <Link href={project.link} className="inline-block">
            <Button
              variant="outline"
              size="sm"
              className="text-xs group-hover:bg-squirrel-primary-600 group-hover:text-white transition-colors duration-300"
            >
              View Project
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
