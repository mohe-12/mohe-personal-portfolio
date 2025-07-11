"use client"
import type { FormEvent } from "react"
import type React from "react"
import { useState, useEffect } from "react"
import { MapPin, Phone, Mail, Linkedin, Github, Send } from "lucide-react"
import SectionHeading from "@/components/ui/section-heading"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"

export default function Contact() {
  const [mounted, setMounted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", message: "" })
    // Show success message
    alert("Message sent successfully!")
  }

  const contactInfo = [
    {
      icon: <MapPin className="h-5 w-5 text-teal-400" />,
      label: "Location",
      value: "Bale Robe, Ethiopia",
    },
    {
      icon: <Phone className="h-5 w-5 text-teal-400" />,
      label: "Phone",
      value: "+251914203741",
    },
    {
      icon: <Mail className="h-5 w-5 text-teal-400" />,
      label: "Email",
      value: "mohehasen690@gmail.com",
    },
    {
      icon: <Linkedin className="h-5 w-5 text-teal-400" />,
      label: "LinkedIn",
      value: "linkedin.com/in/mohammed-hasen",
      link: "https://linkedin.com/in/mohammed-hasen",
    },
    {
      icon: <Github className="h-5 w-5 text-teal-400" />,
      label: "GitHub",
      value: "github.com/mohe-12",
      link: "https://github.com/mohe-12",
    },
  ]

const [result, setResult] = useState("");
  const onSubmit = async (event: FormEvent) => {
  event.preventDefault();
  setResult("Sending...");

  const formDataToSend = new FormData();
  formDataToSend.append("access_key", "39a84a0f-8c8e-4242-94cf-c85e2b312c65");
  formDataToSend.append("name", formData.name);
  formDataToSend.append("email", formData.email);
  formDataToSend.append("message", formData.message);

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formDataToSend,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully!");
      setFormData({ name: "", email: "", message: "" });
    } else {
      console.log("Error", data);
      setResult(data.message || "Submission failed.");
    }
  } catch (error) {
    console.error("Submission error:", error);
    setResult("Something went wrong. Please try again.");
  }
};
  
  return (
    <section id="contact" className="py-20 relative scroll-mt-16">
      <SectionHeading title="Contact Me" subtitle="Let's get in touch" />

      <div className="grid md:grid-cols-2 gap-10">
        <div
          className={cn(
            "space-y-6 opacity-0 transform -translate-x-8 transition-all duration-1000",
            mounted && "opacity-100 translate-x-0",
          )}
        >
          <div className="bg-gray-900/30 backdrop-blur-sm p-6 rounded-xl border border-gray-800/50">
            <h3 className="text-xl font-semibold text-gray-200 mb-4">Contact Information</h3>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-1">{info.icon}</div>
                  <div>
                    <h4 className="text-sm text-gray-400">{info.label}</h4>
                    {info.link ? (
                      <a
                        href={info.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-teal-400 transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-gray-300">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          className={cn(
            "opacity-0 transform translate-x-8 transition-all duration-1000 delay-300",
            mounted && "opacity-100 translate-x-0",
          )}
        >
          <form
            onSubmit={onSubmit}
            className="bg-gray-900/30 backdrop-blur-sm p-6 rounded-xl border border-gray-800/50"
          >
            <h3 className="text-xl font-semibold text-gray-200 mb-4">Send Me a Message</h3>
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="text-sm text-gray-400 mb-1 block">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="bg-gray-800/50 border-gray-700 focus:border-teal-500 focus:ring-teal-500/20"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-sm text-gray-400 mb-1 block">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  required
                  className="bg-gray-800/50 border-gray-700 focus:border-teal-500 focus:ring-teal-500/20"
                />
              </div>
              <div>
                <label htmlFor="message" className="text-sm text-gray-400 mb-1 block">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message"
                  required
                  className="bg-gray-800/50 border-gray-700 focus:border-teal-500 focus:ring-teal-500/20 min-h-[120px]"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-teal-500 to-teal-400 text-gray-900 hover:shadow-[0_0_15px_rgba(45,212,191,0.5)] transition-all duration-300"
              >
                <Send className="h-4 w-4 mr-2" />
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
