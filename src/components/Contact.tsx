import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Github,
  Linkedin,
  Mail,
  MessageSquare,
  Phone,
  Send,
  MapPin,
} from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { my } from "../../config";
const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
        duration: 5000,
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <section id="contact" className="section-container">
      <h2 className="section-title text-center">
        Get In <span className="text-gradient">Touch</span>
      </h2>
      <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
        Have a project in mind or want to discuss potential opportunities? Feel
        free to reach out!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium">
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium">
                  Your Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="subject" className="block text-sm font-medium">
                Subject
              </label>
              <Input
                id="subject"
                name="subject"
                placeholder="Project Inquiry"
                required
                value={formData.subject}
                onChange={handleChange}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-medium">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder="Tell me about your project or inquiry..."
                rows={5}
                required
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin mr-2 h-4 w-4 border-2 border-current border-t-transparent rounded-full" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </>
              )}
            </Button>
          </form>
        </div>

        <div className="space-y-8">
          <div className="bg-gradient-primary p-8 rounded-xl text-white">
            <h3 className="text-xl font-bold mb-4">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 mt-0.5" />
                <div>
                  <p className="font-medium">Email</p>
                  <a
                    href={`mailto:${my.email}`}
                    className="opacity-90 hover:opacity-100"
                  >
                    {my.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 mt-0.5" />
                <div>
                  <p className="font-medium">Phone</p>
                  <a
                    href={`tel:${my.phone}`}
                    className="opacity-90 hover:opacity-100"
                  >
                    {my.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5" />
                <div>
                  <p className="font-medium">Location</p>
                  <p className="opacity-90">Johannesburg, South Africa</p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-white/20">
              <p className="font-medium mb-3">Connect with me</p>
              <div className="flex gap-4">
                <a
                  href={my.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a
                  href={my.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="mailto:contact@example.com"
                  className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-muted rounded-xl p-6">
            <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
              <MessageSquare className="h-5 w-5" />
              Quick Response
            </h3>
            <p className="text-muted-foreground">
              I typically respond to inquiries within 24-48 hours. For urgent
              matters, please reach out via phone.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
