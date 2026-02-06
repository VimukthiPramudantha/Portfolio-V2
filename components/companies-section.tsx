"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import Image from "next/image"

export default function CompaniesSection() {
  const { t } = useLanguage()

  const renderTextWithBold = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g)
    return parts.map((part, index) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return (
          <strong key={index} className="text-white font-semibold">
            {part.slice(2, -2)}
          </strong>
        )
      }
      return part
    })
  }

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Eluter Column */}
          <div className="space-y-6">
            <div className="flex justify-center mb-6">
              <Image
                src="/icons/Harbour_lines.png"
                alt="Eluter Logo"
                width={120}
                height={60}
                className="opacity-90 hover:opacity-100 transition-opacity duration-300"
              />
            </div>

            <p className="text-white/75 leading-relaxed mb-6">
              {renderTextWithBold(t("Associate Software Engineer at Harbour Lines (PVT) LTD, a freight forwarding company, where I contribute to the development and maintenance of software solutions that support logistics and operational workflows."))}
            </p>

            {/* Eluter Video */}
            <div className="mb-6">
              <div style={{ position: "relative", paddingTop: "56.25%" }}>
                <iframe
                  src="https://harbourlines.com/contact/"
                  loading="lazy"
                  style={{ border: 0, position: "absolute", top: 0, height: "100%", width: "100%" }}
                  allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;"
                  allowFullScreen={true}
                  className="rounded-lg"
                />
              </div>
            </div>

            <Button
              className="glass glass-hover border border-white/20 hover:border-white/40 text-white font-semibold px-6 py-3 transition-all duration-300 hover:scale-105"
              onClick={() => window.open("https://harbourlines.com/contact/", "_blank")}
            >
              {t("Harbour Lines  Website")}
            </Button>
          </div>
          <div className="space-y-6">
            <div className="flex justify-center mb-6">
              <Image
                src="/icons/SLT.png"
                alt="Eluter Logo"
                width={120}
                height={60}
                className="opacity-90 hover:opacity-100 transition-opacity duration-300"
              />
            </div>

            <p className="text-white/75 leading-relaxed mb-6">
              {renderTextWithBold(t("Completed an internship at SLT-Mobitel, where I contributed to front-end development and UI/UX improvements for internal systems and digital products."))}
            </p>

            {/* Eluter Video */}
            <div className="mb-6">
              <div style={{ position: "relative", paddingTop: "56.25%" }}>
                <iframe
                  src="https://www.sltmobitel.lk/"
                  loading="lazy"
                  style={{ border: 0, position: "absolute", top: 0, height: "100%", width: "100%" }}
                  allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;"
                  allowFullScreen={true}
                  className="rounded-lg"
                />
              </div>
            </div>

            <Button
              className="glass glass-hover border border-white/20 hover:border-white/40 text-white font-semibold px-6 py-3 transition-all duration-300 hover:scale-105"
              onClick={() => window.open("https://www.sltmobitel.lk/", "_blank")}
            >
              {t("SLT Mobitel Website")}
            </Button>
          </div>

          {/* DESAFIA Column */}
          <div className="space-y-6">
            {/* <div className="flex justify-center mb-6">
              <Image
                src="/icons/desafialogo.svg"
                alt="DESAFIA Logo"
                width={120}
                height={60}
                className="opacity-90 hover:opacity-100 transition-opacity duration-300"
              />
            </div> */}

            {/* <p className="text-white/75 leading-relaxed mb-6">
              {renderTextWithBold(t("companies.desafia.description"))}
            </p> */}

            {/* DESAFIA Video */}
            {/* <div className="mb-6">
              <div style={{ position: "relative", paddingTop: "56.25%" }}>
                <iframe
                  src="https://iframe.mediadelivery.net/embed/468731/a1f38e78-d887-4a33-a625-34d099932bc8?autoplay=false&loop=false&muted=false&preload=true&responsive=true"
                  loading="lazy"
                  style={{ border: 0, position: "absolute", top: 0, height: "100%", width: "100%" }}
                  allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;"
                  allowFullScreen={true}
                  className="rounded-lg"
                />
              </div>
            </div> */}

            {/* <Button
              className="glass glass-hover border border-white/20 hover:border-white/40 text-white font-semibold px-6 py-3 transition-all duration-300 hover:scale-105"
              onClick={() => window.open("https://desafia.tech/", "_blank")}
            >
              {t("companies.desafia.button")}
            </Button> */}
          </div>
        </div>
      </div>
    </section>
  )
}
