import { motion } from "framer-motion"
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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.3
    }
  }
}

const itemVariants = {
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1
  }
}

export default function EducationSection() {
  return (
    <section className="py-20 bg-background">
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
              My <span className="text-primary">Education</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A journey of continuous learning and academic achievement
            </p>
          </motion.div>
          
          <div className="relative">
            {/* Timeline line */}
            <motion.div 
              className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-primary hidden lg:block"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              style={{ originY: 0 }}
            />
            
            <motion.div 
              className="space-y-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {educationData.map((edu, index) => (
                <motion.div 
                  key={index} 
                  className="flex gap-8 items-center"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Timeline dot */}
                  <motion.div 
                    className="hidden lg:flex w-16 h-16 bg-gradient-primary rounded-full items-center justify-center shadow-gold flex-shrink-0"
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    whileHover={{ scale: 1.1, rotate: 360 }}
                  >
                    <GraduationCap className="w-8 h-8 text-primary-foreground" />
                  </motion.div>
                  
                  {/* Content card */}
                  <motion.div 
                    className="flex-1 bg-card rounded-xl p-6 lg:p-8 shadow-professional hover:shadow-gold transition-all duration-300"
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-4">
                      <motion.h3 
                        className="text-2xl font-bold text-foreground"
                        whileHover={{ color: "hsl(47, 100%, 50%)" }}
                      >
                        {edu.institution}
                      </motion.h3>
                      <motion.div 
                        className="flex items-center gap-2 text-muted-foreground"
                        whileHover={{ scale: 1.05 }}
                      >
                        <Calendar className="w-4 h-4" />
                        <span className="font-medium">{edu.period}</span>
                      </motion.div>
                    </div>
                    
                    <h4 className="text-lg font-semibold text-primary mb-2">{edu.degree}</h4>
                    <p className="text-muted-foreground">{edu.description}</p>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}