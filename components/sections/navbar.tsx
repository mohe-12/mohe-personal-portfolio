"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Sun, Moon, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"




const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  {name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

export default function Navbar () {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-gray-950/80 backdrop-blur-lg border-b border-gray-800" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2 text-lg font-semibold">
             <span className="text-indigo-600">&lt;/&gt;</span>
             <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">MOHAMMED</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex items-center space-x-8 ">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                 className="nav-underline text-gray-300 transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Me Button - positioned absolutely to the right */}
         <div className="hidden md:block mr-4">
           <Link
              href="#contact"
              className=" text-gray-300 hover:text-teal-400 transition-colors duration-200 border border-white font-semibold
              px-6 py-2 rounded-full hover:shadow-[0_0_15px_rgba(45,212,191,0.5)] flex items-center gap-2"
            >
             Contact Me
            <ArrowRight className="ml-2 w-4 h-4" />
           </Link>
         </div>
          
        
          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-teal-400 transition-colors">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          </div>
        </div>
  

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-lg border-b border-gray-800">
          <div className="container mx-auto px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-2 text-gray-300 hover:text-teal-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            {/* Mobile Contact Me Button */}
            <div className="pt-4 border-t border-gray-800/50">
              <Link
                href="#contact"
                className="block text-center bg-gradient-to-r from-teal-500 to-teal-400 text-gray-900 font-semibold py-3 px-6 
                rounded-full hover:shadow-[0_0_15px_rgba(45,212,191,0.5)] transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
