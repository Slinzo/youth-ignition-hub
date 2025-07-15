'use client'

import { useState, useEffect } from "react"
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleApplyClick = () => {
    alert("Thank you for your interest! Unfortunately, we are not taking applications at this moment.")
  }

  // Scroll-based animation
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-up")
        }
      })
    }, { threshold: 0.1 })

    const elements = document.querySelectorAll(".fade-section")
    elements.forEach(el => observer.observe(el))

    return () => elements.forEach(el => observer.unobserve(el))
  }, [])

  return (
    <main className="min-h-screen text-gray-800 bg-[#fdfaf6]">

      {/* NAVBAR */}
      <header className="backdrop-blur-sm bg-[#092d43]/50 sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-24 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <img src="/Handover1.png" alt="Logo" className="h-16 w-16" />
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


      {/* HERO CAROUSEL */}
      <section className="h-screen flex items-center top-0 justify-center text-center bg-[#c0c0c0]">
        <Swiper
          modules={[Autoplay, Pagination]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          loop
          className="w-full h-full"
        >
          {[
            {
              text: "Unleash your potential",
              sub: "Empowering young minds",
              image: "/gd.jpg",
            },
            {
              text: "Lead with purpose",
              sub: "Building the leaders of tomorrow",
              image: "/group1.jpg",
            },
            {
              text: "Ignite your journey",
              sub: "Your future starts here",
              image: "/bgr.jpg",
            },
          ].map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                className="relative h-full w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50 z-10"></div>

                {/* Content */}
                <div className="relative z-20 h-full flex flex-col justify-center items-center text-white px-4">
                  <h1 className="text-4xl md:text-6xl font-bold mb-4 fade-section">
                    {slide.text}
                  </h1>
                  <p className="text-lg md:text-2xl fade-section">
                    {slide.sub}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>


      {/* MISSION */}
      <section className="py-20 px-4 bg-[#d16500] text-center fade-section">
        <h2 className="text-4xl font-bold text-[white] mb-6">Attention here!!</h2>
        <p className="text-xl text-[white] leading-relaxed max-w-3xl mx-auto">
          something captivating 
        </p>
      </section>

      {/* PROGRAMS */}
      <section className="py-16 px-6 fade-section">
        <h2 className="text-3xl font-bold text-center mb-10 text-[#222]">Our 5 Ignition Pathways</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {[
            { title: 'SPARK', desc: 'Purpose Discovery & Self-Awareness', image: '/light.jpg', gradient: 'from-[#281C2D] to-[#000]' },
            { title: 'FORGE', desc: 'Essential Life Skills', image: '/cook.jpg', gradient: 'from-yellow-700 to-orange-400' },
            { title: 'FLAME', desc: 'Financial & Legal Literacy', image: '/money.jpg', gradient: 'from-red-900 to-red-500' },
            { title: 'BLAZE', desc: 'Entrepreneurship & Self-Development', image: '/group4.jpg', gradient: 'from-blue-900 to-blue-400' },
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

      {/* REVIEWS */}
      <section className="bg-[#0f3f66] py-16 fade-section">
        <h2 className="text-3xl font-bold text-center mb-12 text-[white]">What People Are Saying</h2>

        <Swiper
          modules={[Navigation, Autoplay, Pagination]}
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          loop
          className="relative max-w-4xl mx-auto"
        >
          {[
            {
              name: "Lebo Mokoena",
              title: "Young Proffesioal",
              image: "/tent.jpg",
              comment: "This program changed the way I view my future. The support and training were outstanding!",
            },
            {
              name: "Thandi Ndlovu",
              title: "Graduate",
              image: "/tz.jpg",
              comment: "Absolutely inspiring! I gained confidence and clarity on my journey.",
            },
            {
              name: "Sibusiso Dlamini",
              title: "Student",
              image: "/cook.jpg",
              comment: "Highly recommended to any young person trying to grow. The mentors are amazing!",
            },
          ].map((review, idx) => (
            <SwiperSlide key={idx}>
              <div className="bg-white rounded-xl p-8 mx-4 shadow-lg border-2 border-transparent hover:border-accent hover:shadow-2xl transition-all duration-500">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-24 h-24 rounded-full border-4 border-primary overflow-hidden shadow-lg">
                    <img
                      src={review.image}
                      alt={review.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-lg text-gray-700 italic max-w-xl">&quot;{review.comment}&quot;</p>
                  <div className="mt-4">
                    <p className="font-semibold text-accent">{review.name}</p>
                    <p className="text-sm text-earth">{review.title}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}

          {/* Custom Navigation Arrows */}
          <div className="swiper-button-prev-custom absolute -left-10 top-1/2 transform -translate-y-1/2 bg-[#092d43] hover:bg-accent text-white p-2 rounded-full shadow-lg transition duration-300 z-10 cursor-pointer">
            &#8592;
          </div>
          <div className="swiper-button-next-custom absolute -right-10 top-1/2 transform -translate-y-1/2 bg-[#092d43] hover:bg-accent text-white p-2 rounded-full shadow-lg transition duration-300 z-10 cursor-pointer">
            &#8594;
          </div>
        </Swiper>
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
                <a href="#" target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-black text-blue-600 flex items-center justify-center hover:bg-blue-200 transition">
                  <FaFacebookF />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-black text-pink-500 flex items-center justify-center hover:bg-pink-200 transition">
                  <FaInstagram />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-700 transition">
                  <FaXTwitter />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-black text-blue-700 flex items-center justify-center hover:bg-blue-200 transition">
                  <FaLinkedinIn />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-black text-red-600 flex items-center justify-center hover:bg-red-200 transition">
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
 
