import { GraduationCap, Calendar } from "lucide-react"

const educationData = [
  {
    institution: "Aptech IT Academy",
    degree: "Diploma in Software Engineering",
    period: "2022 - 2024",
    description: "Specialized in Web Designing and Development",
    status: "completed"
  },
  {
    institution: "Shipowner's College",
    degree: "Intermediate in Computer Science", 
    period: "2020 - 2022",
    description: "Focus on Computer Science fundamentals",
    status: "completed"
  },
  {
    institution: "Rising Sun Children Academy",
    degree: "Secondary School Education",
    period: "2018 - 2020", 
    description: "General education with academic excellence",
    status: "completed"
  }
]

export default function EducationSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              My <span className="text-primary">Education</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A journey of continuous learning and academic achievement
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-primary hidden lg:block"></div>
            
            <div className="space-y-8">
              {educationData.map((edu, index) => (
                <div key={index} className="flex gap-8 items-center animate-fade-up" style={{animationDelay: `${index * 0.2}s`}}>
                  {/* Timeline dot */}
                  <div className="hidden lg:flex w-16 h-16 bg-gradient-primary rounded-full items-center justify-center shadow-glow flex-shrink-0">
                    <GraduationCap className="w-8 h-8 text-primary-foreground" />
                  </div>
                  
                  {/* Content card */}
                  <div className="flex-1 bg-card rounded-xl p-6 lg:p-8 shadow-professional hover:shadow-glow transition-all duration-300">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-4">
                      <h3 className="text-2xl font-bold text-foreground">{edu.institution}</h3>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span className="font-medium">{edu.period}</span>
                      </div>
                    </div>
                    
                    <h4 className="text-lg font-semibold text-primary mb-2">{edu.degree}</h4>
                    <p className="text-muted-foreground">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}