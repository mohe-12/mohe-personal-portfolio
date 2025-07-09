'use client'
import { useEffect, useState } from "react"
import Navbar from "@/components/sections/navbar"
import Hero from "@/components/sections/hero"
import About from "@/components/sections/about"
import Skills from "@/components/sections/skills"
import Services from "@/components/sections/services"
import Projects from "@/components/sections/projects"
import Contact from "@/components/sections/contact"
import Footer from "@/components/sections/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-gray-100 overflow-hidden">
      <div className="fixed inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <Navbar/>
      <div className="container mx-auto px-4 relative z-10">
        <Hero />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </main>
  )
}
