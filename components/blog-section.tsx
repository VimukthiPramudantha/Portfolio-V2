"use client"

import { useState } from "react"
import { ExternalLink, Calendar, Search, Grid, List } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

interface Article {
  title: string
  link: string
  pubDate: string
  description: string
  image?: string
}

export default function BlogSection() {
  const { t } = useLanguage()
  const [activeTab, setActiveTab] = useState<"featured" | "all">("featured")
  const [searchQuery, setSearchQuery] = useState("")

  const recommendedArticles: Article[] = [
    {
      title: "How to Use React Hooks – Full Tutorial for Beginners",
      link: "https://www.freecodecamp.org/news/full-guide-to-react-hooks/",
      pubDate: "2024-01-15",
      description: "A thorough beginner-friendly guide to using React Hooks effectively in modern React apps.",
      image: "https://www.freecodecamp.org/news/content/images/size/w2000/2023/01/steve-johnson-6sB8gMRlEAU-unsplash.jpg",
    },
    {
      title: "15 Mobile App Development Trends for 2025",
      link: "https://buildfire.com/mobile-app-development-trends/",
      pubDate: "2025-03-10",
      description: "Discover the hottest mobile app development trends shaping 2025 — from AI to AR and beyond.",
      image: "https://buildfire.com/wp-content/uploads/2020/01/Internet-of-Things-App-Development-700x541.png",
    },
    {
      title: "The Future of Mobile and Web Development",
      link: "https://blog.mobiversal.com/the-future-of-mobile-and-web-development-insights-from-a-mobile-app-development-company.html",
      pubDate: "2024-08-01",
      description: "Exploring how the boundaries between web and mobile apps are blurring through modern tech.",
      image: "https://blog.mobiversal.com/wp-content/uploads/2023/07/Empowering-product-growth.png",
    },
    {
      title: "React Hooks Tutorial – GeeksforGeeks",
      link: "https://www.geeksforgeeks.org/reactjs/react-hooks-tutorial/",
      pubDate: "2024-06-12",
      description: "Learn how to use React Hooks like useState and useEffect efficiently in your apps.",
      image: "https://media.geeksforgeeks.org/wp-content/uploads/20240220145751/react-hooksr-tutorial-copy.webp",
    },
    {
      title: "Top 10 Mobile App Development Trends 2025",
      link: "https://sam-solutions.com/blog/top-mobile-technology-trends/",
      pubDate: "2025-01-02",
      description: "An overview of the most promising technologies transforming the mobile app industry in 2025.",
      image: "https://sam-solutions.com/wp-content/uploads/fly-images/5428/Native-vs-Cross-Platform-App-cover@2x-min-366x235-c.png",
    },
    {
      title: "Building Scalable Frontends with Next.js and TypeScript",
      link: "https://vercel.com/blog/building-scalable-frontends-with-nextjs-and-typescript",
      pubDate: "2024-10-11",
      description: "A practical guide from Vercel on how to scale frontend projects using Next.js and TypeScript.",
      image: "https://tse4.mm.bing.net/th/id/OIP.VHQhwf-mTe1lJ5ChZj9vMwHaD3?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      title: "UX Design Principles Every Developer Should Know",
      link: "https://uxdesign.cc/ux-design-principles-every-developer-should-know-9e2c6c4c0f3a",
      pubDate: "2023-11-05",
      description: "A concise guide for developers to understand the key UX design principles behind great products.",
      image: "https://miro.medium.com/v2/resize:fit:1400/1*vTqIx0o6SkIIfxHyMvxgTw.png",
    },
    {
      title: "10 AI Tools That Are Changing the Way Developers Work",
      link: "https://towardsdatascience.com/10-ai-tools-that-are-changing-the-way-developers-work-8f69f929f01f",
      pubDate: "2025-04-20",
      description: "From GitHub Copilot to ChatGPT, here’s how AI is revolutionizing developer productivity.",
      image: "https://miro.medium.com/v2/resize:fit:1400/1*FwswOtM6_mhDTW0dc7sS6w.jpeg",
    },
    {
      title: "Mastering Responsive Web Design with CSS Grid and Flexbox",
      link: "https://css-tricks.com/snippets/css/complete-guide-grid/",
      pubDate: "2024-02-18",
      description: "Everything you need to know about creating responsive layouts using CSS Grid and Flexbox.",
      image: "https://css-tricks.com/wp-content/uploads/2023/04/css-grid-guide.png",
    },
    {
      title: "The Importance of Accessibility in Web Development",
      link: "https://web.dev/accessibility/",
      pubDate: "2023-12-30",
      description: "Learn how to make your websites accessible and inclusive following Google’s best practices.",
      image: "https://web.dev/static/images/share/share.png",
    },
  ]

  const formatDate = (dateString: string) => {
    if (!dateString) return "Recent"
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }

  const filteredPosts = recommendedArticles.filter(
    (post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.description.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const featuredPosts = recommendedArticles.slice(0, 6)

  return (
    <section id="blog" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-sans">
            Articles I Recommend Reading
          </h2>
          <p className="text-white/75 text-lg max-w-2xl mx-auto">
            A curated selection of great reads about Web, Mobile, UX, and AI development.
          </p>
        </div>

        <div className="mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex bg-white/5 backdrop-blur-md rounded-full p-1 border border-white/10">
            <button
              onClick={() => setActiveTab("featured")}
              className={`flex items-center px-6 py-2 rounded-full transition-all duration-300 ${
                activeTab === "featured"
                  ? "bg-white/20 text-white"
                  : "text-white/70 hover:text-white hover:bg-white/10"
              }`}
            >
              <Grid className="w-4 h-4 mr-2" />
              Featured
            </button>
            <button
              onClick={() => setActiveTab("all")}
              className={`flex items-center px-6 py-2 rounded-full transition-all duration-300 ${
                activeTab === "all"
                  ? "bg-white/20 text-white"
                  : "text-white/70 hover:text-white hover:bg-white/10"
              }`}
            >
              <List className="w-4 h-4 mr-2" />
              All Articles ({recommendedArticles.length})
            </button>
          </div>

          {activeTab === "all" && (
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 w-4 h-4" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-full pl-10 pr-4 py-2 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent w-64"
              />
            </div>
          )}
        </div>

        {activeTab === "featured" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredPosts.map((post, index) => (
              <a
                key={index}
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl block cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-white/60 text-sm mb-3">
                    <Calendar className="w-4 h-4 mr-2" />
                    {formatDate(post.pubDate)}
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-3 line-clamp-2 group-hover:text-blue-300 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-white/75 text-sm mb-4 line-clamp-3">{post.description}</p>
                  <div className="inline-flex items-center text-blue-400 group-hover:text-blue-300 font-medium text-sm transition-colors group-hover:translate-x-1 transform duration-200">
                    Read Article
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {filteredPosts.map((post, index) => (
              <a
                key={index}
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white/5 backdrop-blur-md rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-[1.02] p-6 block cursor-pointer"
              >
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-shrink-0">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full sm:w-24 h-20 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center text-white/60 text-sm mb-2">
                      <Calendar className="w-3 h-3 mr-1" />
                      {formatDate(post.pubDate)}
                    </div>
                    <h3 className="text-white font-semibold text-lg mb-2 line-clamp-2 group-hover:text-blue-300 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-white/75 text-sm mb-3 line-clamp-2">{post.description}</p>
                    <div className="inline-flex items-center text-blue-400 group-hover:text-blue-300 font-medium text-sm transition-colors">
                      Read Article
                      <ExternalLink className="w-3 h-3 ml-1" />
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
