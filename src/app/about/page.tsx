'use client'

import { useState, useEffect } from "react"
import Link from 'next/link'
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

  const dividerColors = ['#d9373f', '#092d43', '#a30000', '#b38b00']

  return (
    <main className="min-h-screen pt-0 text-white bg-[#f5f5f5]">

      {/* NAVBAR */}
      <header className="backdrop-blur-sm bg-[#092d43]/50 sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-24 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <img src="/Handover1.png" alt="Logo" className="h-26 w-26" />
            <div className="flex flex-col leading-tight">
              <span className="text-2xl font-bold text-white -mb-1">Youth Ignition Hub</span>
              <span className="text-sm text-white tracking-wide">Ignite. Impact. Transform</span>
            </div>
          </div>

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
            <button
              onClick={handleApplyClick}
              className="w-full bg-[#d9373f] text-white py-2 rounded"
            >
              Apply Now
            </button>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section
        className="relative h-[100vh] flex items-center justify-center text-center bg-cover bg-center"
        style={{ backgroundImage: "url('/bottles.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 px-6 text-white max-w-3xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Youth Ignition Hub</h1>
          <p className="text-lg md:text-xl leading-relaxed">
            Youth Ignition Hub is a catalytic movement built to empower young Africans to walk in purpose, gain critical life and leadership skills, and take ownership of their future.
          </p>
        </div>
      </section>

      {/* ABOUT QUOTE BLOCK */}
      <section className="text-center py-10 px-4 fade-in opacity-0 translate-y-10 transition duration-700 ease-out">
        <div className="p-6 rounded-lg shadow mb-12 text-center max-w-3xl mx-auto" style={{ backgroundColor: '#f3f4f6' }}>
          <p className="text-xl font-semibold mb-2 text-[#092d43]">
            Ignite Purpose. Impact Communities. Transform Africa.
          </p>
          <p className="text-gray-600">
            Empowering youth to discover their God-given potential and lead with purpose.
          </p>
        </div>
      </section>

      {/* Divider 1 */}
      <div className="w-2/3 md:w-1/2 h-1 mx-auto mb-4" style={{ backgroundColor: dividerColors[0] }}></div>

      {/* VISION SECTION */}
      <section className="py-16 px-4 fade-in opacity-0 translate-y-10 transition duration-700 ease-out">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-[#092d43]">
            Our Vision
          </h2>
          <p className="text-gray-800 text-lg leading-relaxed">
            To ignite the next generation’s potential to fulfill their God-given purpose and shape a better world by serving with integrity, excellence, and faith.
          </p>
        </div>
      </section>

      {/* Divider 2 */}
      <div className="w-2/3 md:w-1/2 h-1 mx-auto mb-4" style={{ backgroundColor: dividerColors[1] }}></div>

      {/* MISSION SECTION */}
      <section className="py-16 px-4 fade-in opacity-0 translate-y-10 transition duration-700 ease-out">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-[#092d43]">
            Our Mission
          </h2>
          <p className="text-gray-800 text-lg leading-relaxed">
            We exist to equip young adults with skills to navigate life transitions, live and lead with purpose, and become resourceful citizens — transforming the continent and the world one life at a time.
          </p>
        </div>
      </section>

      {/* Divider 3 */}
      <div className="w-2/3 md:w-1/2 h-1 mx-auto mb-4" style={{ backgroundColor: dividerColors[3] }}></div>

      {/* THREEFOLD SECTION */}
      <section className="py-16 px-4 fade-in opacity-0 translate-y-10 transition duration-700 ease-out">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-[#092d43]">
            Our Threefold Mission
          </h2>
          <ul className="space-y-4 text-gray-800 text-lg list-disc list-inside text-left">
            <li>
              <strong>Ignite Potential</strong> – Helping youth discover their gifts, identity, and purpose.
            </li>
            <li>
              <strong>Impact Communities</strong> – Empowering youth to make a difference where they are.
            </li>
            <li>
              <strong>Transform the World</strong> – Equipping leaders who shape society with integrity and faith.
            </li>
          </ul>
        </div>
      </section>

      {/* Divider 4 */}
      <div className="w-2/3 md:w-1/2 h-1 mx-auto mb-4" style={{ backgroundColor: dividerColors[2] }}></div>

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
                <a href="https://www.facebook.com/" className="w-10 h-10 rounded-full bg-black text-blue-600 flex items-center justify-center hover:bg-blue-200 transition"><FaFacebookF /></a>
                <a href="https://www.instagram.com/" className="w-10 h-10 rounded-full bg-black text-pink-500 flex items-center justify-center hover:bg-pink-200 transition"><FaInstagram /></a>
                <a href="https://x.com/?lang=en-za" className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-700 transition"><FaXTwitter /></a>
                <a href="https://www.linkedin.com/" className="w-10 h-10 rounded-full bg-black text-blue-700 flex items-center justify-center hover:bg-blue-200 transition"><FaLinkedinIn /></a>
                <a href="https://www.youtube.com/" className="w-10 h-10 rounded-full bg-black text-red-600 flex items-center justify-center hover:bg-red-200 transition"><FaYoutube /></a>
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


