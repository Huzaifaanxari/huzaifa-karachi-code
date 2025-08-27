export default function AboutSection() {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-8">
            About <span className="text-primary">Me</span>
          </h2>
          
          <div className="bg-card rounded-2xl p-8 lg:p-12 shadow-professional">
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
              I am a passionate software developer with a diploma in{" "}
              <span className="text-primary font-semibold">Software Engineering</span> from{" "}
              <span className="text-primary font-semibold">Aptech IT Academy</span>, specialized in{" "}
              <span className="text-primary font-semibold">Web Designing and Development</span>. 
              I enjoy solving problems, building efficient solutions, and collaborating in innovative environments.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-primary-foreground font-bold">🎓</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Education</h3>
                <p className="text-muted-foreground">Software Engineering Diploma</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-primary-foreground font-bold">💼</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Experience</h3>
                <p className="text-muted-foreground">Junior PHP Developer</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-primary-foreground font-bold">🚀</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Passion</h3>
                <p className="text-muted-foreground">Problem Solving</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}