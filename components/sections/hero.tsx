"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowDownRight, ArrowRight, Download, Github, Linkedin, MapPin } from "lucide-react"

const roles = ["full-stack developer", "product-minded builder", "frontend specialist"]

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => setCurrentRole((role) => (role + 1) % roles.length), 3200)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="hero" className="relative flex min-h-[calc(100vh-4rem)] items-center py-24 lg:py-32">
      <div className="grid w-full items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="max-w-3xl">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3 py-1.5 text-sm text-primary">
            <span className="size-2 animate-pulse rounded-full bg-primary" />
            Available for select projects
          </div>
          <p className="mb-5 flex items-center gap-3 text-sm font-medium uppercase tracking-[0.22em] text-muted-foreground">
            <span className="h-px w-8 bg-primary" />
            Hello, I&apos;m Mohammed
          </p>
          <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-[-0.06em] sm:text-7xl lg:text-8xl">
            I build digital products that <span className="text-primary">feel effortless.</span>
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-muted-foreground sm:text-xl">
            A developer focused on clear interfaces, reliable systems, and useful technology. Currently, I&apos;m a <span className="font-medium text-foreground">{roles[currentRole]}</span>.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href="#projects" className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5">
              Explore my work <ArrowRight className="transition-transform group-hover:translate-x-1" data-icon="inline-end" />
            </Link>
            <a href="/files/sample-resume.pdf" download className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card/50 px-6 py-3.5 font-semibold text-foreground transition-colors hover:border-primary/50 hover:bg-card">
              <Download data-icon="inline-start" /> Download résumé
            </a>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2"><MapPin className="text-primary" data-icon="inline-start" /> Bale Robe, Ethiopia</span>
            <a href="https://github.com/mohe-12" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-foreground"><Github data-icon="inline-start" /> GitHub</a>
            <a href="https://linkedin.com/in/mohammed-hasen" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-foreground"><Linkedin data-icon="inline-start" /> LinkedIn</a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:justify-self-end">
          <div className="absolute -inset-6 rounded-[2rem] bg-primary/10 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card p-3 shadow-2xl shadow-black/30">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.35rem] bg-muted">
              <Image src="/images/photo-header.jpg" alt="Mohammed Hasen, full-stack developer" fill priority sizes="(max-width: 1024px) 80vw, 420px" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-sm text-primary">01 / 04</p>
                <p className="mt-1 text-2xl font-semibold tracking-tight">Build with purpose.</p>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-5 -left-5 flex items-center gap-3 rounded-2xl border border-border bg-card/95 px-4 py-3 shadow-xl backdrop-blur">
            <span className="flex size-10 items-center justify-center rounded-xl bg-primary/15 text-primary"><ArrowDownRight /></span>
            <div><p className="text-xs text-muted-foreground">Specialized in</p><p className="font-medium">Web apps &amp; systems</p></div>
          </div>
        </div>
      </div>
    </section>
  )
}
