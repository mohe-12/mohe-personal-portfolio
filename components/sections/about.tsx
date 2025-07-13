"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Code, Briefcase, GraduationCap, MapPin } from "lucide-react"
import SectionHeading from "@/components/ui/section-heading"
import { Trophy, Award, Star, Target, Users, Calendar, TrendingUp } from "lucide-react"
import { cn } from "@/lib/utils"

function About() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const quickFacts = [
    {
      icon: <Code className="h-5 w-5 text-teal-400" />,
      title: "Frontend Developer",
      description: "HTML, CSS, React, and modern UI frameworks",
    },
    {
      icon: <Briefcase className="h-5 w-5 text-teal-400" />,
      title: "Backend Developer",
      description: "Node.js, Python, DB and API design",
    },
    {
      icon: <GraduationCap className="h-5 w-5 text-teal-400" />,
      title: "Continuous Learner",
      description: "Always exploring new technologies and best practices",
    },
    {
      icon: <MapPin className="h-5 w-5 text-teal-400" />,
      title: "Location",
      description: "Available remotely || Bale Robe, Ethiopa",
    },
  ]

  const counters = {
    projects: 25,
    clients: 10,
    experience: 4,
    technologies: 15,
  }

  const stats = [
    {
      icon: <Code className="h-6 w-6" />,
      label: "Projects Completed",
      value: counters.projects,
      suffix: "+",
    },
    {
      icon: <Users className="h-6 w-6" />,
      label: "Happy Clients",
      value: counters.clients,
      suffix: "+",
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      label: "Years Experience",
      value: counters.experience,
      suffix: "+",
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      label: "Technologies",
      value: counters.technologies,
      suffix: "+",
    },
  ] 


  return (
    <section id="about" className="py-20 relative scroll-mt-16">
      <SectionHeading title="About Me" subtitle="Get to know me better" />

      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div
          className={cn(
            "relative opacity-0 transform -translate-x-8 transition-all duration-1000",
            mounted && "opacity-100 translate-x-0",
          )}
        >
          <div className="relative w-full aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/20 to-teal-300/20 rounded-2xl -rotate-6 transform scale-95"></div>
            <div className="absolute inset-0 bg-gray-900/80 backdrop-blur-sm rounded-2xl border border-gray-800/50"></div>
            <div className="relative h-full w-full overflow-hidden rounded-2xl">

              <Image
                src="/images/mame1.jpg"
                alt="Mohammed Hasen M."
                width={400}
                height={400}
                className="object-cover h-full w-full"
                priority
              />
            </div>
          </div>
        </div>

        <div
          className={cn(
            "space-y-6 opacity-0 transform translate-x-8 transition-all duration-1000 delay-300",
            mounted && "opacity-100 translate-x-0",
          )}
        >
          <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-800/50 shadow-lg">
            <p className="text-gray-300 leading-relaxed">
              I'm an enthusiastic Fullstack Web Developer with experience in front and backend technologies. 
              I build scalable web applications with modern frameworks and I have a solid base with a database and api design.
            </p>
            <p className="text-gray-300 leading-relaxed mt-4">
              My path into web development has always been through an interest in how websites are made and the open-source tools used to do so. 
              I am now very proficient in HTML5, CSS, JavaScript as well as in multiple frameworks to create user friendly interfaces and strong back-ends.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {quickFacts.map((fact, index) => (
              <div
                key={index}
                className="bg-gray-900/30 backdrop-blur-sm p-4 rounded-xl border border-gray-800/50 hover:border-teal-500/50 transition-all duration-300 hover:shadow-[0_0_15px_rgba(45,212,191,0.15)]"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-1">{fact.icon}</div>
                  <div>
                    <h3 className="font-medium text-gray-200">{fact.title}</h3>
                    <p className="text-sm text-gray-400">{fact.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      
      <div className="mb-16 mt-30">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={cn(
                "bg-gray-900/30 backdrop-blur-sm border border-gray-800/50 rounded-xl p-6 text-center hover:border-teal-500/50 transition-all duration-500 opacity-0 transform translate-y-8",
                mounted && "opacity-100 translate-y-0",
              )}
              style={{
                transitionDelay: mounted ? `${index * 100}ms` : "0ms",
              }}
            >
              <div className="flex justify-center mb-3">
                <div className="p-3 bg-teal-500/20 rounded-full text-teal-400">{stat.icon}</div>
              </div>
              <div className="text-3xl font-bold text-white mb-1">
                {stat.value}
                {stat.suffix}
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Call to Action */}
      <div
        className={cn(
          "mt-16 text-center opacity-0 transform translate-y-8 transition-all duration-1000 delay-1000",
          mounted && "opacity-100 translate-y-0",
        )}
      >
        {/* You can add a button or message here */}
      </div>
    </section>
  )
}
export default About;
