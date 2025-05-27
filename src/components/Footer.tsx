import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/50 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="font-display font-bold text-2xl text-gradient mb-4">
              Refilwe
            </h3>
            <p className="text-muted-foreground max-w-md mb-6">
              Creating exceptional digital experiences with modern web
              technologies. Available for freelance projects and full-time
              positions.
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/refilwe-m"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-background p-2 rounded-full hover:bg-primary/10 transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/refilwe-m-mashile/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-background p-2 rounded-full hover:bg-primary/10 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:refilwe.dev@gmail.com"
                className="bg-background p-2 rounded-full hover:bg-primary/10 transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-medium text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="text-muted-foreground">Web Development</li>
              <li className="text-muted-foreground">Mobile App Development</li>
              <li className="text-muted-foreground">UI/UX Design</li>
              <li className="text-muted-foreground">API Development</li>
              <li className="text-muted-foreground">Code Reviews</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Refilwe. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm mt-2 md:mt-0">
            Designed & Built with ❤️
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
