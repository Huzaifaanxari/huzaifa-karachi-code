import { motion } from "framer-motion"
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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { x: -50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1
  }
}

export default function StrengthsSection() {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Core <span className="text-primary">Strengths</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Key qualities that drive my success as a software developer
            </p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {strengths.map((strength, index) => (
              <motion.div 
                key={index} 
                className="bg-card rounded-xl p-8 shadow-professional hover:shadow-gold transition-all duration-300 group"
                variants={itemVariants}
                whileHover={{ scale: 1.03, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-start gap-6">
                  {/* Icon */}
                  <motion.div 
                    className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0 shadow-gold"
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.1, rotate: 360 }}
                  >
                    <div className="text-primary-foreground">
                      {strength.icon}
                    </div>
                  </motion.div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <motion.h3 
                      className="text-xl font-bold text-foreground mb-3"
                      whileHover={{ color: "hsl(47, 100%, 50%)", x: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      {strength.title}
                    </motion.h3>
                    <motion.p 
                      className="text-muted-foreground leading-relaxed"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      {strength.description}
                    </motion.p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Additional Qualities */}
          <motion.div 
            className="mt-16 bg-card rounded-2xl p-8 shadow-professional"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.02 }}
          >
            <motion.h3 
              className="text-2xl font-bold text-foreground text-center mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              Additional Qualities
            </motion.h3>
            
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
                <motion.div 
                  key={index} 
                  className="text-center p-4 bg-secondary/30 rounded-lg hover:bg-primary/10 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 + index * 0.05 }}
                  whileHover={{ scale: 1.05, backgroundColor: "hsl(47, 100%, 50%, 0.2)" }}
                >
                  <span className="text-foreground font-medium">{quality}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}