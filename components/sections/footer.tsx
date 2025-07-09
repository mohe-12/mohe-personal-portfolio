"use client"

import { useState, useEffect } from "react"
import { Github, Linkedin, Twitter, Mail } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Footer() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github size={20} />,
      url: "https://github.com/mohe-12",
      color: "hover:text-gray-300",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin size={20} />,
      url: "https://linkedin.com/in/mohammed-hasen",
      color: "hover:text-blue-400",
    },
    {
      name: "Twitter",
      icon: <Twitter size={20} />,
      url: "https://twitter.com/mohe_dev",
      color: "hover:text-blue-400",
    },
    {
      name: "Email",
      icon: <Mail size={20} />,
      url: "mailto:mohehasen690@gmail.com",
      color: "hover:text-teal-400",
    },
  ]

  return (
    <footer className="relative py-12 border-t border-gray-800/50">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-950/50 to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Horizontal Divider */}
        <div className="mb-8">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
        </div>

        {/* Footer Content */}
        <div
          className={cn(
            "flex flex-col sm:flex-row justify-between items-center gap-6 opacity-0 transform translate-y-4 transition-all duration-1000",
            mounted && "opacity-100 translate-y-0",
          )}
        >
          {/* Left Side - Social Media Icons */}
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-400 mr-2">Follow me:</span>
            <div className="flex items-center gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "p-2 rounded-lg bg-gray-800/50 text-gray-400 transition-all duration-300 hover:bg-gray-700/50 hover:scale-110 hover:shadow-[0_0_10px_rgba(45,212,191,0.3)]",
                    social.color,
                  )}
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right Side - Copyright and Info */}
          <div className="text-center sm:text-right">
            <p className="text-sm text-gray-500">© {new Date().getFullYear()} Mohammed Hasen M. All rights reserved.</p>
            <p className="text-xs text-gray-600 mt-1">Built with Next.js, TypeScript & Tailwind CSS</p>
          </div>
        </div>

        {/* Additional Footer Info */}
        <div
          className={cn(
            "mt-8 pt-6 border-t border-gray-800/30 text-center opacity-0 transform translate-y-4 transition-all duration-1000 delay-300",
            mounted && "opacity-100 translate-y-0",
          )}
        >
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-sm text-gray-500">
            <span>Available for freelance opportunities</span>
            <span className="hidden sm:block">•</span>
            <span>Open to collaboration</span>
            <span className="hidden sm:block">•</span>
            <span>Remote work preferred</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
