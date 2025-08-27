import { Button } from "@/components/ui/button"
import { MapPin, Download } from "lucide-react"
import heroPortrait from "@/assets/hero-portrait.jpg"

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-hero"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-background/20 via-transparent to-background/20"></div>
      
      {/* Content */}
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left space-y-8 animate-fade-up">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold text-background leading-tight">
                Muhammad <span className="text-accent-light">Huzaifa</span>
              </h1>
              <h2 className="text-xl lg:text-2xl text-background/90 font-medium">
                Software Developer | PHP & Python Enthusiast
              </h2>
              <div className="flex items-center justify-center lg:justify-start gap-2 text-background/80">
                <MapPin className="w-5 h-5" />
                <span className="text-lg">Karachi, Pakistan</span>
              </div>
            </div>
            
            <p className="text-lg lg:text-xl text-background/85 max-w-2xl leading-relaxed">
              Passionate software developer creating innovative solutions with modern technologies. 
              Specialized in web development and automation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="lg" className="shadow-xl">
                <Download className="w-5 h-5" />
                Download Resume
              </Button>
              <Button 
                variant="professional" 
                size="lg"
                className="bg-background/10 text-background border-background/30 hover:bg-background hover:text-primary"
              >
                View Projects
              </Button>
            </div>
          </div>
          
          {/* Profile Image */}
          <div className="flex-shrink-0 animate-slide-left">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-accent to-primary-light rounded-full blur-lg opacity-30"></div>
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-background/20 shadow-2xl">
                <img 
                  src={heroPortrait} 
                  alt="Muhammad Huzaifa - Software Developer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}