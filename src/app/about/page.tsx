'use client'

import { useState } from "react"
import Link from 'next/link'

export default function AboutPage() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <main className="min-h-screen" style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)' }}>
      
      {/* NAVBAR */}
      <header className="shadow sticky top-0 z-50" style={{ backgroundColor: 'var(--color-light)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="text-xl font-bold" style={{ color: 'var(--color-primary)' }}>
              Youth Ignition Hub
            </div>

            {/* Desktop Menu */}
            <nav className="hidden md:flex space-x-6">
              <Link href="/" className="hover:underline" style={{ color: 'var(--color-dark)' }}>Home</Link>
              <Link href="/about" className="hover:underline" style={{ color: 'var(--color-dark)' }}>About</Link>
              <a href="#" className="hover:underline" style={{ color: 'var(--color-dark)' }}>Programs</a>
              <a href="#" className="hover:underline" style={{ color: 'var(--color-dark)' }}>Contact</a>
            </nav>

            {/* CTA Button */}
            <div className="hidden md:block">
              <button className="px-4 py-2 rounded transition" style={{ backgroundColor: 'var(--color-accent)', color: 'white' }}>
                Apply Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="focus:outline-none"
                style={{ color: 'var(--color-primary)' }}
              >
                ☰
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden px-4 py-4 space-y-2" style={{ backgroundColor: 'var(--color-light)' }}>
            <Link href="/" className="block hover:underline" style={{ color: 'var(--color-dark)' }}>Home</Link>
            <Link href="/about" className="block hover:underline" style={{ color: 'var(--color-dark)' }}>About</Link>
            <a href="#" className="block hover:underline" style={{ color: 'var(--color-dark)' }}>Programs</a>
            <a href="#" className="block hover:underline" style={{ color: 'var(--color-dark)' }}>Contact</a>
            <button className="w-full px-4 py-2 rounded transition" style={{ backgroundColor: 'var(--color-accent)', color: 'white' }}>
              Apply Now
            </button>
          </div>
        )}
      </header>

      {/* ABOUT SECTION */}
      <section className="text-center py-10 px-4" style={{ backgroundColor: 'var(--color-light)' }}>
        <h1 className="text-4xl font-bold mb-8" style={{ color: 'var(--color-primary)' }}>
          About Youth Ignition Hub
        </h1>

        <p className="text-lg leading-relaxed mb-8 text-center max-w-3xl mx-auto" style={{ color: 'var(--color-dark)' }}>
          Youth Ignition Hub is a Christ-centered nonprofit focused on igniting purpose,
          building resilience, and equipping young Africans with life, leadership,
          and entrepreneurial skills. Our goal is to raise a generation that transforms
          barriers into launchpads and leads with intention and impact.
        </p>

        <div className="p-6 rounded-lg shadow mb-12 text-center max-w-3xl mx-auto" style={{ backgroundColor: '#f3f4f6' }}>
          <p className="text-xl font-semibold mb-2" style={{ color: 'var(--color-dark)' }}>
            “Ignite Purpose. Impact Communities. Transform Africa.”
          </p>
          <p className="text-gray-600">
            Empowering youth to discover their God-given potential and lead with purpose.
          </p>
        </div>

        <h2 className="text-3xl font-bold text-center mb-10" style={{ color: 'var(--color-dark)' }}>
          Our 5 Ignition Pathways
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {[
            { title: 'SPARK', desc: 'Purpose Discovery & Self-Awareness', color: 'var(--color-accent)' },
            { title: 'FORGE', desc: 'Essential Life Skills', color: 'var(--color-earth)' },
            { title: 'FLAME', desc: 'Financial & Legal Literacy', color: 'var(--color-danger)' },
            { title: 'BLAZE', desc: 'Entrepreneurship & Self-Development', color: 'var(--color-primary)' },
            { title: 'WILDFIRE', desc: 'Community & Global Impact', color: 'var(--color-dark)' },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white p-6 rounded-lg shadow-md border-l-4"
              style={{ borderColor: item.color }}
            >
              <h3 className="text-xl font-bold mb-2" style={{ color: item.color }}>
                {item.title}
              </h3>
              <p className="text-gray-700">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
