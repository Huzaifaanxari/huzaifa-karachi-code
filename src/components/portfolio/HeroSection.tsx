import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MapPin, Download } from "lucide-react";
import heroPortrait from "@/assets/hero-portrait.jpg";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-hero"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-background/20 via-transparent to-background/20"></div>

      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-16 h-16 bg-accent/10 rounded-full"
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Content */}
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Text Content */}
          <motion.div
            className="flex-1 text-center lg:text-left space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="space-y-4" variants={itemVariants}>
              <motion.h1
                className="text-5xl lg:text-7xl font-bold text-foreground leading-tight"
                variants={itemVariants}
              >
                Muhammad{" "}
                <motion.span
                  className="text-primary"
                  animate={{
                    textShadow: [
                      "0 0 0px hsl(47, 100%, 50%)",
                      "0 0 20px hsl(47, 100%, 50%)",
                      "0 0 0px hsl(47, 100%, 50%)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Huzaifa
                </motion.span>
              </motion.h1>
              <motion.h2
                className="text-xl lg:text-2xl text-muted-foreground font-medium"
                variants={itemVariants}
              >
                Software Developer | PHP & Python Enthusiast
              </motion.h2>
              <motion.div
                className="flex items-center justify-center lg:justify-start gap-2 text-muted-foreground"
                variants={itemVariants}
              >
                <MapPin className="w-5 h-5" />
                <span className="text-lg">Karachi, Pakistan</span>
              </motion.div>
            </motion.div>

            <motion.p
              className="text-lg lg:text-xl text-muted-foreground max-w-2xl leading-relaxed"
              variants={itemVariants}
            >
              Passionate software developer creating innovative solutions with
              modern technologies. Specialized in web development and
              automation.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              variants={itemVariants}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a href="/Muhammad%20Huzaifa.pdf" download>
                  <Button variant="hero" size="lg" className="shadow-gold">
                    <Download className="w-5 h-5" />
                    Download Resume
                  </Button>
                </a>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a href="#projects">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    View Projects
                  </Button>
                </a>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="relative">
              <motion.div
                className="absolute -inset-4 bg-gradient-primary rounded-full blur-lg opacity-30"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/20 shadow-gold"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <motion.img
                  src={heroPortrait}
                  alt="Muhammad Huzaifa - Software Developer"
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8 }}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
