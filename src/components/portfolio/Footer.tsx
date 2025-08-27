import { Heart } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <p className="flex items-center justify-center gap-2 text-lg">
            Made with <Heart className="w-5 h-5 text-red-400 fill-current" /> by Muhammad Huzaifa
          </p>
          <p className="text-primary-foreground/80 mt-2">
            © {new Date().getFullYear()} Muhammad Huzaifa. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}