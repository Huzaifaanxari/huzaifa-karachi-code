import { Code, Database, Globe, Settings } from "lucide-react"

const skillsData = [
  {
    category: "Programming",
    icon: <Code className="w-8 h-8" />,
    skills: ["PHP", "Python", "JavaScript"],
    color: "from-blue-500 to-purple-600"
  },
  {
    category: "Web Technologies",
    icon: <Globe className="w-8 h-8" />,
    skills: ["HTML", "CSS", "Next.js", "React"],
    color: "from-green-500 to-blue-500"
  },
  {
    category: "Databases",
    icon: <Database className="w-8 h-8" />,
    skills: ["MySQL", "SQL Server", "Database Design"],
    color: "from-orange-500 to-red-500"
  },
  {
    category: "Tools & Technologies",
    icon: <Settings className="w-8 h-8" />,
    skills: ["Google App Script", "Git", "Web Scraping", "Automation"],
    color: "from-purple-500 to-pink-500"
  }
]

export default function SkillsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Technical <span className="text-primary">Skills</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit of modern technologies and programming languages
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillsData.map((category, index) => (
              <div key={index} className="bg-card rounded-xl p-6 shadow-professional hover:shadow-glow transition-all duration-300 animate-fade-up" style={{animationDelay: `${index * 0.1}s`}}>
                <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-full flex items-center justify-center mb-6 mx-auto shadow-glow`}>
                  <div className="text-white">
                    {category.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-foreground text-center mb-4">
                  {category.category}
                </h3>
                
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="bg-secondary rounded-lg p-3 text-center">
                      <span className="text-secondary-foreground font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* Skill Level Indicators */}
          <div className="mt-16 bg-card rounded-2xl p-8 shadow-professional">
            <h3 className="text-2xl font-bold text-foreground text-center mb-8">
              Proficiency Levels
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { skill: "PHP Development", level: 85 },
                { skill: "Python Programming", level: 80 },
                { skill: "JavaScript", level: 75 },
                { skill: "Database Management", level: 85 },
                { skill: "Web Development", level: 90 },
                { skill: "Problem Solving", level: 95 }
              ].map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-foreground font-medium">{item.skill}</span>
                    <span className="text-primary font-semibold">{item.level}%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-3">
                    <div 
                      className="h-3 bg-gradient-primary rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${item.level}%` }}
                    ></div>
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