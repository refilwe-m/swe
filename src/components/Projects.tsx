
import React, { useState } from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: 'frontend' | 'fullstack' | 'mobile';
  githubLink: string;
  liveLink?: string;
}

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  
  const projects: Project[] = [
    {
      id: 1,
      title: "E-commerce Dashboard",
      description: "A comprehensive admin dashboard for e-commerce stores with real-time analytics, inventory management, and order processing.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=800&h=400",
      tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      category: "fullstack",
      githubLink: "https://github.com",
      liveLink: "https://example.com"
    },
    {
      id: 2,
      title: "Health & Fitness App",
      description: "A mobile application for tracking workouts, nutrition, and personal health metrics with personalized recommendations.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800&h=400",
      tags: ["React Native", "Firebase", "Redux", "Health API"],
      category: "mobile",
      githubLink: "https://github.com"
    },
    {
      id: 3,
      title: "Financial Portfolio Tracker",
      description: "Interactive dashboard for monitoring investments, analyzing performance, and visualizing financial growth.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800&h=400",
      tags: ["React", "TypeScript", "Chart.js", "Firebase"],
      category: "frontend",
      githubLink: "https://github.com",
      liveLink: "https://example.com"
    },
    {
      id: 4,
      title: "Social Media Platform",
      description: "Full-stack social networking application with real-time messaging, media sharing, and community features.",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80&w=800&h=400",
      tags: ["React", "Node.js", "Socket.io", "MongoDB", "AWS"],
      category: "fullstack",
      githubLink: "https://github.com",
      liveLink: "https://example.com"
    },
  ];
  
  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="section-container">
      <h2 className="section-title text-center">Featured <span className="text-gradient">Projects</span></h2>
      <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
        A selection of my recent work showcasing my skills in React, React Native, Node.js, and more.
      </p>
      
      <Tabs defaultValue="all" className="w-full max-w-3xl mx-auto mb-12">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="all" onClick={() => setSelectedCategory('all')}>All</TabsTrigger>
          <TabsTrigger value="frontend" onClick={() => setSelectedCategory('frontend')}>Frontend</TabsTrigger>
          <TabsTrigger value="fullstack" onClick={() => setSelectedCategory('fullstack')}>Full Stack</TabsTrigger>
          <TabsTrigger value="mobile" onClick={() => setSelectedCategory('mobile')}>Mobile</TabsTrigger>
        </TabsList>
      </Tabs>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project) => (
          <Card key={project.id} className="overflow-hidden card-hover">
            <div className="aspect-video w-full overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <Badge key={index} variant="secondary">{tag}</Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button asChild variant="outline" size="sm">
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  Code
                </a>
              </Button>
              {project.liveLink && (
                <Button asChild size="sm">
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
      
      <div className="text-center mt-12">
        <Button asChild size="lg" variant="outline">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 h-5 w-5" />
            View More Projects on GitHub
          </a>
        </Button>
      </div>
    </section>
  );
};

export default Projects;
