
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-secondary to-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col items-center text-center">
        <div className="w-32 h-32 rounded-full overflow-hidden mb-8 ring-4 ring-primary/20">
          <img src ="ash.jpg" // Replace with your image path
            alt="Profile"
            className="w-full h-full object-cover transform scale-110 transition-transform duration-300"
          />
        </div>
        <h1 className="font-inter font-bold text-4xl md:text-5xl lg:text-6xl mb-4 animate-fade-up">
          Ashish Raj
        </h1>
        <p className="font-poppins text-lg md:text-xl text-gray-600 mb-8 animate-fade-up">
          Full Stack Developer | UI/UX Enthusiast | Problem Solver
        </p>
        <div className="flex space-x-4 animate-fade-up">
          <a
            href="https://github.com/Ashish0705"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-gray-100 hover:bg-primary hover:text-white transition-colors"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/ashish-rajku/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-gray-100 hover:bg-primary hover:text-white transition-colors"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:araj06643@gmail.com"
            className="p-2 rounded-full bg-gray-100 hover:bg-primary hover:text-white transition-colors"
          >
            <Mail size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
