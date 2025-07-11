"use client"

import { useState } from "react"
import { ExternalLink, Github, Calendar, Users } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"

interface ProjectCardProps {
  title: string
  description: string
  date: string
  techStack: string[]
  teamSize: string
  category: string
  imageSrc?: string
  onClick: () => void
}

export default function ProjectCard({
  title,
  description,
  date,
  techStack,
  teamSize,
  category,
  imageSrc,
  onClick,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="bg-gray-900/30 backdrop-blur-sm border border-gray-800/50 rounded-xl overflow-hidden group transition-all duration-300 h-full cursor-pointer hover:border-teal-500/50 hover:shadow-[0_0_20px_rgba(45,212,191,0.15)]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {imageSrc && (
        <div className="w-full h-48 overflow-hidden relative">
          <Image
            src={imageSrc || "/placeholder.svg"}
            alt={title}
            width={400}
            height={225}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
          <div className="absolute top-3 right-3 bg-gradient-to-r from-teal-500/90 to-teal-400/90 backdrop-blur-sm px-3 py-1 rounded-full">
            <span className="text-xs font-medium text-white">{category}</span>
          </div>
        </div>
      )}
      <div className="p-6 flex flex-col h-full">
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-200 group-hover:text-teal-400 transition-colors line-clamp-1 mb-2">
            {title}
          </h3>
          <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
            <div className="flex items-center gap-1">
              <Calendar size={12} />
              <span>{date}</span>
            </div>
            <div className="flex items-center gap-1">
              <Users size={12} />
              <span>{teamSize}</span>
            </div>
          </div>
          <p className="text-gray-400 mb-4 text-sm leading-relaxed line-clamp-3">{description}</p>
        </div>

        <div className="flex flex-wrap gap-2 mt-auto mb-4">
          {techStack.slice(0, 3).map((tech, index) => (
            <span key={index} className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-full">
              {tech}
            </span>
          ))}
          {techStack.length > 3 && (
            <span className="text-xs bg-gray-700 text-gray-400 px-2 py-1 rounded-full">
              +{techStack.length - 3} more
            </span>
          )}
        </div>

        <div
          className={cn(
            "flex gap-3 transition-all duration-300 transform",
            isHovered ? "opacity-100 translate-y-0" : "opacity-70 translate-y-1",
          )}
        >
        </div>
      </div>
      <div
        className={cn(
          "h-1 bg-gradient-to-r from-teal-500 to-teal-300 transition-all duration-500 transform origin-left",
          isHovered ? "scale-x-100" : "scale-x-0",
        )}
      ></div>
    </div>
  )
}
