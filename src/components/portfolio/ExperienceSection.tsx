import { Briefcase, Calendar, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    name: "POS (Inventory System)",
    description: "Developed a comprehensive Point of Sale system with inventory management capabilities",
    technologies: ["PHP", "MySQL", "JavaScript", "Bootstrap"]
  },
  {
    name: "Medic Exam (Insurance System)",
    description: "Built an insurance management system for medical examinations and claims processing",
    technologies: ["PHP", "SQL Server", "HTML/CSS", "jQuery"]
  },
  {
    name: "Web Scraping (Python Automation)",
    description: "Created automated web scraping solutions for data collection and processing",
    technologies: ["Python", "BeautifulSoup", "Selenium", "Pandas"]
  },
  {
    name: "Google App Script Automation",
    description: "Developed automation scripts for Google Workspace applications and workflows",
    technologies: ["Google Apps Script", "JavaScript", "Google APIs"]
  }
]

export default function ExperienceSection() {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Work <span className="text-primary">Experience</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional experience and projects that shaped my development journey
            </p>
          </div>
          
          {/* Experience Card */}
          <div className="bg-card rounded-2xl p-8 lg:p-12 shadow-professional mb-12">
            <div className="flex items-start gap-6 mb-8">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0 shadow-glow">
                <Briefcase className="w-8 h-8 text-primary-foreground" />
              </div>
              
              <div className="flex-1">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-foreground">Junior PHP Developer</h3>
                    <h4 className="text-xl text-primary font-semibold">Cubitrek Software House</h4>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-5 h-5" />
                    <span className="font-medium">Internship Program</span>
                  </div>
                </div>
                
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Gained hands-on experience in web development, database management, and automation. 
                  Worked on diverse projects ranging from inventory systems to web scraping applications.
                </p>
                
                <div className="flex flex-wrap gap-3">
                  {["PHP", "Python", "MySQL", "JavaScript", "Web Development", "Automation"].map((skill) => (
                    <span key={skill} className="px-4 py-2 bg-primary/10 text-primary rounded-lg font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-card rounded-xl p-6 shadow-professional hover:shadow-glow transition-all duration-300 animate-fade-up" style={{animationDelay: `${index * 0.1}s`}}>
                <h4 className="text-xl font-bold text-foreground mb-3">{project.name}</h4>
                <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-md text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <Button variant="ghost" size="sm" className="text-primary hover:text-primary-dark p-0">
                  Learn more <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}