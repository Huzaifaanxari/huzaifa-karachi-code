import { motion } from "framer-motion"

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

export default function AboutSection() {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-4xl lg:text-5xl font-bold text-foreground mb-8"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            About <motion.span 
              className="text-primary"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Me
            </motion.span>
          </motion.h2>
          
          <motion.div 
            className="bg-card rounded-2xl p-8 lg:p-12 shadow-professional hover:shadow-gold transition-all duration-300"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.02 }}
          >
            <motion.p 
              className="text-lg lg:text-xl text-muted-foreground leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              I am a passionate software developer with a diploma in{" "}
              <motion.span 
                className="text-primary font-semibold"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                Software Engineering
              </motion.span> from{" "}
              <motion.span 
                className="text-primary font-semibold"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                Aptech IT Academy
              </motion.span>, specialized in{" "}
              <motion.span 
                className="text-primary font-semibold"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                Web Designing and Development
              </motion.span>. 
              I enjoy solving problems, building efficient solutions, and collaborating in innovative environments.
            </motion.p>
            
            <motion.div 
              className="grid md:grid-cols-3 gap-8 mt-12"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                { emoji: "🎓", title: "Education", subtitle: "Software Engineering Diploma" },
                { emoji: "💼", title: "Experience", subtitle: "Junior PHP Developer" },
                { emoji: "🚀", title: "Passion", subtitle: "Problem Solving" }
              ].map((item, index) => (
                <motion.div key={index} className="text-center" variants={itemVariants}>
                  <motion.div 
                    className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-gold"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="text-2xl">{item.emoji}</span>
                  </motion.div>
                  <motion.h3 
                    className="text-xl font-semibold text-foreground mb-2"
                    whileHover={{ color: "hsl(47, 100%, 50%)" }}
                  >
                    {item.title}
                  </motion.h3>
                  <p className="text-muted-foreground">{item.subtitle}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}