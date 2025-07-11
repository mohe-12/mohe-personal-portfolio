"use client"

import { useState, useEffect } from "react"
import { X, ExternalLink, Github, Users, Calendar, Star } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"

interface ProjectModalProps {
  project: {
    title: string
    description: string
    fullDescription: string
    date: string
    duration: string
    techStack: string[]
    features: string[]
    teamSize: string
    role: string
    challenges: string[]
    imageSrc?: string
    gallery?: string[]
  }
  isOpen: boolean
  onClose: () => void
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setMounted(true)
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
      const timer = setTimeout(() => setMounted(false), 300)
      return () => clearTimeout(timer)
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  if (!mounted && !isOpen) return null

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300",
        isOpen ? "opacity-100 visible" : "opacity-0 invisible",
      )}
    >
      {/* Backdrop */}
      <div
        className={cn(
          "absolute inset-0 bg-black/60 backdrop-blur-sm transition-all duration-300",
          isOpen ? "opacity-100" : "opacity-0",
        )}
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className={cn(
          "relative bg-gray-900/95 backdrop-blur-lg border border-gray-800/50 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden transition-all duration-500 transform",
          isOpen ? "scale-100 translate-y-0" : "scale-95 translate-y-8",
        )}
      >
        {/* Header */}
        <div className="relative">
          {project.imageSrc && (
            <div className="w-full h-64 overflow-hidden">
              <Image
                src={project.imageSrc || "/placeholder.svg"}
                alt={project.title}
                width={800}
                height={400}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
            </div>
          )}

          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-gray-800/80 backdrop-blur-sm rounded-full text-gray-300 hover:text-white hover:bg-gray-700/80 transition-all duration-200"
          >
            <X size={20} />
          </button>

          <div className="absolute bottom-4 left-6 right-6">
            <h2 className="text-3xl font-bold text-white mb-2">{project.title}</h2>
            <div className="flex items-center gap-4 text-sm text-gray-300">
              <div className="flex items-center gap-1">
                <Calendar size={16} />
                <span>{project.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <Users size={16} />
                <span>{project.teamSize}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-16rem)]">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Main Content */}
            <div className="md:col-span-2 space-y-6">
              {/* Description */}
              <div>
                <h3 className="text-xl font-semibold text-gray-200 mb-3">Project Overview</h3>
                <p className="text-gray-300 leading-relaxed">{project.fullDescription}</p>
              </div>

              {/* Features */}
              <div>
                <h3 className="text-xl font-semibold text-gray-200 mb-3">Key Features</h3>
                <div className="grid sm:grid-cols-2 gap-2">
                  {project.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <Star size={16} className="text-teal-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Challenges */}
              <div>
                <h3 className="text-xl font-semibold text-gray-200 mb-3">Technical Challenges</h3>
                <ul className="space-y-2">
                  {project.challenges.map((challenge, index) => (
                    <li key={index} className="text-gray-300 text-sm flex items-start gap-2">
                      <span className="text-teal-400 mt-1">•</span>
                      <span>{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Gallery */}
              {project.gallery && (
                <div>
                  <h3 className="text-xl font-semibold text-gray-200 mb-3">Screenshots</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {project.gallery.map((image, index) => (
                      <div key={index} className="aspect-video overflow-hidden rounded-lg">
                        <Image
                          src={image || "/placeholder.svg"}
                          alt={`${project.title} screenshot ${index + 1}`}
                          width={300}
                          height={200}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Project Info */}
              <div className="bg-gray-800/30 backdrop-blur-sm p-4 rounded-xl border border-gray-700/50">
                <h3 className="text-lg font-semibold text-gray-200 mb-3">Project Details</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="text-gray-400">Duration:</span>
                    <span className="text-gray-300 ml-2">{project.duration}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">My Role:</span>
                    <span className="text-gray-300 ml-2">{project.role}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Team Size:</span>
                    <span className="text-gray-300 ml-2">{project.teamSize}</span>
                  </div>
                </div>
              </div>

              {/* Tech Stack */}
              <div className="bg-gray-800/30 backdrop-blur-sm p-4 rounded-xl border border-gray-700/50">
                <h3 className="text-lg font-semibold text-gray-200 mb-3">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs bg-teal-500/20 text-teal-300 px-3 py-1 rounded-full border border-teal-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
