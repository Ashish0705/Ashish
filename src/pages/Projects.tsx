import Navbar from '../components/Navbar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform built with React, Node.js, and PostgreSQL. Features include user authentication, product management, and payment integration.",
    tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
    github: "https://github.com/Ashish0705/Backend-Project-Medical",
    live: "#"
  },
  {
    title: "Library Management System",
    description: "A collaborative task management application with real-time updates using WebSocket. Includes features like task assignment, progress tracking, and team chat.",
    tech: ["Cpp"],
    github: "https://github.com/Ashish0705/Week1-DSA-CipherSchools",
    live: "#"
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navbar />
      <section className="pt-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="py-16">
          <h1 className="text-4xl font-bold font-inter text-blue-600 mb-12">Projects</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Card key={project.title} className="flex flex-col bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow">
                <CardHeader className="bg-gradient-to-r from-blue-100 to-blue-50 p-4 rounded-t-lg">
                  <CardTitle className="text-lg font-semibold text-blue-700">{project.title}</CardTitle>
                  <CardDescription className="text-gray-600">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow p-4">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-blue-100 text-blue-700 rounded-md text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4 mt-auto">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      <Github size={20} />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      <ExternalLink size={20} />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;