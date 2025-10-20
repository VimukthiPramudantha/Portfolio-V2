"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Language = "en" | "si"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  en: {
    // Navbar
    "nav.home": "Home",
    "nav.about": "About",
    "nav.portfolio": "Portfolio",
    "nav.articles": "Articles",
    "nav.talks": "Talks",
    "nav.streaming": "Streaming",
    "nav.hackathon": "Hackathon",
    "nav.contact": "Contact",

    // Hero Section
    "hero.greeting": "Welcome to my **personal portfolio**",
    "hero.title": "I vibecode and scale products people love",
    "hero.card1": "Expert in scalable product design & marketing.",
    "hero.card2": "Passionate about Web3, AI, and sustainability.",
    "hero.card3": "Remote work across 15+ countries as a digital nomad.",
    "hero.card4": "Helped 40+ companies with impactful solutions.",

    // Footer
    "footer.portfolio": "PORTFOLIO",
    "footer.about": "ABOUT ME",
    "footer.connect": "LET'S CONNECT",
    "footer.made": "MADE BY",
  },

  si: {
    // Navbar
    "nav.home": "මුල් පිටුව",
    "nav.about": "පිළිබඳව",
    "nav.portfolio": "පොත් තැටිය",
    "nav.articles": "ලිපි",
    "nav.talks": "සංවාද",
    "nav.streaming": "සජීවී ප්‍රසාරණය",
    "nav.hackathon": "හැකතොන්",
    "nav.contact": "සම්බන්ධ වන්න",

    // Hero Section
    "hero.greeting": "මගේ **පෞද්ගලික පෝර්ට්ෆෝලියෝවට** සාදරයෙන් පිළිගනිමු",
    "hero.title": "මම කේතය සෑදෙමි සහ ජනතාවට ප්‍රියවූ නිෂ්පාදන විකසනය කරමි",
    "hero.card1": "ප්‍රමාණය කළ හැකි නිෂ්පාදන සැලසුම් කිරීම හා වෙළඳ ප්‍රවර්ධනයේ විශේෂඥයෙක්.",
    "hero.card2": "Web3, AI, සහ පාරිසරික ස්ථාවරතාවය පිළිබඳ උනන්දුවක් ඇතිව.",
    "hero.card3": "ඩිජිටල් නෝමැඩ් ලෙස රටවල් 15කට වැඩ කරන අත්දැකීමක්.",
    "hero.card4": "ආරෝපණාත්මක විසඳුම්වලින් සමාගම් 40කට වැඩි සංඛ්‍යාවකට සහයෝගය ලබාදී ඇත.",

    // Footer
    "footer.portfolio": "පෝර්ට්ෆෝලියෝ",
    "footer.about": "මා ගැන",
    "footer.connect": "සම්බන්ධ වන්න",
    "footer.made": "සෑදූයේ",
  },
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "si")) {
      setLanguage(savedLanguage)
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("language", lang)
  }

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
