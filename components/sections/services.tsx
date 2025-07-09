"use client"

import { useState, useEffect } from "react"
import { Code, Smartphone, LayoutDashboard, Paintbrush, Video, Network } from "lucide-react";
import SectionHeading from "@/components/ui/section-heading"
import { cn } from "@/lib/utils"

export default function Services() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const skillCategories = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Web Design",
      services: ['Web development is the process of building programming...'],
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Mobile APP",
      services: ['Mobile app development involves creating software for mobile devices...'],
    },
    {
      icon: <LayoutDashboard className="h-6 w-6" />,
      title: "UX/UI design",
      services: ['UX/UI design focuses on creating a seamless user experience ...',],
    },
    {
      icon: <Paintbrush  className="h-6 w-6" />,
      title: "Graphics Design",
      services: ['Creative design solutions to enhance visual communication...'],
    },
    {
      icon: <Video  className="h-6 w-6" />,
      title: "Video Editing",
      services: ['Video editing involves manipulating and rearranging video footage to create a new work...'],
    },
    {
      icon: <Network  className="h-6 w-6" />,
      title: "Networking",
      services: ['Networking involves connecting computers and devices to share resources and information...'],
    },
  ]

  return (
    <section id="services" className="py-20 relative scroll-mt-16">
      <SectionHeading title="Services" subtitle="The services that I offer" />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className={cn(
              "bg-gray-900/30 backdrop-blur-sm border border-gray-800/50 rounded-xl p-6 hover:border-teal-500/50 transition-all duration-500 opacity-0 transform translate-y-8",
              mounted && "opacity-100 translate-y-0",
              mounted && `transition-delay-${index * 100}`,
            )}
            style={{
              transitionDelay: mounted ? `${index * 100}ms` : "0ms",
            }}
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gray-800/50 rounded-lg text-teal-400">{category.icon}</div>
                <h3 className="text-xl font-semibold text-gray-200">{category.title}</h3>
              </div>

              <div className="flex-grow">
                <ul className="space-y-3">
                  {category.services.map((services, servicesIndex) => (
                    <li
                      key={servicesIndex}
                      className="bg-gray-800/30 px-4 py-2 rounded-lg border border-gray-700/50 hover:border-teal-500/30 hover:shadow-[0_0_10px_rgba(45,212,191,0.15)] transition-all duration-300"
                    >
                      <span className="text-gray-300">{services}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
