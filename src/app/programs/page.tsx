'use client'

import { useState, useEffect } from "react"
import Link from "next/link"
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

export default function AboutPage() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const sections = document.querySelectorAll(".fade-in")
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0")
          }
        })
      },
      { threshold: 0.1 }
    )
    sections.forEach(section => observer.observe(section))
  }, [])

  const handleApplyClick = () => {
    alert("Thank you for your interest! Unfortunately, we are not taking applications at this moment.")
  }

  const pathways = [
    {
      title: "SPARK",
      subtitle: "Purpose Discovery & Self-Awareness",
      objective: "Discover God-given purpose, develop a life purpose statement, enhance self-awareness, and learn goal-setting strategies.",
      concepts: [
        "Self-assessment and reflection",
        "Emotional intelligence",
        "Goal setting and time management",
        "Career planning",
        "Building resilience and confidence",
      ],
      color: "from-gray-500 via-black to-gray-700",
      icon: "",
    },
    {
      title: "FORGE",
      subtitle: "Essential Life Skills",
      objective: "Equip students with essential skills for independent living to improve competence, self-sufficiency, and confidence.",
      concepts: [
        "Grocery shopping and meal planning",
        "Cooking simple healthy meals",
        "Managing a household / handyman basics",
        "Navigating transportation systems",
        "Basic car maintenance",
        "Communication",
        "Understanding the power of habit",
      ],
      color: "from-gray-500 via-black to-gray-700",
      icon: "",
    },
    {
      title: "FLAME",
      subtitle: "Financial & Legal Literacy",
      objective: "Equip students with principles of money stewardship, basic financial concepts and legal understanding.",
      concepts: [
        "Budgeting and saving",
        "Understanding taxes, credit and investments",
        "Avoiding debts and managing loans",
        "Understanding law",
      ],
      color: "from-gray-500 via-black to-gray-700",
      icon: "",
    },
    {
      title: "BLAZE",
      subtitle: "Business, Entrepreneurship & Self-Development",
      objective: "Introduce students to essential business topics, communication and personal development.",
      concepts: [
        "Leading with Kingdom values",
        "Fostering entrepreneurial thinking",
        "Building emotional intelligence and social skills",
        "Starting and running an organisation",
        "Public speaking and presentation skills",
        "Understanding personal development",
        "Basics of global trade",
      ],
      color: "from-gray-500 via-black to-gray-700",
      icon: "",
    },
    {
      title: "WILDFIRE",
      subtitle: "Community & Global Impact",
      objective: "Introduce learners to concepts of social responsibility and mentorship.",
      concepts: [
        "Social and environmental responsibility",
        "Understanding community challenges",
        "Stakeholder awareness",
        "Mentorship",
      ],
      color: "from-gray-500 via-black to-gray-700",
      icon: "",
    },
  ]

  return (
    <main className="min-h-screen relative text-center text-gray-900">
    {/* Background Image with Dim Overlay */}
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{
        backgroundImage: `url('/fire.jpg')`,
        filter: 'brightness(50%)', // dims the image
        zIndex: -1
      }}
    ></div>
      {/* NAVBAR */}
      <header className="backdrop-blur-sm bg-[#092d43]/60 sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-24 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-4">
            <img src="/Handover1.png" alt="Logo" className="h-16 w-16" />
            <div className="flex flex-col leading-tight">
              <span className="text-2xl font-bold text-white -mb-1">Youth Ignition Hub</span>
              <span className="text-sm text-white tracking-wide">Ignite. Impact. Transform</span>
            </div>
          </Link>

          <nav className="hidden md:flex space-x-6 text-lg">
            <Link href="/" className="text-white hover:underline">Home</Link>
            <Link href="/about" className="text-white hover:underline">About</Link>
            <Link href="/programs" className="text-white hover:underline">Programs</Link>
            <Link href="#" className="text-white hover:underline">Contact</Link>
          </nav>

          <div className="hidden md:block">
            <button
              onClick={handleApplyClick}
              className="px-5 py-2 text-white rounded bg-[#d9373f] hover:opacity-90"
            >
              Apply Now
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-white text-3xl">☰</button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-[#092d43]/90 text-white px-4 py-4 space-y-3">
            <Link href="/" className="block hover:underline">Home</Link>
            <Link href="/about" className="block hover:underline">About</Link>
            <Link href="/programs" className="block hover:underline">Programs</Link>
            <Link href="#" className="block hover:underline">Contact</Link>
            <button onClick={handleApplyClick} className="w-full bg-[#d9373f] text-white py-2 rounded">Apply Now</button>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section
        className="relative h-[100vh] flex items-center justify-center text-center bg-cover bg-center mb-10"
        style={{ backgroundImage: "url('/tent.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 px-6 text-white max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Ignition Pathways</h1>
          <p className="text-md md:text-lg leading-relaxed">
            Journey through the 5 powerful pathways designed to ignite your potential, equip you for life, and empower you to lead change in your world.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="px-6 py-16 fade-in">
        <div className="space-y-16 max-w-4xl mx-auto">
          {pathways.map((pathway, index) => (
            <div
              key={index}
              className={`rounded-xl shadow-xl overflow-hidden bg-gradient-to-br ${pathway.color} text-white transition-transform duration-300 hover:scale-[1.02]`}
            >
              <div className="px-6 py-8 md:px-10 md:py-12">
                <div className="text-5xl mb-4">{pathway.icon}</div>
                <h2 className="text-3xl font-bold underline mb-2">{pathway.title}</h2>
                <p className="italic text-lg mb-4">{pathway.subtitle}</p>
                <p className="mb-6 text-md font-medium">{pathway.objective}</p>
                <ul className="text-sm text-left list-disc list-inside space-y-1">
                  {pathway.concepts.map((concept, i) => (
                    <li key={i}>{concept}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#1a1a1a] text-white pt-12 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 text-sm">
          <div className="col-span-2">
            <div className="flex items-center space-x-2 mb-2">
              <img src="/Handover1.png" alt="Logo" className="h-8 w-8" />
              <span className="text-lg font-bold">Youth Ignition Hub</span>
            </div>
            <p className="text-gray-400">
              Ignite Potential. Impact Communities. Transform the World.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Quick Links</h4>
            <ul className="space-y-1">
              <li><Link href="/" className="text-gray-400 hover:underline">Home</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:underline">About</Link></li>
              <li><Link href="/programs" className="text-gray-400 hover:underline">Programs</Link></li>
              <li><Link href="#" className="text-gray-400 hover:underline">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Contact</h4>
            <ul className="text-gray-400 space-y-1">
              <li>Email: <a href="mailto:info@youthignitionhub.org" className="hover:underline">info@youthignitionhub.org</a></li>
              <li>Phone: +00 000 0000</li>
              <li className="flex space-x-3 mt-4">
                <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-black text-blue-600 flex items-center justify-center hover:bg-blue-200 transition">
                  <FaFacebookF />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-black text-pink-500 flex items-center justify-center hover:bg-pink-200 transition">
                  <FaInstagram />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-700 transition">
                  <FaXTwitter />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-black text-blue-700 flex items-center justify-center hover:bg-blue-200 transition">
                  <FaLinkedinIn />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-black text-red-600 flex items-center justify-center hover:bg-red-200 transition">
                  <FaYoutube />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 py-4 text-center text-gray-500 text-xs">
          &copy; {new Date().getFullYear()} Youth Ignition Hub. All rights reserved.
        </div>
      </footer>
    </main>
  )
}
