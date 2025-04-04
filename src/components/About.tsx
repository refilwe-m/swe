
import React from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Calendar, Users, Code } from 'lucide-react';

const About = () => {
  const highlights = [
    { 
      icon: <Code className="h-6 w-6 text-purple" />,
      title: "Technical Expertise",
      description: "Specialized in React ecosystem with a strong foundation in JavaScript and modern web standards."
    },
    { 
      icon: <Users className="h-6 w-6 text-teal" />,
      title: "Team Collaboration",
      description: "Experienced in working with cross-functional teams to deliver complex projects on tight deadlines."
    },
    { 
      icon: <Calendar className="h-6 w-6 text-purple" />,
      title: "Continuous Growth",
      description: "Committed to ongoing learning and staying current with the latest technologies and best practices."
    }
  ];

  return (
    <section id="about" className="py-16 bg-muted/30">
      <div className="section-container">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-2/5 space-y-6">
            <h2 className="section-title text-gradient">About Me</h2>
            <div className="prose max-w-none">
              <p className="text-lg leading-relaxed">
                As a passionate full-stack developer with 4+ years of experience, I've dedicated my career to building innovative and user-focused web and mobile applications. My journey in tech began with a fascination for creating solutions that make a difference.
              </p>
              <p className="text-lg leading-relaxed mt-4">
                Being a woman in tech has given me a unique perspective on problem-solving and teamwork. I bring both technical expertise and empathetic communication to every project, ensuring that the end product not only works flawlessly but also truly meets user needs.
              </p>
              <p className="text-lg leading-relaxed mt-4">
                When I'm not coding, you'll find me mentoring aspiring developers, speaking at tech meetups, or exploring the latest advancements in web technologies.
              </p>
            </div>
            <div className="flex gap-4 pt-4">
              <Button asChild size="lg">
                <a href="#contact">Contact Me</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="/resume.pdf" target="_blank">Download Resume</a>
              </Button>
            </div>
          </div>
          
          <div className="md:w-3/5">
            <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
              {highlights.map((item, index) => (
                <div 
                  key={index} 
                  className="bg-background rounded-xl p-6 shadow-sm card-hover"
                >
                  <div className="flex gap-4 items-start">
                    <div className="mt-1">{item.icon}</div>
                    <div>
                      <h3 className="font-display font-bold text-xl mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
              
              <div className="bg-gradient-primary text-white rounded-xl p-6 shadow-sm">
                <h3 className="font-display font-bold text-xl mb-4">Key Achievements</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span>Led development of enterprise React applications used by thousands of users</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span>Reduced API response times by 40% through optimized Node.js backend architecture</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span>Mentored junior developers and advocated for women in tech initiatives</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
