"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ScrollFadeWrapper from "@/components/scroll-fade-wrapper"
import { useLanguage } from "@/contexts/language-context"
import { ExternalLink, Users, FileText, Trophy } from "lucide-react"

export default function HackathonClientPage() {
  const { t } = useLanguage()

  const linkButtons = [
    {
      title: "Facebook",
      url: "https://web.facebook.com/vimukthi.pramudhantha/",
      icon: <ExternalLink size={20} />,
      color: "from-blue-500 to-blue-700",
    },
    {
      title: "Email",
      url: "mailto:vimukthipramudanth@gmail.com",
      icon: <FileText size={20} />,
      color: "from-red-500 to-orange-500",
    },
    {
      title: "WhatsApp",
      url: "https://wa.me/94777314204",
      icon: <Users size={20} />,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Discord",
      url: "https://discord.gg/vimuxx_02",
      icon: <Users size={20} />,
      color: "from-indigo-500 to-purple-500",
    },
    {
      title: "GitHub",
      url: "https://github.com/VimukthiPramudantha",
      icon: <ExternalLink size={20} />,
      color: "from-gray-500 to-gray-700",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main className="pt-20">
        <ScrollFadeWrapper delay={0}>
          <section className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              {/* YouTube Video */}
              <div className="w-full max-w-3xl mx-auto mb-12">
                <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                  <iframe
                    src="https://youtu.be/f8Z9JyB2EIE?si=wsbkrtc7byC_l6dI"
                    title="Community Video"
                    className="absolute top-0 left-0 w-full h-full rounded-2xl"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>

              {/* Title */}
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                  Community, Impact & Collaboration
                </h1>
                {/* <p className="text-xl md:text-2xl text-white/80">
                  DESAFIA x SaltaDev – Connecting developers & enthusiasts
                </p> */}
              </div>

              {/* Average Income Banner */}
              <div className="glass rounded-2xl p-6 border border-white/10">
                <div className="flex items-center justify-center space-x-3 mb-4">
                  <Trophy className="text-yellow-400" size={32} />
                  <h2 className="text-2xl md:text-3xl font-bold text-yellow-400">
                    Average Income: LKR 60,000 – 75,000 /month
                  </h2>
                </div>
              </div>

              {/* Contact Me Links */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white/90"> Contact Me</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {linkButtons.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group relative overflow-hidden rounded-xl p-6 glass border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl`}
                    >
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${link.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                      />
                      <div className="relative flex items-center space-x-3">
                        <div className={`p-2 rounded-lg bg-gradient-to-r ${link.color} text-white`}>{link.icon}</div>
                        <span className="font-semibold text-white group-hover:text-white/90 transition-colors">
                          {link.title}
                        </span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Key Info Cards (commented for now) */}
              {/*
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                ...
              </div>
              */}
            </div>
          </section>
        </ScrollFadeWrapper>

        {/* Detailed Section */}
        <ScrollFadeWrapper delay={200}>
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                📜 Details & Qualifications
              </h2>

              <div className="space-y-8">
                {/* Qualifications */}
                <div className="glass rounded-xl p-8 border border-white/10">
                  <h3 className="text-2xl font-bold mb-4 text-blue-400">👥 Qualifications</h3>
                  <ul className="space-y-2 text-white/80">
                    <li>• HND in Software Engineering – solid foundation in software development, design patterns, and best practices</li>
                    <li>• BSc (Hons) Software Engineering – studying AI technology and exploring modern software development trends</li>
                    <li>• Certificate in English Course – excellent communication and technical documentation skills</li>
                  </ul>
                </div>

                {/* Play as a Team Player */}
                <div className="glass rounded-xl p-8 border border-white/10">
                  <h3 className="text-2xl font-bold mb-4 text-green-400">🎮 Play as a Team Player</h3>
                  <ul className="space-y-2 text-white/80">
                    <li>• Always take responsibility – own your tasks, deliver results on time, and be accountable for your work</li>
                    <li>• Embrace challenges with a positive attitude – turn obstacles into learning opportunities and grow continuously</li>
                    <li>• Collaborate effectively – communicate clearly, listen actively, and share knowledge generously with teammates</li>
                    <li>• Manage work efficiently – plan, prioritize, and execute projects with clarity and discipline</li>
                    <li>• Adapt and innovate – propose creative solutions, optimize workflows, and embrace new technologies</li>
                  </ul>
                </div>

                {/* Experience */}
                <div className="glass rounded-xl p-8 border border-white/10">
                  <h3 className="text-2xl font-bold mb-4 text-purple-400">📦 Experience</h3>
                  <ul className="space-y-2 text-white/80">
                    <li>• Hosting: Netlify, AWS, Render, Railway – deploy and maintain apps in production environments</li>
                    <li>• GitHub collaborations – contribute to repositories, manage branches, and conduct code reviews</li>
                    <li>• Tools: VS Code, IntelliJ, Figma, and more – proficient in modern development and design tools</li>
                    <li>• Project management: Agile, Trello, and Jira – organize tasks, sprints, and track progress efficiently</li>
                  </ul>
                </div>

                {/* Skills & Soft Skills */}
                <div className="glass rounded-xl p-8 border border-white/10">
                  <h3 className="text-2xl font-bold mb-4 text-orange-400">🐾 Skills & Soft Skills</h3>
                  <ul className="space-y-2 text-white/80">
                    <li>• Effective communication – articulate ideas clearly to teammates and clients</li>
                    <li>• Teamwork & collaboration – work seamlessly in diverse teams to achieve common goals</li>
                    <li>• Problem-solving & critical thinking – analyze issues, propose solutions, and implement them</li>
                    <li>• Adaptability & learning agility – quickly learn new technologies, frameworks, and methodologies</li>
                    <li>• Creativity & innovation – design solutions that are functional, user-friendly, and visually appealing</li>
                  </ul>
                </div>

                {/* Commented Sections */}
                {/*
                <div className="glass rounded-xl p-8 border border-white/10">
                  <h3 className="text-2xl font-bold mb-4 text-pink-400">🏆 Criterios de Evaluación</h3>
                  ...
                </div>
                */}
              </div>
            </div>
          </section>
        </ScrollFadeWrapper>
      </main>

      <Footer />
    </div>
  )
}
