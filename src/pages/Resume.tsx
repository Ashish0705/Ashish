
import Navbar from '../components/Navbar';
import { Button } from '@/components/ui/button';
import { FileDown } from 'lucide-react';

const Resume = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <section className="pt-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="py-16">
          <div className="flex justify-between items-center mb-12">
            <h1 className="text-4xl font-bold font-inter">Resume</h1>
            <a
  href="/Soft.pdf" // Replace with the actual path to your CV file
  download="Soft.pdf" // The name of the file when downloaded
  className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
>
  <FileDown size={20} />
  Download CV
</a>
          </div> {/* Closing the flex container */}
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Experience</h2>
              <div className="space-y-6">
                <div className="border-l-2 border-primary pl-4">
                  <p className="text-gray-600"> Mern Stack Developer -Present</p>
                  <ul className="list-disc list-inside mt-2 text-gray-600">
                    <li>Developed and maintained full-stack web applications using React and Node.js</li>
                    <li>Implemented responsive designs and improved UI/UX</li>
                    <li>Worked with REST APIs and database management</li>
                  </ul>
                </div>
                <div className="border-l-2 border-primary pl-4">
                  <h3 className="font-semibold">Web Development Lead</h3>
                  <ul className="list-disc list-inside mt-2 text-gray-600">
                    <li>Led a team of developers in creating the club's website</li>
                    <li>Organized web development workshops and coding events</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Certifications</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold">CipherSchool 2024</h3>
                  <p className="text-gray-600">Data Structure and Algorithm</p>
                </div>
                <div>
                  <h3 className="font-semibold">Figma Design 2025</h3>
                  <p className="text-gray-600">Design and UI/UX for the frontend application</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resume;
