import { motion } from "framer-motion"
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
    image: calculatorProject,
    technologies: ["JavaScript", "Local Storage", "HTML", "CSS"],
    demoLink: "#",
    githubLink: "#"
  },
  {
    title: "Personal Portfolio",
    description: "This very portfolio website you're viewing! A modern, responsive showcase of my work and skills built with cutting-edge technologies.",
    image: weatherProject,
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    demoLink: "http://huzaifaweb.xyz",
    githubLink: "#"
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
}

export default function ProjectsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Featured <span className="text-primary">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of my development work across various technologies and domains
            </p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {projects.map((project, index) => (
              <motion.div 
                key={index} 
                className="bg-card rounded-xl overflow-hidden shadow-professional hover:shadow-gold transition-all duration-300 group"
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <motion.img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                
                {/* Project Content */}
                <div className="p-6">
                  <motion.h3 
                    className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    {project.title}
                  </motion.h3>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span 
                        key={tech} 
                        className="px-3 py-1 bg-primary/10 text-primary rounded-md text-sm font-medium"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: techIndex * 0.05 }}
                        whileHover={{ scale: 1.1, backgroundColor: "hsl(47, 100%, 50%)" }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                  
                  {/* Project Links */}
                  <div className="flex gap-3">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button variant="default" size="sm" asChild>
                        <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </a>
                      </Button>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4" />
                          Code
                        </a>
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* View All Projects Button */}
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="hero" size="lg">
                View All Projects
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}