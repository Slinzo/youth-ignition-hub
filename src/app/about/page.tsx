'use client'

import { useState, useEffect } from "react"
import Link from 'next/link'

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

  const dividerColors = ['#d9373f', '#092d43', '#a30000', '#b38b00'] // dark orange, dark blue, dark red, dark yellow

  return (
    <main className="min-h-screen pt-0" style={{ backgroundColor: '#ffe5b4', color: 'var(--foreground)' }}>

      {/* NAVBAR */}
      <header className="shadow sticky top-0 z-50" style={{ backgroundColor: '#092d43' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <img src="/Handover1.png" alt="Youth Ignition Hub Logo" className="h-8 w-8" />
              <span className="text-xl font-bold text-white">Youth Ignition Hub</span>
            </div>
            <nav className="hidden md:flex space-x-6">
              <Link href="/" className="hover:underline text-white">Home</Link>
              <Link href="/about" className="hover:underline text-white">About</Link>
              <Link href="#" className="hover:underline text-white">Programs</Link>
              <Link href="#" className="hover:underline text-white">Contact</Link>
            </nav>
            <div className="hidden md:block">
              <button
                onClick={handleApplyClick}
                className="px-4 py-2 rounded transition"
                style={{ backgroundColor: '#d9373f', color: 'white' }}
              >
                Apply Now
              </button>
            </div>
            <div className="md:hidden">
              <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none text-white">☰</button>
            </div>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden px-4 py-4 space-y-2 bg-[#092d43]">
            <Link href="/" className="block hover:underline text-white">Home</Link>
            <Link href="/about" className="block hover:underline text-white">About</Link>
            <Link href="#" className="block hover:underline text-white">Programs</Link>
            <Link href="#" className="block hover:underline text-white">Contact</Link>
            <button
              onClick={handleApplyClick}
              className="w-full px-4 py-2 rounded transition"
              style={{ backgroundColor: '#d9373f', color: 'white' }}
            >
              Apply Now
            </button>
          </div>
        )}
      </header>

      {/* ABOUT SECTION */}
      <section className="text-center py-10 px-4 fade-in opacity-0 translate-y-10 transition duration-700 ease-out">
        <h1 className="text-4xl font-bold mb-8" style={{ color: 'var(--color-primary)' }}>
          About Youth Ignition Hub
        </h1>
        <p className="text-lg leading-relaxed mb-8 text-center max-w-3xl mx-auto" style={{ color: 'var(--color-dark)' }}>
          Youth Ignition Hub is a catalytic movement built to empower young Africans to walk in purpose, gain critical life and leadership skills, and take ownership of their future. Through intentional programming and spiritual guidance, we shape resilient and responsible citizens who act as agents of transformation in their communities and the world.
        </p>
        <div className="p-6 rounded-lg shadow mb-12 text-center max-w-3xl mx-auto" style={{ backgroundColor: '#f3f4f6' }}>
          <p className="text-xl font-semibold mb-2" style={{ color: 'var(--color-dark)' }}>
            “Ignite Purpose. Impact Communities. Transform Africa.”
          </p>
          <p className="text-gray-600">
            Empowering youth to discover their God-given potential and lead with purpose.
          </p>
        </div>
      </section>

      {/* Divider 1 */}
      <div className="w-300 h-1 mx-auto mb-4" style={{ backgroundColor: dividerColors[0] }}></div>

      {/* VISION SECTION */}
      <section className="py-16 px-4 fade-in opacity-0 translate-y-10 transition duration-700 ease-out">
        <div className="max-w-4xl mx-auto text-left">
          <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>Our Vision</h2>
          <p className="text-gray-800 text-lg">
            To ignite the next generation’s potential to fulfill their God-given purpose and shape a better world by serving with integrity, excellence, and faith.
          </p>
        </div>
      </section>

      {/* Divider 2 */}
      <div className="w-300 h-1 mx-auto mb-4" style={{ backgroundColor: dividerColors[1] }}></div>

      {/* MISSION SECTION */}
      <section className="py-16 px-4 fade-in opacity-0 translate-y-10 transition duration-700 ease-out">
        <div className="max-w-4xl mx-auto text-left">
          <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>Our Mission</h2>
          <p className="text-gray-800 text-lg">
            We exist to equip young adults with skills to navigate life transitions, live and lead with purpose, and become resourceful citizens thus transforming the continent and the world one life at a time.
          </p>
        </div>
      </section>

      {/* Divider 3 */}
      <div className="w-300 h-1 mx-auto mb-4" style={{ backgroundColor: dividerColors[3] }}></div>

      {/* THREEFOLD SECTION */}
      <section className="py-16 px-4 fade-in opacity-0 translate-y-10 transition duration-700 ease-out">
        <div className="max-w-4xl mx-auto text-left">
          <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>Our Threefold Mission</h2>
          <ul className="space-y-3 list-disc pl-6 text-gray-700">
            <li><strong>Ignite Potential</strong> – Helping youth discover their gifts, identity, and purpose.</li>
            <li><strong>Impact Communities</strong> – Empowering youth to make a difference where they are.</li>
            <li><strong>Transform the World</strong> – Equipping leaders who shape society with integrity and faith.</li>
          </ul>
        </div>
      </section>

      {/* Divider 4 */}
      <div className="w-300 h-1 mx-auto mb-30" style={{ backgroundColor: dividerColors[2] }}></div>

      {/* FOOTER */}
      <footer className="bg-[#1a1a1a] text-white py-10 px-6">
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
              <li><Link href="#" className="text-gray-400 hover:underline">Programs</Link></li>
              <li><Link href="#" className="text-gray-400 hover:underline">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Contact</h4>
            <ul className="text-gray-400 space-y-1">
              <li>Email: <a href="mailto:info@youthignitionhub.org" className="hover:underline">info@youthignitionhub.org</a></li>
              <li>Phone: +00 000 0000</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-500 text-xs">
          &copy; {new Date().getFullYear()} Youth Ignition Hub. All rights reserved.
        </div>
      </footer>
    </main>
  )
}

