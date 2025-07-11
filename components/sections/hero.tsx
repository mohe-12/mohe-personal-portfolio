"use client"

import { useEffect, useState } from "react"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Download, Mail, Github, Linkedin, MapPin } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  const [currentRole, setCurrentRole] = useState(0)

  const roles = ["Full-Stack Developer", "UX/UI Designer", "Graphic Designer", "Web App Developer"]

  useEffect(() => {
    setMounted(true)

    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])



  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center relative pt-16 pb-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={cn(
            "absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl opacity-0 transition-opacity duration-2000",
            mounted && "opacity-70",
          )}
        />
        <div
          className={cn(
            "absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl opacity-0 transition-opacity duration-2000 delay-500",
            mounted && "opacity-50",
          )}
        />
        <div
          className={cn(
            "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-500/5 rounded-full blur-3xl opacity-0 transition-opacity duration-2000 delay-1000",
            mounted && "opacity-100",
          )}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div
              className={cn(
                "text-center lg:text-left space-y-8 opacity-0 transform translate-y-8 transition-all duration-1000",
                mounted && "opacity-100 translate-y-0",
              )}
            >
              {/* Greeting */}
              <div className="space-y-2">
                <div className="flex items-center justify-center lg:justify-start gap-2 text-teal-400 font-medium">
                  <div className="w-8 h-px bg-teal-400"></div>
                  <span>Hello, I'm</span>
                </div>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                  <span className="text-white">
                    Mohammed  </span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-teal-200">
                    H.
                  </span>
                </h1>
              </div>

              {/* Dynamic Role */}
              <div className="h-16 flex items-center justify-center lg:justify-start">
                <div className="text-xl md:text-2xl text-gray-300 font-light">
                  <span>I'm a Professional </span>
                  <span
                    key={currentRole}
                    className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-teal-200 font-semibold animate-pulse"
                  >
                    {roles[currentRole]}
                  </span>
                </div>
              </div>

              

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="#contact"
                  className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-teal-500 to-teal-400 
                  text-gray-900 font-semibold px-8 py-4 rounded-full hover:shadow-[0_0_25px_rgba(45,212,191,0.6)] transition-all duration-300 transform hover:scale-105"
                >
                  <span>Get In Touch</span>
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>

                <a
                  href="/files/sample-resume.pdf"
                  download
                  className="group inline-flex items-center justify-center gap-2 bg-gray-800/50 text-teal-400 border 
                  border-teal-500/30 font-semibold px-8 py-4 rounded-full hover:bg-gray-700/50 hover:shadow-[0_0_25px_rgba(45,212,191,0.3)] 
                  transition-all duration-300 transform hover:scale-105"
                >
                  <Download size={18} />
                  <span>Download CV</span>
                </a>
              </div>
            </div>

            

            {/* Right Content - Profile Image */}
            <div
              className={cn(
                "relative opacity-0 transform translate-x-8 transition-all duration-1000 delay-300",
                mounted && "opacity-100 translate-x-0",
              )}
            >
              <div className="relative max-w-md mx-auto">
                {/* Decorative elements */}
                <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-teal-400/30 rounded-full"></div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-teal-400/20 rounded-full"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-tr from-teal-500/20 to-blue-500/20 rounded-full blur-3xl -z-10"></div>

                {/* Main profile container */}
                <div className="relative">
                  <div className="w-80 h-80 mx-auto rounded-full overflow-hidden border-4 border-gray-800/50 shadow-2xl hover:shadow-[0_0_40px_rgba(45,212,191,0.3)] transition-all duration-500 hover:scale-105">
                    <Image
                      src="/images/photo-header.jpg"
                      alt="Mohammed Hasen M. - Full-Stack Developer"
                      width={320}
                      height={320}
                      className="w-full h-full object-cover"
                      priority
                    />
                  </div>

                

                  {/* Floating badges */}
                  <div className="absolute -top-2 -right-2 bg-gradient-to-r from-teal-500 to-teal-400 
                  text-white px-4 py-2 rounded-full text-sm  shadow-lg animate-bounce">
                    Available for Work
                  </div>

                  <div className="absolute -bottom-2 -left-2 bg-gray-900/90 backdrop-blur-sm border border-gray-700 
                  text-gray-300 px-4 py-2 rounded-full text-sm font-medium">
                    <span className="text-indigo-600 text-sm font-medium">&lt;/&gt;  </span>
                    Full-Stack Developer
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={cn(
          "absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 transition-all duration-1000 delay-1000",
          mounted && "opacity-100",
        )}
      >
        <Link
          href="#about"
          aria-label="Scroll to About section"
          className="flex flex-col items-center gap-2 text-gray-400 hover:text-teal-400 transition-colors group"
        >
          <span className="text-sm font-medium">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center group-hover:border-teal-400 transition-colors">
            <div className="w-1 h-3 bg-gray-600 rounded-full mt-2 animate-bounce group-hover:bg-teal-400"></div>
          </div>
        </Link>
      </div>
    </section>
  )
}
