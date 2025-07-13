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
        "A robust academic management system designed for Ethiopian universities, this platform allows students to view grades, schedules, announcements, and assignments, while instructors can upload course materials, manage class rosters, and post updates. It streamlines academic workflows and fosters better communication between students, instructors, and administrators",
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
     imageSrc: "images/education.jpg",
     codeUrl: "https://github.com/mohe-12"
    },
    {
      title: "Smart QR-Based Attendance System",
      category: "Full-Stack ",
      description:
        "A smart attendance tracking system where instructors generate unique QR codes, and students scan them to mark attendance. Prevents fraud and manual errors.",
      fullDescription:
        "An automated attendance tracking solution using dynamic QR codes and mobile scanning, this app enables instructors to generate unique session-based codes while students scan them to check in. The system prevents fraud, logs attendance in real time, and allows exportable reports, reducing manual errors and saving time.",
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
      imageSrc: "/images/qrcode.png",
      codeUrl: "https://github.com/mohe-12"
  
    },
    {
      title: "Ethiopian Cultural Event Manager",
      category: "Backend",
      description:
        "An event listing and RSVP platform tailored to cultural, educational, and creative events in Ethiopia. Users can register, browse, or manage events.",
      fullDescription:
        "A full-featured event management web app where users can browse, search, and RSVP to cultural, academic, or entertainment events across Ethiopia. Organizers can publish and manage events through an admin dashboard, while attendees receive real-time updates and email reminders, making cultural engagement more accessible.",
      date: "Sep 2023",
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
      imageSrc: "/images/culture.png",
      demoUrl: "https://habesha-event-builder.lovable.app/",
      codeUrl: "https://github.com/mohe-12"
    },
    {
      title: "Afan Oromo-English Dictionary App",
      category: "Web App",
      description:
        "A lightweight web app for translating words between Afan Oromo and English, including audio pronunciation and sentence usage examples. Designed to help language learners.",
      fullDescription:
        "A bilingual web application that provides real-time Afan Oromo-English translations, audio pronunciations, usage examples, and offline access through a Progressive Web App. It is designed to support language learners, students, and travelers by offering a fast, easy, and reliable language tool that works even without internet.",
      date: "Aug 2023",
      duration: "1 months",
      teamSize: "Team of 6",
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
      imageSrc: "/images/dictionary.png",
      demoUrl: "https://melodious-pixie-61e3aa.netlify.app/",
      codeUrl: "https://github.com/yourusername/bhu-hospital-management-system"
    },
    {
      title: "Local Business Directory App",
      category: "Mobile App",
      description:
        "A web and mobile-friendly directory app to discover, rate, and review small businesses in Ethiopian cities. It promotes visibility for local entrepreneurs.",
      fullDescription:
        "This platform connects users with local Ethiopian businesses by providing a searchable, filterable directory complete with categories, maps, and user ratings. Business owners can claim and manage their profiles, helping them gain visibility and credibility while supporting digital transformation in underserved regions.",
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
      imageSrc: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&h=225&fit=crop&crop=center",
      codeUrl: "https://github.com/mohe-12"
    },
    {
      title: "BHU Hospital Management System",
      category: "Full-Stack",
      description:
        " Hospital management system for BHU, enabling patient registration, appointment scheduling, and medical record management. Streamlines healthcare operations.",
      fullDescription:
        " A comprehensive hospital management system designed for BHU, this application allows patients to register, book appointments, and access their medical records online. It simplifies healthcare operations by providing a centralized platform for patient management, appointment scheduling, and medical history tracking, enhancing the efficiency of healthcare delivery.",
      date: "Jun 2023",
      duration: "1 months",
      teamSize: "Team of 6",
      role: "Full-stack Developer",
      techStack: ["HTML", "JavaScript", "MySQL", "JWT", "CSS", ],
      features: [
         "Patient registration and profile management",
         "Online appointment booking and scheduling",
         "Doctor and department management",
         "Medical record storage and access",
         "Prescription and medication tracking",
         "Automated billing and invoice generation",
         "Admin dashboard with analytics and reporting",
         "Role-based access control for staff, doctors, and patients"
      ],

      challenges: [
         "Ensuring data privacy and security for sensitive patient information",
         "Designing an intuitive UI for both medical staff and patients",
         "Integrating appointment logic with doctor availability and calendar sync",
         "Managing concurrent access and edits to patient records",
         "Maintaining performance with a growing number of records and users"
     ],

      imageSrc: "/images/bhu.png",
      codeUrl: "https://github.com/mohe-12"
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
