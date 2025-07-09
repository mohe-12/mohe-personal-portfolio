"use client"

import { useState, useEffect } from "react"
import SectionHeading from "@/components/ui/section-heading"
import ProjectCard from "@/components/ui/project-card"
import ProjectModal from "@/components/ui/project-modal"
import { cn } from "@/lib/utils"

export default function Projects() {
  const [mounted, setMounted] = useState(false)
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  const projects = [
    {
      title: "University Student Portal",
      category: "Full-Stack",
      description:
        "A full-stack web application that enables university students to access grades, schedules, submit assignments, and receive announcements from faculty in real-time.",
      fullDescription:
        "ShopEase is a full-stack e-commerce platform built to provide a seamless online shopping experience. The application features a modern React frontend with a robust Node.js backend, utilizing PostgreSQL for data persistence. The platform includes comprehensive user management, advanced product filtering, secure payment processing through Stripe, and a powerful admin dashboard for inventory and order management.",
      date: "Dec 2024",
      duration: "2.5 months",
      teamSize: "Solo Project",
      role: "Full-stack Developer",
      techStack: ["Next.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "JWT Auth"],
      features: [
        "Role-based login (Student & Instructor)",
        "Dynamic timetable & academic calendar",
        "Assignment upload & tracking",
        "Admin panel for managing students and classes",
      ],
      challenges: [
        "Secure role-based authentication",
        "File upload with metadata",
        "Relational data design (classes, courses, users)",
      ],
      demoUrl: "https://student-portal.vercel.app",
      codeUrl: "https://github.com/mohe-12/shopease-ecommerce",
     imageSrc: "images/education.jpg"
    },
    {
      title: "Smart QR-Based Attendance System",
      category: "Full-Stack ",
      description:
        "A smart attendance tracking system where instructors generate unique QR codes, and students scan them to mark attendance. Prevents fraud and manual errors.",
      fullDescription:
        "TaskFlow is a comprehensive project management solution designed for modern teams. Built with Vue.js and powered by real-time Socket.io connections, it enables seamless collaboration across distributed teams. The application features intuitive Kanban boards, advanced task assignment, progress tracking, and integrated team communication tools.",
      date: "Oct 2024",
      duration: "1.5 months",
      teamSize: "Team of 3",
      role: "Lead Developer",
      techStack: ["React", "Firebase", "Firestore", "html5-qrcode", "TailwindCSS"],
      features: [
          "QR code generation per session",
          "Mobile camera scan to check-in",
          "Real-time attendance tracking",
          "Export reports (CSV, PDF)",
      ],
      challenges: [
         "Generating and reading dynamic QR codes",
         "Handling real-time data updates",
         "User validation and duplicate prevention",
      ],
      demoUrl: "https://student-portal.vercel.app",
      codeUrl: "https://github.com/mohe-12/taskflow-management",
      imageSrc: "/images/qrcode.png",
  
    },
    {
      title: "Ethiopian Cultural Event Manager",
      category: "Backend",
      description:
        "An event listing and RSVP platform tailored to cultural, educational, and creative events in Ethiopia. Users can register, browse, or manage events.",
      fullDescription:
        "SocialMetrics is an advanced analytics platform that provides comprehensive insights into social media performance across multiple platforms. Built with Next.js and TypeScript, it features interactive data visualizations, automated reporting, and real-time metrics tracking. The dashboard integrates with major social media APIs to provide unified analytics and actionable insights.",
      date: "Sep 2024",
      duration: "2 months",
      teamSize: "Team of 2",
      role: "Backend & Admin System Developer",
      techStack: ["React.js", "Express", "MySQL", "EmailJS", "TailwindCSS"],
      features: [
          "Create and publish events",
          "RSVP with email notification",
          "Filter by city, date, or category",
          "Admin dashboard for organizers",
      ],
      challenges: [
          "Dynamic calendar handling",
          "User authentication and email service",
          "CRUD and admin controls with moderation",
      ],
      demoUrl: "https://ethiopia-events.vercel.app",
      codeUrl: "https://github.com/mohe-12/social-analytics-dashboard",
      imageSrc: "/images/culture.jpg",
    },
    {
      title: "Afan Oromo-English Dictionary App",
      category: "Mobile App",
      description:
        "A lightweight web app for translating words between Afan Oromo and English, including audio pronunciation and sentence usage examples. Designed to help language learners.",
      fullDescription:
        "DineReserve is a comprehensive restaurant management system that streamlines operations from reservations to payments. Built with React and Firebase, it provides restaurants with tools to manage table bookings, process orders, handle payments, and maintain customer relationships. The system includes QR code integration for contactless dining and comprehensive analytics for business insights.",
      date: "Aug 2024",
      duration: "1 months",
      teamSize: "Solo Project",
      role: " Full-stack Developer",
      techStack: ["Next.js", "TailwindCSS", "Flask", "SQLite", "Web Speech API"],
      features: [
          "Fast search with autocomplete",
          "Text-to-speech for both languages",
          "Bookmark feature with offline capability",
          "Example sentences and word categories",
      ],
      challenges: [
        "Handling and indexing a bilingual dataset",
        "Implementing TTS (Text-to-Speech)",
        "Optimizing PWA for offline usage",
      ],
      demoUrl: "https://amharic-dictionary.vercel.app",
      codeUrl: "https://github.com/mohe-12/restaurant-booking-system",
      imageSrc: "/images/oromo.png",
    },
    {
      title: "Local Business Directory App",
      category: "Mobile App",
      description:
        "A web and mobile-friendly directory app to discover, rate, and review small businesses in Ethiopian cities. It promotes visibility for local entrepreneurs.",
      fullDescription:
        "WeatherWise is a feature-rich mobile weather application built with React Native. It provides accurate weather forecasts, interactive maps, severe weather alerts, and personalized weather insights. The app utilizes GPS for location detection, offers offline data caching, and includes customizable weather widgets for enhanced user experience.",
      date: "Jul 2024",
      duration: "1.5 months",
      teamSize: "Solo Project",
      role: "Frontend Developer & Project Lead",
      techStack: ["React", "Next.js", "Node.js", "MongoDB", "Leaflet.js", "Cloudinary"],
      features: [
        "Location-based business listings with filters",
        "Business profile creation & approval system",
        "Review and rating functionality",
        "Search and categorization by service type",
      ],
      challenges: [
        "Implementing accurate GPS location services",
        "Managing offline data synchronization",
        "Creating smooth map interactions on mobile",
        "Optimizing app performance and battery usage",
      ],
      demoUrl: "https://ethiobiz-directory.vercel.app",
      codeUrl: "https://github.com/mohe-12/weather-forecast-app",
      imageSrc: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&h=225&fit=crop&crop=center",
    },
    {
      title: "EduPlatform - Learning Management",
      category: "EdTech Platform",
      description:
        "Educational platform with course creation, video streaming, progress tracking, and certification system.",
      fullDescription:
        "EduPlatform is a comprehensive learning management system designed for educational institutions and online course creators. Built with Angular and Node.js, it provides tools for course creation, video streaming, student progress tracking, and certification management. The platform includes integrated video conferencing for live classes and comprehensive analytics for educators.",
      date: "Jun 2024",
      duration: "4 months",
      teamSize: "Team of 4",
      role: "Backend Lead Developer",
      techStack: ["Angular", "Node.js", "MySQL", "AWS S3", "WebRTC", "FFmpeg", "Socket.io", "JWT"],
      features: [
        "Course creation & management",
        "Video streaming & processing",
        "Student progress tracking",
        "Quiz & assessment system",
        "Live video conferencing",
        "Discussion forums",
        "Certificate generation",
        "Analytics & reporting",
      ],
      challenges: [
        "Building scalable video streaming infrastructure",
        "Implementing real-time video conferencing",
        "Creating efficient progress tracking system",
        "Managing large file uploads and processing",
      ],
      demoUrl: "https://eduplatform-lms.herokuapp.com",
      codeUrl: "https://github.com/mohe-12/learning-management-system",
      imageSrc: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=225&fit=crop&crop=center",
    },
  ]

  return (
    <section id="projects" className="py-20 relative scroll-mt-16">
      <SectionHeading title="Projects" subtitle="Click any project to explore in detail" />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className={cn(
              "opacity-0 transform translate-y-8 transition-all duration-700",
              mounted && "opacity-100 translate-y-0",
            )}
            style={{
              transitionDelay: mounted ? `${index * 150}ms` : "0ms",
            }}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              date={project.date}
              techStack={project.techStack}
              teamSize={project.teamSize}
              category={project.category}
              demoUrl={project.demoUrl}
              codeUrl={project.codeUrl}
              imageSrc={project.imageSrc}
              onClick={() => setSelectedProject(index)}
            />
          </div>
        ))}
      </div>

      {/* Project Modal */}
      {selectedProject !== null && (
        <ProjectModal
          project={projects[selectedProject]}
          isOpen={selectedProject !== null}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  )
}
