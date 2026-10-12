"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowUpRight, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Services", href: "#services" },
  { name: "Work", href: "#projects" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header className={cn("fixed inset-x-0 top-0 z-50 transition-all duration-300", scrolled && "border-b border-border/70 bg-background/80 backdrop-blur-xl")}>
      <nav className="container mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8" aria-label="Primary navigation">
        <Link href="#hero" className="flex items-center gap-3 font-semibold tracking-tight" onClick={() => setIsOpen(false)}>
          <span className="flex size-9 items-center justify-center rounded-xl bg-primary font-mono text-sm text-primary-foreground">MH</span>
          <span className="hidden sm:inline">Mohammed Hasen</span>
        </Link>
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => <Link key={item.name} href={item.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">{item.name}</Link>)}
          <Link href="#contact" className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors hover:border-primary/60 hover:text-primary">Let&apos;s talk <ArrowUpRight data-icon="inline-end" /></Link>
        </div>
        <button type="button" aria-label={isOpen ? "Close menu" : "Open menu"} aria-expanded={isOpen} className="rounded-lg p-2 text-muted-foreground hover:bg-muted hover:text-foreground md:hidden" onClick={() => setIsOpen(!isOpen)}>{isOpen ? <X /> : <Menu />}</button>
      </nav>
      {isOpen && <div className="border-b border-border bg-background px-5 pb-5 md:hidden"><div className="container mx-auto flex max-w-7xl flex-col gap-1">{navItems.map((item) => <Link key={item.name} href={item.href} className="rounded-lg px-3 py-3 text-muted-foreground hover:bg-muted hover:text-foreground" onClick={() => setIsOpen(false)}>{item.name}</Link>)}<Link href="#contact" className="mt-2 rounded-lg bg-primary px-3 py-3 text-center font-semibold text-primary-foreground" onClick={() => setIsOpen(false)}>Let&apos;s talk</Link></div></div>}
    </header>
  )
}
