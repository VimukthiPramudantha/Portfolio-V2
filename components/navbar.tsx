"use client"

import { useState, useEffect } from "react"
import { useLanguage } from "@/contexts/language-context"
import { Globe, Menu, X, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()
  const pathname = usePathname()

  const isStreamingPage = pathname === "/streaming"
  const isHackathonPage = pathname === "/hackathon"

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50
      setIsScrolled(scrolled)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const scrollToSection = (id: string) => {
    if (pathname !== "/") {
      // If not on home page, navigate to home first
      window.location.href = `/#${id}`
      return
    }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    setIsMobileMenuOpen(false)
  }

  const toggleLanguage = () => {
  setLanguage(language === "en" ? "si" : "en");
};


  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 outline-none ${isScrolled ? "px-4 py-2" : ""}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div
        className={`max-w-7xl mx-auto transition-all duration-300 ${
          isScrolled
            ? "glass rounded-2xl px-6 py-3 border border-white/15"
            : "px-4 sm:px-6 py-4 border border-transparent"
        }`}
      >
        <div className="flex items-center justify-between">
          <Link href="#home" className="text-lg sm:text-xl font-bold text-white md:flex-1">
            Vimukthi Pramudantha 
          </Link>

          {isStreamingPage && (
            <div className="hidden md:flex items-center mr-6">
              <Link
                href="/"
                className="inline-flex items-center space-x-2 nav-item text-white/75 hover:text-white transition-colors relative"
              >
                <ArrowLeft size={20} />
                <span>{t("streaming.backHome")}</span>
              </Link>
            </div>
          )}

          {isHackathonPage && (
            <div className="hidden md:flex items-center mr-6">
              <Link
                href="/"
                className="inline-flex items-center space-x-2 nav-item text-white/75 hover:text-white transition-colors relative"
              >
                <ArrowLeft size={20} />
                <span>{t("Back To Home")}</span>
              </Link>
            </div>
          )}

          {!isStreamingPage && !isHackathonPage && (
            <div className="hidden md:flex items-center space-x-8 mr-6">
              <button
                onClick={() => scrollToSection("home")}
                className="nav-item text-white/75 hover:text-white transition-colors relative"
                aria-label="Navigate to home section"
              >
                {t("nav.home")}
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="nav-item text-white/75 hover:text-white transition-colors relative"
                aria-label="Navigate to about section"
              >
                {t("nav.about")}
              </button>
              <button
                onClick={() => scrollToSection("portfolio")}
                className="nav-item text-white/75 hover:text-white transition-colors relative"
                aria-label="Navigate to portfolio section"
              >
                {t("nav.portfolio")}
              </button>
              <button
                onClick={() => scrollToSection("career")}
                className="nav-item text-white/75 hover:text-white transition-colors relative"
                aria-label="Navigate to career section"
              >
                {t("Career")}
              </button>
              <button
                onClick={() => scrollToSection("blog")}
                className="nav-item text-white/75 hover:text-white transition-colors relative"
                aria-label="Navigate to articles section"
              >
                {t("nav.articles")}
              </button>
              {/* <Link
                href="/streaming"
                className="nav-item text-white/75 hover:text-white transition-colors relative"
                aria-label="Navigate to streaming page"
              >
                {t("nav.streaming")}
              </Link> */}
 <Link
href="/hackathon"
className="nav-item text-white/75 hover:text-white transition-colors relative"
aria-label="Navigate to hackathon page"
>
{t("Qualifications")}
</Link>
              <button
                onClick={() => scrollToSection("contact")}
                className="nav-item text-white/75 hover:text-white transition-colors relative"
                aria-label="Navigate to contact section"
              >
                {t("nav.contact")}
              </button>
            </div>
          )}

          <div className="hidden md:flex items-center">
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-2 text-white hover:text-white/80 transition-colors glass px-3 py-2 rounded-lg"
              aria-label={`Switch to ${language === "en" ? "Sinhala" : "English"} language`}
            >
              <Globe size={16} />
              <span className="text-sm font-medium">
          {language === "en" ? "SI" : "EN"}
            </span>
            </button>
          </div>

          <div className="md:hidden flex items-center space-x-3">
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 text-white hover:text-white/80 transition-colors glass px-2 py-1 rounded-lg ml-2"
              aria-label={`Switch to ${language === "en" ? "Spanish" : "English"} language`}
            >
              <Globe size={14} />
              <span className="text-xs font-medium">{language === "en" ? "ES" : "EN"}</span>
            </button>

            {(isStreamingPage || isHackathonPage) && (
              <Link
                href="/"
                className="text-white hover:text-white/80 transition-colors glass p-2 rounded-lg"
                aria-label="Back to home"
              >
                <ArrowLeft size={20} />
              </Link>
            )}

            {!isStreamingPage && !isHackathonPage && (
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white hover:text-white/80 transition-colors glass p-2 rounded-lg"
                aria-label={isMobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            )}
          </div>
        </div>

        {isMobileMenuOpen && !isStreamingPage && !isHackathonPage && (
          <div className="md:hidden mt-4 glass rounded-lg p-4" role="menu">
            <div className="flex flex-col space-y-4 text-center">
              <button
                onClick={() => scrollToSection("home")}
                className="text-white hover:text-white/80 transition-colors py-2"
                role="menuitem"
                aria-label="Navigate to home section"
              >
                {t("nav.home")}
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-white hover:text-white/80 transition-colors py-2"
                role="menuitem"
                aria-label="Navigate to about section"
              >
                {t("nav.about")}
              </button>
              <button
                onClick={() => scrollToSection("portfolio")}
                className="text-white hover:text-white/80 transition-colors py-2"
                role="menuitem"
                aria-label="Navigate to portfolio section"
              >
                {t("nav.portfolio")}
              </button>
              <button
                onClick={() => scrollToSection("blog")}
                className="text-white hover:text-white/80 transition-colors py-2"
                role="menuitem"
                aria-label="Navigate to articles section"
              >
                {t("nav.articles")}
              </button>
              <button
                onClick={() => scrollToSection("career")}
                className="text-white hover:text-white/80 transition-colors py-2"
                role="menuitem"
                aria-label="Navigate to career section"
              >
                {t("Career")}
              </button>
              {/* <Link
                href="/streaming"
                className="text-white hover:text-white/80 transition-colors py-2 block"
                role="menuitem"
                aria-label="Navigate to streaming page"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t("nav.streaming")}
              </Link> */}
              <Link
                href="/hackathon"
                className="text-white hover:text-white/80 transition-colors py-2 block"
                role="menuitem"
                aria-label="Navigate to hackathon page"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t("nav.hackathon")}
              </Link>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-white hover:text-white/80 transition-colors py-2"
                role="menuitem"
                aria-label="Navigate to contact section"
              >
                {t("nav.contact")}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
