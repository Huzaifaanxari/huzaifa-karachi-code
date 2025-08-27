import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import calculatorProject from "@/assets/calculator-project.jpg"
import weatherProject from "@/assets/weather-project.jpg"
import ecommerceProject from "@/assets/ecommerce-project.jpg"

const projects = [
  {
    title: "Calculator App",
    description: "A modern, responsive calculator application built with clean UI design and advanced mathematical operations. Features include history tracking and keyboard support.",
    image: calculatorProject,
    technologies: ["JavaScript", "HTML", "CSS", "Responsive Design"],
    demoLink: "#",
    githubLink: "#"
  },
  {
    title: "Weather App", 
    description: "Real-time weather application providing current conditions, forecasts, and location-based weather data with an intuitive and beautiful interface.",
    image: weatherProject,
    technologies: ["JavaScript", "API Integration", "HTML", "CSS"],
    demoLink: "#",
    githubLink: "#"
  },
  {
    title: "E-commerce Website",
    description: "Full-featured e-commerce platform with product catalog, shopping cart, user authentication, and payment integration. Modern and mobile-responsive design.",
    image: ecommerceProject,
    technologies: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
    demoLink: "#",
    githubLink: "#"
  },
  {
    title: "Shopping Cart System",
    description: "Dynamic shopping cart system with add/remove functionality, quantity management, price calculations, and local storage persistence.",
    image: calculatorProject, // Using calculator image as placeholder
    technologies: ["JavaScript", "Local Storage", "HTML", "CSS"],
    demoLink: "#",
    githubLink: "#"
  },
  {
    title: "Personal Portfolio",
    description: "This very portfolio website you're viewing! A modern, responsive showcase of my work and skills built with cutting-edge technologies.",
    image: weatherProject, // Using weather image as placeholder
    technologies: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
    demoLink: "http://huzaifaweb.xyz",
    githubLink: "#"
  }
]

export default function ProjectsSection() {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Featured <span className="text-primary">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of my development work across various technologies and domains
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-card rounded-xl overflow-hidden shadow-professional hover:shadow-glow transition-all duration-300 animate-fade-up group" style={{animationDelay: `${index * 0.1}s`}}>
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-primary/10 text-primary rounded-md text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Project Links */}
                  <div className="flex gap-3">
                    <Button variant="default" size="sm" asChild>
                      <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* View All Projects Button */}
          <div className="text-center mt-12">
            <Button variant="hero" size="lg">
              View All Projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}