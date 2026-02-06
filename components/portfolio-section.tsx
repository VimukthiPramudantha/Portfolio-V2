"use client"

import { useLanguage } from "@/contexts/language-context"
import Image from "next/image"
import { useEffect, useState } from "react"

interface PortfolioItem {
  id: string
  title: string
  image: string
  link: string
  delay: number
}

const productDesignItems: PortfolioItem[] = [
  {
    id: "trebly",
    title: "Phira",
    image: "/images/portfolio/Phira.png",
    link: "https://github.com/Sandakan/Phira",
    delay: 0,
  },
  {
    id: "ownomad",
    title: "ExamPro",
    image: "/images/portfolio/ExamPro.png",
    link: "https://exampro.netlify.app/",
    delay: 100,
  },
    {
   id: "refillit",
    title: "Transcorp Canada",
    image: "/images/portfolio/Transcorp.png",
    link: "https://transcorp-canada.netlify.app/",
    delay: 300,
  },
  {
    id: "betrusty",
    title: "Veterinary Booking System",
    image: "/images/portfolio/Veterinary_Booking_System.png",
    link: "https://github.com/VimukthiPramudantha/Veterinary_Booking_System",
    delay: 200,
  },
  {
    id: "refillit",
    title: "CIPC Campus",
    image: "/images/portfolio/CIPC_Campus.png",
    link: "https://github.com/VimukthiPramudantha/CIPC_Campus",
    delay: 300,
  },
]

export default function PortfolioSection() {
  const { t } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section
      id="portfolio"
      className="py-16 md:py-24 bg-gradient-to-b from-black to-gray-900/80 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 animate-fadeInUp">
            Portfolio
          </h2>
          <p
            className="text-lg md:text-xl text-white/75 max-w-3xl mx-auto animate-fadeInUp mb-8"
            style={{ animationDelay: "0.2s" }}
          >
            {t("A showcase of my latest projects, blending creativity, usability, and clean design.")}
          </p>

          <div className="flex justify-center gap-4 mb-8">
            <button
              className="px-6 py-3 rounded-xl font-medium bg-blue-500 text-white shadow-lg shadow-blue-500/25"
            >
              Projects
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
          {productDesignItems.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group block relative overflow-hidden rounded-xl transform transition-all duration-700 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{
                transitionDelay: `${item.delay}ms`,
              }}
            >
              <div className="glass relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/30 aspect-[4/3] rounded-xl">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={`${item.title} project - Vimukthi Pramudantha portfolio`}
                  fill
                  className="object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />

                <div className="absolute inset-0 flex flex-col justify-end p-3 md:p-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <h3 className="text-white font-bold text-sm md:text-base mb-1">{item.title}</h3>
                  <p className="text-white/90 text-xs md:text-sm font-medium">View Project →</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
