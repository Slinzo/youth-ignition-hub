'use client'

import { useState } from "react"
import Link from 'next/link'

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <main className="min-h-screen text-gray-800" style={{ backgroundColor: '#fdfaf6', color: '#1a1a1a' }}>

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
              <button className="px-4 py-2 rounded transition" style={{ backgroundColor: '#d9373f', color: 'white' }}>Apply Now</button>
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
            <button className="w-full px-4 py-2 rounded transition" style={{ backgroundColor: '#d9373f', color: 'white' }}>Apply Now</button>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section className="text-center py-0 px-4 bg-[#ffe3ca]">
        <div className="w-full max-h-[700px] overflow-hidden">
          <img src="/hero.jpg" alt="Hero" className="mx-auto rounded-lg shadow-lg max-w-full h-auto" />
          <p className="mt-4 text-lg font-semibold text-[#ff9900]">Spark</p>
        </div>
      </section>

      {/* MISSION */}
      <section className="py-16 px-6 text-center max-w-4xl mx-auto rounded-lg shadow-md" style={{ backgroundColor: '#fef6ed' }}>
        <h2 className="text-3xl font-bold mb-4 text-[#cc6600]">Our Mission</h2>
        <p className="text-lg leading-relaxed text-[#663300]">
          We exist to equip young adults with skills to navigate life transitions, live and lead
          with purpose, and become resourceful citizens — transforming the continent and the world
          one life at a time.
        </p>
      </section>

      {/* PROGRAM PREVIEW */}
      <section className="py-16 px-6 bg-[#f9fafb]">
        <h2 className="text-3xl font-bold text-center mb-10 text-[#222]">Our 5 Ignition Pathways</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {[
            { title: 'SPARK', desc: 'Purpose Discovery & Self-Awareness', image: '/light.jpg', gradient: 'from-[#281C2D] to-[#000]' },
            { title: 'FORGE', desc: 'Essential Life Skills', image: '/cook.jpg', gradient: 'from-yellow-700 to-orange-400' },
            { title: 'FLAME', desc: 'Financial & Legal Literacy', image: '/money.jpg', gradient: 'from-red-900 to-red-500' },
            { title: 'BLAZE', desc: 'Entrepreneurship & Self-Development', image: '/team.png', gradient: 'from-blue-900 to-blue-400' },
            { title: 'WILDFIRE', desc: 'Community & Global Impact', image: '/world.avif', gradient: 'from-orange-800 to-yellow-500' },
          ].map(({ title, desc, image, gradient }) => (
            <a key={title} href="#" className="relative group block rounded-xl overflow-hidden shadow-lg h-72 md:h-80 w-full" tabIndex={0}>
              <div className="w-full h-full bg-cover bg-center transition-transform duration-300 scale-100 group-hover:scale-105" style={{ backgroundImage: `url(${image})` }}></div>
              <div className={`absolute inset-0 bg-gradient-to-b ${gradient} opacity-0 group-hover:opacity-90 group-focus:opacity-90 transition-opacity duration-300`}></div>
              <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300 p-4">
                <h3 className="text-2xl font-bold underline mb-2">{title}</h3>
                <p className="text-base max-w-xs">{desc}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-8 px-6 text-center" style={{ backgroundColor: '#cc6600', color: 'white' }}>
        <h2 className="text-3xl font-bold mb-4">Ready to Ignite Your Purpose?</h2>
        <p className="mb-6 text-lg">Join the Youth Ignition Hub family and connect with us.</p>
        <div className="flex justify-center space-x-6 mt-4">
          <div className="flex justify-center space-x-6 mt-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" title="Instagram">
              <svg className="h-6 w-6 fill-white hover:fill-gray-300 transition" viewBox="0 0 24 24">
                <path d="M12 2.2c3.2 0 3.6 0 4.8.1 1.2.1 2 .2 2.5.4.6.2 1 .5 1.5 1 .5.5.8.9 1 1.5.2.5.3 1.3.4 2.5.1 1.2.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 1.2-.2 2-.4 2.5-.2.6-.5 1-1 1.5-.5.5-.9.8-1.5 1-.5.2-1.3.3-2.5.4-1.2.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2-.1-2-.2-2.5-.4-.6-.2-1-.5-1.5-1-.5-.5-.8-.9-1-1.5-.2-.5-.3-1.3-.4-2.5C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.8c.1-1.2.2-2 .4-2.5.2-.6.5-1 1-1.5.5-.5.9-.8 1.5-1 .5-.2 1.3-.3 2.5-.4C8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3.1 0-3.5 0-4.7.1-1.1.1-1.7.2-2.1.3-.5.2-.9.4-1.2.7-.3.3-.5.7-.7 1.2-.1.4-.3 1-.3 2.1-.1 1.2-.1 1.6-.1 4.7s0 3.5.1 4.7c.1 1.1.2 1.7.3 2.1.2.5.4.9.7 1.2.3.3.7.5 1.2.7.4.1 1 .3 2.1.3 1.2.1 1.6.1 4.7.1s3.5 0 4.7-.1c1.1-.1 1.7-.2 2.1-.3.5-.2.9-.4 1.2-.7.3-.3.5-.7.7-1.2.1-.4.3-1 .3-2.1.1-1.2.1-1.6.1-4.7s0-3.5-.1-4.7c-.1-1.1-.2-1.7-.3-2.1-.2-.5-.4-.9-.7-1.2-.3-.3-.7-.5-1.2-.7-.4-.1-1-.3-2.1-.3-1.2-.1-1.6-.1-4.7-.1zm0 3.6a5.2 5.2 0 1 1 0 10.4 5.2 5.2 0 0 1 0-10.4zm0 1.8a3.4 3.4 0 1 0 0 6.8 3.4 3.4 0 0 0 0-6.8zm6.4-.4a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0z"/>
              </svg>
            </a>

            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" title="Facebook">
              <svg className="h-6 w-6 fill-white hover:fill-gray-300 transition" viewBox="0 0 24 24">
                <path d="M22 12c0-5.522-4.478-10-10-10S2 6.478 2 12c0 5.01 3.663 9.13 8.438 9.879V15.47h-2.54v-2.47h2.54v-1.882c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.462h-1.26c-1.243 0-1.63.771-1.63 1.562V13h2.773l-.443 2.47h-2.33v6.409C18.337 21.13 22 17.01 22 12z"/>
              </svg>
            </a>

            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" title="Twitter">
              <svg className="h-6 w-6 fill-white hover:fill-gray-300 transition" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
              </svg>
            </a>

            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" title="YouTube">
              <svg className="h-6 w-6 fill-white hover:fill-gray-300 transition" viewBox="0 0 24 24">
                <path d="M19.6 3H4.4C3.1 3 2 4.1 2 5.4v13.2C2 19.9 3.1 21 4.4 21h15.2c1.3 0 2.4-1.1 2.4-2.4V5.4C22 4.1 20.9 3 19.6 3zM10 15.5v-7l6 3.5-6 3.5z"/>
              </svg>
            </a>

          </div>
        </div>
      </section>

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

