import { motion } from "framer-motion";
import { Code, Database, Globe, Settings } from "lucide-react";
import {
  SiPhp,
  SiPython,
  SiJavascript,
  SiDart,
  SiFlutter,
  SiNodedotjs,
  SiHtml5,
  SiCss3,
  SiNextdotjs,
  SiReact,
  SiBootstrap,
  SiTailwindcss,
  SiMysql,
  SiMongodb,
  SiFirebase,
  SiGooglecloud,
  SiGit,
  SiPostman,
  SiApachespark,
} from "react-icons/si";

const skillsData = [
  {
    category: "Programming",
    icon: <Code className="w-8 h-8" />,
    skills: [
      { name: "PHP", icon: <SiPhp className="text-indigo-600 w-5 h-5" /> },
      {
        name: "Python",
        icon: <SiPython className="text-yellow-500 w-5 h-5" />,
      },
      {
        name: "JavaScript",
        icon: <SiJavascript className="text-yellow-400 w-5 h-5" />,
      },
      { name: "Dart", icon: <SiDart className="text-blue-500 w-5 h-5" /> },
      { name: "Flutter", icon: <SiFlutter className="text-sky-500 w-5 h-5" /> },
      {
        name: "Node.js",
        icon: <SiNodedotjs className="text-green-600 w-5 h-5" />,
      },
    ],
    color: "from-blue-500 to-purple-600",
  },
  {
    category: "Web Technologies",
    icon: <Globe className="w-8 h-8" />,
    skills: [
      { name: "HTML", icon: <SiHtml5 className="text-orange-600 w-5 h-5" /> },
      { name: "CSS", icon: <SiCss3 className="text-blue-600 w-5 h-5" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-black w-5 h-5" /> },
      { name: "React", icon: <SiReact className="text-cyan-400 w-5 h-5" /> },
      {
        name: "Bootstrap",
        icon: <SiBootstrap className="text-purple-600 w-5 h-5" />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-sky-500 w-5 h-5" />,
      },
    ],
    color: "from-green-500 to-blue-500",
  },
  {
    category: "Databases",
    icon: <Database className="w-8 h-8" />,
    skills: [
      { name: "MySQL", icon: <SiMysql className="text-blue-500 w-5 h-5" /> },
      
      {
        name: "Database Design",
        icon: <SiApachespark className="text-orange-500 w-5 h-5" />,
      },
      {
        name: "MongoDB",
        icon: <SiMongodb className="text-green-600 w-5 h-5" />,
      },
      {
        name: "Firebase",
        icon: <SiFirebase className="text-yellow-500 w-5 h-5" />,
      },
    ],
    color: "from-orange-500 to-red-500",
  },
  {
    category: "Tools & Technologies",
    icon: <Settings className="w-8 h-8" />,
    skills: [
      {
        name: "Google App Script",
        icon: <SiGooglecloud className="text-blue-500 w-5 h-5" />,
      },
      { name: "Git", icon: <SiGit className="text-red-500 w-5 h-5" /> },
      {
        name: "Web Scraping",
        icon: <Globe className="text-gray-600 w-5 h-5" />,
      },
      {
        name: "Automation",
        icon: <Settings className="text-gray-600 w-5 h-5" />,
      },
      { name: "REST APIs", icon: <Globe className="text-blue-600 w-5 h-5" /> },
      {
        name: "Postman",
        icon: <SiPostman className="text-orange-500 w-5 h-5" />,
      },
    ],
    color: "from-purple-500 to-pink-500",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export default function SkillsSection() {
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
              Technical <span className="text-primary">Skills</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit of modern technologies and programming
              languages
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {skillsData.map((category, index) => (
              <motion.div
                key={index}
                className="bg-card rounded-xl p-6 shadow-professional hover:shadow-gold transition-all duration-300"
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <motion.div
                  className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-6 mx-auto shadow-gold"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="text-primary-foreground">{category.icon}</div>
                </motion.div>

                <motion.h3
                  className="text-xl font-bold text-foreground text-center mb-4"
                  whileHover={{ color: "hsl(47, 100%, 50%)" }}
                >
                  {category.category}
                </motion.h3>

                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      className="bg-secondary rounded-lg p-3 flex items-center gap-2 justify-center"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: skillIndex * 0.1 }}
                      whileHover={{
                        scale: 1.05,
                        backgroundColor: "hsl(47, 100%, 50%)",
                      }}
                    >
                      {skill.icon}
                      <span className="text-secondary-foreground font-medium">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Skill Level Indicators */}
          <motion.div
            className="mt-16 bg-card rounded-2xl p-8 shadow-professional"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.02 }}
          >
            <motion.h3
              className="text-2xl font-bold text-foreground text-center mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Proficiency Levels
            </motion.h3>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                { skill: "PHP Development", level: 85 },
                { skill: "Python Programming", level: 60 },
                { skill: "JavaScript", level: 65 },
                { skill: "Database Management", level: 85 },
                { skill: "Web Development", level: 90 },
                { skill: "Problem Solving", level: 90 },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="space-y-2"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex justify-between">
                    <span className="text-foreground font-medium">
                      {item.skill}
                    </span>
                    <motion.span
                      className="text-primary font-semibold"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      {item.level}%
                    </motion.span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-3">
                    <motion.div
                      className="h-3 bg-gradient-primary rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.level}%` }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1.5,
                        delay: 0.5 + index * 0.1,
                        ease: [0.6, -0.05, 0.01, 0.99],
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
