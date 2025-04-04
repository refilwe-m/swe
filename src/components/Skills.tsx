
import React from 'react';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface Skill {
  name: string;
  level: number;
  color: string;
}

const Skills = () => {
  const frontendSkills: Skill[] = [
    { name: "React", level: 95, color: "bg-purple" },
    { name: "React Native", level: 90, color: "bg-teal" },
    { name: "TypeScript", level: 85, color: "bg-purple" },
    { name: "JavaScript", level: 95, color: "bg-teal" },
    { name: "HTML/CSS", level: 90, color: "bg-purple" },
    { name: "Redux", level: 80, color: "bg-teal" },
  ];

  const backendSkills: Skill[] = [
    { name: "Node.js", level: 85, color: "bg-purple" },
    { name: "Express", level: 85, color: "bg-teal" },
    { name: "REST API", level: 90, color: "bg-purple" },
    { name: "GraphQL", level: 75, color: "bg-teal" },
    { name: "MongoDB", level: 85, color: "bg-purple" },
    { name: "SQL", level: 75, color: "bg-teal" },
  ];

  const toolsSkills: Skill[] = [
    { name: "Git/GitHub", level: 95, color: "bg-purple" },
    { name: "Docker", level: 75, color: "bg-teal" },
    { name: "AWS", level: 70, color: "bg-purple" },
    { name: "Figma", level: 85, color: "bg-teal" },
    { name: "Jest/Testing Library", level: 80, color: "bg-purple" },
    { name: "CI/CD", level: 75, color: "bg-teal" },
  ];

  const SkillBar = ({ skill }: { skill: Skill }) => (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="font-medium">{skill.name}</span>
        <span className="text-sm text-muted-foreground">{skill.level}%</span>
      </div>
      <Progress value={skill.level} className={`h-2 ${skill.color}`} />
    </div>
  );

  return (
    <section id="skills" className="section-container bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title text-center">Technical <span className="text-gradient">Skills</span></h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          My expertise spans across frontend, backend, and development tools with a focus on the React ecosystem.
        </p>

        <Tabs defaultValue="frontend" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="frontend">Frontend</TabsTrigger>
            <TabsTrigger value="backend">Backend</TabsTrigger>
            <TabsTrigger value="tools">Tools & Others</TabsTrigger>
          </TabsList>
          
          <TabsContent value="frontend" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
              {frontendSkills.map((skill, index) => (
                <SkillBar key={index} skill={skill} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="backend" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
              {backendSkills.map((skill, index) => (
                <SkillBar key={index} skill={skill} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="tools" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
              {toolsSkills.map((skill, index) => (
                <SkillBar key={index} skill={skill} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          <div className="bg-background p-6 rounded-lg shadow-sm text-center card-hover">
            <div className="text-4xl font-bold text-gradient mb-2">4+</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>
          <div className="bg-background p-6 rounded-lg shadow-sm text-center card-hover">
            <div className="text-4xl font-bold text-gradient mb-2">20+</div>
            <div className="text-sm text-muted-foreground">Projects Completed</div>
          </div>
          <div className="bg-background p-6 rounded-lg shadow-sm text-center card-hover">
            <div className="text-4xl font-bold text-gradient mb-2">10+</div>
            <div className="text-sm text-muted-foreground">Happy Clients</div>
          </div>
          <div className="bg-background p-6 rounded-lg shadow-sm text-center card-hover">
            <div className="text-4xl font-bold text-gradient mb-2">5+</div>
            <div className="text-sm text-muted-foreground">Tech Talks Given</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
