
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center pt-16">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="inline-block rounded-full bg-muted px-3 py-1 text-sm">
            <span className="font-medium">
              4+ Years Experience
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold font-display leading-tight">
            Full Stack Developer <span className="text-gradient">Specializing</span> in Modern Web Tech
          </h1>
          
          <p className="text-muted-foreground text-lg md:text-xl max-w-md">
            Transforming ideas into exceptional digital experiences with React, React Native, Node.js, and more.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-2">
            <Button asChild size="lg" className="group">
              <a href="#projects">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#contact">
                Get In Touch
              </a>
            </Button>
          </div>
          
          <div className="flex gap-4 pt-2">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:contact@example.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="relative animate-slide-in-right" style={{ animationDelay: '0.4s' }}>
          <div className="aspect-square max-w-md mx-auto">
            <div className="relative w-full h-full">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-light/20 to-teal-light/20 rounded-full blur-3xl"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-purple/30 to-teal/30 rounded-3xl -rotate-6"></div>
              <div className="absolute inset-4 bg-background rounded-2xl flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800&h=800" 
                  alt="Female Developer" 
                  className="rounded-2xl object-cover w-full h-full"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-background p-4 rounded-xl shadow-lg">
                <div className="text-2xl font-bold text-gradient">4+</div>
                <div className="text-sm text-muted-foreground">Years of Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
