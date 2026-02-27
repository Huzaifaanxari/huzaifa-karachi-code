import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import { useState } from "react"
import calculatorProject from "@/assets/calculator-project.jpg"
import fitnesstrackerProject from "@/assets/fitness-tracker.png"
import weatherProject from "@/assets/weather-project.jpg"
import ecommerceProject from "@/assets/ecommerce-project.jpg"
import futureMemeMachine from "@/assets/future-meme-project.png"

const projects = [

  {
    title: "Fitness Tracker",
    description: "A fitness tracking app to log workouts and monitor progress. React and Node with MongoDB for data persistence.",
    image: fitnesstrackerProject,
    technologies: ["JavaScript", "Local Storage", "HTML", "CSS"],
    demoLink: "https://fitness-tracker-frontend-two.vercel.app/",
    githubLink: "https://github.com/Huzaifaanxari/Fitness-Tracker"
  },
  {
    title: "E-commerce Website",
    description: "Full-featured e-commerce platform with product catalog and payment integration.",
    image: ecommerceProject,
    technologies: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
    demoLink: null,
    githubLink: "https://github.com/Huzaifaanxari/Second_Sem_Pro"
  },
  {
    title: "Shopping Cart System",
    description: "Dynamic shopping cart system with add/remove functionality.",
    image: ecommerceProject,
    technologies: ["JavaScript", "Local Storage", "HTML", "CSS"],
    demoLink: null,
    githubLink: "https://github.com/Huzaifaanxari/Second_Sem_Pro"
  },
  {
    title: "Calculator App",
    description: "A modern, responsive calculator application built with clean UI design and advanced mathematical operations.",
    image: calculatorProject,
    technologies: ["JavaScript", "HTML", "CSS", "Responsive Design"],
    demoLink: null, // set null for demo
    githubLink: "https://github.com/Huzaifaanxari/Calculator"
  },
  {
    title: "Weather App",
    description: "Real-time weather application providing current conditions and forecasts.",
    image: weatherProject,
    technologies: ["JavaScript", "API Integration", "HTML", "CSS"],
    demoLink: null,
    githubLink: "https://github.com/Huzaifaanxari/Weather_Project"
  },
  {
    title: "Future Meme Machine",
    description: "A funny entertainment React app that predicts your future in the most hilarious way possible. Just click a button and get a random, meme-style prediction that will make you laugh (or question your destiny 😄). Built with React for fast and smooth interaction.",
    image: futureMemeMachine,
    technologies: ["React", "JavaScript", "HTML", "CSS"],
    demoLink: "https://future-meme-machine.vercel.app/",
    githubLink: "https://github.com/Huzaifaanxari/future-meme-machine.git"
  }
]

export default function ProjectsSection() {
  const [showModal, setShowModal] = useState(false)

  const handleDemoClick = (demoLink) => {
    if (!demoLink) {
      setShowModal(true)
    } else {
      window.open(demoLink, "_blank")
    }
  }

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
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

          {/* Projects Grid */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="bg-card rounded-xl overflow-hidden shadow-professional hover:shadow-gold transition-all duration-300 group"
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
                      <Button variant="default" size="sm" onClick={() => handleDemoClick(project.demoLink)}>
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
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

          {/* Modal */}
          {showModal && (
            <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
              <div className="bg-card p-6 rounded-lg shadow-lg max-w-md text-center">
                <h3 className="text-xl font-bold mb-4 text-primary">⚠️ No Live Demo</h3>
                <p className="text-muted-foreground mb-6">
                  I am so sorry 😔 currently I don’t have a live demo,
                  but the GitHub repository is available so you can check it out from there.
                </p>
                <Button variant="default" onClick={() => setShowModal(false)}>
                  Okay, Got It
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
