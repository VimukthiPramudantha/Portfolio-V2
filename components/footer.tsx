"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"
import { MessageCircle } from "lucide-react"

export default function Footer() {
  const { t } = useLanguage()

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer id="contact" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-black to-gray-900"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 text-center md:text-left">
          {/* Home Section */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-white">Home</h3>
            <div className="space-y-3">
              <div
                className="text-white/75 hover:text-white transition-colors cursor-pointer"
                onClick={() => scrollToSection("home")}
              >
                Go to Home
              </div>
            </div>
          </div>

          {/* About Section */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-white">About</h3>
            <div className="space-y-3">
              <div
                className="text-white/75 hover:text-white transition-colors cursor-pointer"
                onClick={() => scrollToSection("about")}
              >
                About Me
              </div>
              <div
                className="text-white/75 hover:text-white transition-colors cursor-pointer"
                onClick={() => scrollToSection("career")}
              >
                Career
              </div>
              <div
                className="text-white/75 hover:text-white transition-colors cursor-pointer"
                onClick={() => scrollToSection("blog")}
              >
                Articles
              </div>
            </div>
          </div>

          {/* Let's Connect */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-white">Let's Connect</h3>
            <p
              className="text-white/75 mb-4 cursor-pointer hover:text-white transition-colors"
              onClick={() => scrollToSection("portfolio")}
            >
              Projects
            </p>
            <p className="text-white/75 mb-6">vimukthipramudanth@gmail.com</p>

            <div className="mb-6">
              <Button
                className="glass glass-hover border border-white/20 hover:border-white/40 text-white font-semibold px-6 py-3 group transition-all duration-300 hover:scale-105"
                onClick={() =>
                  window.open("https://wa.me/94777314204?text=Hello%20Vimukthi%2C%20I%27d%20like%20to%20connect!", "_blank")
                }
              >
                <MessageCircle className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                Get in Touch
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 justify-center md:justify-start">
              {/* Facebook */}
              <Button
                size="icon"
                className="glass glass-hover rounded-full border-white/20 hover:border-white/40"
                onClick={() => window.open("https://web.facebook.com/vimukthi.pramudantha/", "_blank")}
              >
                <Image src="/icons/facebook.png" alt="Facebook" width={20} height={20} className="w-5 h-5" />
              </Button>

              {/* Instagram */}
              <Button
                size="icon"
                className="glass glass-hover rounded-full border-white/20 hover:border-white/40"
                onClick={() => window.open("", "_blank")}
              >
                <Image src="/icons/instagram.svg" alt="Instagram" width={20} height={20} className="w-5 h-5" />
              </Button>

              {/* LinkedIn */}
              <Button
                size="icon"
                className="glass glass-hover rounded-full border-white/20 hover:border-white/40"
                onClick={() =>
                  window.open("https://www.linkedin.com/in/vimukhi-pramudantha-944397279/", "_blank")
                }
              >
                <Image src="/icons/linkedin.svg" alt="LinkedIn" width={20} height={20} className="w-5 h-5" />
              </Button>

              {/* GitHub */}
              <Button
                size="icon"
                className="glass glass-hover rounded-full border-white/20 hover:border-white/40"
                onClick={() => window.open("https://github.com/VimukthiPramudantha", "_blank")}
              >
                <Image src="/icons/github.png" alt="GitHub" width={20} height={20} className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex justify-center items-center pt-8 border-t border-white/10">
          <div className="text-white/75 text-sm">
            Designed & Built by <span className="font-bold text-white">Vimukthi Pramudantha</span> © 2025
          </div>
        </div>
      </div>
    </footer>
  )
}
