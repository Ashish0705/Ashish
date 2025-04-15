import Navbar from '../components/Navbar';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navbar />
      <section className="pt-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="py-16 space-y-8">
          <h1 className="text-4xl font-bold font-inter text-blue-600">About Me</h1>
          <div className="space-y-6 text-gray-700">
            <p className="bg-blue-100 p-4 rounded-lg shadow-md">
              I am a passionate Full Stack Developer with a strong foundation in Computer Science
              and a keen eye for UI/UX design. With experience in both frontend and backend
              development, I strive to create seamless, user-friendly applications that solve
              real-world problems.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 text-purple-600">Education</h2>
            <p className="bg-purple-50 p-3 rounded-lg shadow-sm">Bachelor of Technology in Computer Science and Engineering</p>
            <p className="text-gray-500">Expected Graduation: 2026</p>

            <h2 className="text-2xl font-semibold mt-8 text-green-600">Education</h2>
            <p className="bg-green-50 p-3 rounded-lg shadow-sm">Diploma in Mechatronics Engineering</p>
            <p className="text-gray-500">Expected Graduation: 2022</p>

            <h2 className="text-2xl font-semibold mt-8 text-indigo-600">Technical Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-indigo-50 p-4 rounded-lg shadow-md">
                <h3 className="font-semibold text-indigo-700">Frontend</h3>
                <ul className="list-disc list-inside text-gray-700">
                  <li>React.js</li>
                  <li>TypeScript</li>
                  <li>Tailwind CSS</li>
                  <li>Next.js</li>
                </ul>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg shadow-md">
                <h3 className="font-semibold text-yellow-700">Backend</h3>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Node.js</li>
                  <li>Express.js</li>
                  <li>Python</li>
                  <li>PostgreSQL</li>
                </ul>
              </div>
              <div className="bg-pink-50 p-4 rounded-lg shadow-md">
                <h3 className="font-semibold text-pink-700">Tools & Others</h3>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Git</li>
                  <li>Docker</li>
                  <li>AWS</li>
                  <li>Figma</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;