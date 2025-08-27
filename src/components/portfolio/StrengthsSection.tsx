import { Zap, Target, Users, BarChart3 } from "lucide-react"

const strengths = [
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Quick Learner",
    description: "Rapidly adapts to new technologies and frameworks. Passionate about staying updated with the latest industry trends and best practices.",
    color: "from-yellow-400 to-orange-500"
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Problem Solver",
    description: "Enjoys tackling complex challenges with creative solutions. Systematic approach to debugging and optimization for efficient results.",
    color: "from-blue-500 to-purple-600"
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Team Player",
    description: "Excellent collaboration skills with strong communication abilities. Works well in diverse teams and contributes to positive work environments.",
    color: "from-green-400 to-blue-500"
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: "Analytical Mindset",
    description: "Data-driven decision making with attention to detail. Strong analytical skills for performance optimization and code quality improvement.",
    color: "from-purple-500 to-pink-500"
  }
]

export default function StrengthsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Core <span className="text-primary">Strengths</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Key qualities that drive my success as a software developer
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {strengths.map((strength, index) => (
              <div key={index} className="bg-card rounded-xl p-8 shadow-professional hover:shadow-glow transition-all duration-300 animate-fade-up group" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="flex items-start gap-6">
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-r ${strength.color} rounded-full flex items-center justify-center flex-shrink-0 shadow-glow group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">
                      {strength.icon}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {strength.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {strength.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Additional Qualities */}
          <div className="mt-16 bg-gradient-card rounded-2xl p-8 shadow-professional">
            <h3 className="text-2xl font-bold text-foreground text-center mb-8">
              Additional Qualities
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                "Attention to Detail",
                "Creative Thinking", 
                "Time Management",
                "Continuous Learning",
                "Code Quality Focus",
                "User Experience Oriented",
                "Adaptable",
                "Results Driven"
              ].map((quality, index) => (
                <div key={index} className="text-center p-4 bg-background/50 rounded-lg hover:bg-background/80 transition-colors">
                  <span className="text-foreground font-medium">{quality}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}