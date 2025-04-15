import Navbar from '../components/Navbar';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Github, Linkedin, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navbar />
      <section className="pt-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="py-16">
          <h1 className="text-4xl font-bold font-inter text-blue-600 mb-12">Contact Me</h1>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <form className="space-y-6 bg-white p-6 rounded-lg shadow-lg">
                <div>
                  <Label htmlFor="name" className="text-gray-700 font-medium">Name</Label>
                  <Input
                    id="name"
                    placeholder="Ashish Raj"
                    className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-gray-700 font-medium">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="araj06643@gmail.com"
                    className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
                <div>
                  <Label htmlFor="message" className="text-gray-700 font-medium">Message</Label>
                  <textarea
                    id="message"
                    className="mt-1 w-full min-h-[120px] border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    placeholder="Your message"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Send Message
                </Button>
              </form>
            </div>

            {/* Social Links */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-gray-800">Connect With Me</h2>
              <div className="space-y-4">
                <a
                  href="https://github.com/Ashish0705"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <Github size={24} />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/ashish-raj-bb090831b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <Linkedin size={24} />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="mailto:araj06643@gmail.com"
                  className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <Mail size={24} />
                  <span>araj06643@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;