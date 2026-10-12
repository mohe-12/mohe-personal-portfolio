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
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_15%_10%,hsl(var(--primary)/0.12),transparent_28%),radial-gradient(circle_at_85%_20%,hsl(var(--accent)/0.08),transparent_24%),linear-gradient(hsl(var(--background)),hsl(var(--background)))]" />
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-30 [background-image:linear-gradient(hsl(var(--border)/0.35)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border)/0.35)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_75%)]" />
      <Navbar />
      <div className="container relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
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
