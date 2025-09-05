"use client"
import { useEffect, useRef, useState } from "react"
import {
  SiNodedotjs, SiPython, SiDotnet, SiAngular, SiReact, SiTypescript,
  SiJavascript, SiVuedotjs, SiDocker, SiPostgresql,
  SiRubyonrails, SiKubernetes, SiGraphql, SiNextdotjs, SiRedis,
  SiHtml5, SiCss3, SiGit, SiMongodb,
  SiFirebase, SiTailwindcss, SiJenkins, SiElasticsearch,
  SiNginx, SiApache, SiSass, SiBootstrap, SiWebpack, SiBabel,
  SiFlutter, SiPhp, SiGo, SiSwift, SiRust, SiAmazon
} from "react-icons/si"

type BadgeIcon =
  | "rails" | "nodejs" | "python" | "dotnet" | "angular" | "react" | "typescript"
  | "javascript" | "vue" | "aws" | "docker" | "postgresql" | "kubernetes"
  | "graphql" | "nextjs" | "redis" | "html" | "css" | "git" | "mongodb"
  | "firebase" | "tailwind" | "jenkins" | "elasticsearch"
  | "nginx" | "apache" | "sass" | "bootstrap" | "webpack" | "babel"
  | "flutter" | "php" | "go" | "swift" | "rust";

export default function TechBubbles() {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [mouse, setMouse] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const [time, setTime] = useState(0)

  // Track mouse position
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        setMouse({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        })
      }
    }

    if (isHovered) {
      window.addEventListener("mousemove", handleMouseMove)
    }
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [isHovered])

  // Idle floating effect
  useEffect(() => {
    const interval = setInterval(() => setTime(t => t + 0.02), 30)
    return () => clearInterval(interval)
  }, [])

  const techIcons: { icon: BadgeIcon; label: string }[] = [
    { icon: "nodejs", label: "Node.js" },
    { icon: "python", label: "Python" },
    { icon: "dotnet", label: ".NET" },
    { icon: "angular", label: "Angular" },
    { icon: "react", label: "React" },
    { icon: "typescript", label: "TypeScript" },
    { icon: "javascript", label: "JavaScript" },
    { icon: "vue", label: "Vue.js" },
    { icon: "aws", label: "AWS" },
    { icon: "docker", label: "Docker" },
    { icon: "postgresql", label: "PostgreSQL" },
    { icon: "rails", label: "Ruby on Rails" },
    { icon: "kubernetes", label: "Kubernetes" },
    { icon: "graphql", label: "GraphQL" },
    { icon: "nextjs", label: "Next.js" },
    { icon: "redis", label: "Redis" },
    { icon: "html", label: "HTML5" },
    { icon: "css", label: "CSS3" },
    { icon: "git", label: "Git" },
    { icon: "mongodb", label: "MongoDB" },
    { icon: "firebase", label: "Firebase" },
    { icon: "tailwind", label: "TailwindCSS" },
    { icon: "jenkins", label: "Jenkins" },
    { icon: "elasticsearch", label: "ElasticSearch" },
    { icon: "nginx", label: "Nginx" },
    { icon: "apache", label: "Apache" },
    { icon: "sass", label: "Sass" },
    { icon: "bootstrap", label: "Bootstrap" },
    { icon: "webpack", label: "Webpack" },
    { icon: "babel", label: "Babel" },
    { icon: "flutter", label: "Flutter" },
    { icon: "php", label: "PHP" },
    { icon: "go", label: "Go" },
    { icon: "swift", label: "Swift" },
    { icon: "rust", label: "Rust" }
  ]

  return (
    <section className="py-8 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">Technologies We Master</h2>
          <p className="text-sm sm:text-base text-slate-700 max-w-2xl mx-auto">
            Our expertise spans across modern technologies and frameworks to deliver cutting-edge solutions
          </p>
        </div>
        
        <div 
          ref={containerRef}
          className="relative h-[24rem] sm:h-[32rem] md:h-[40rem] lg:h-[44rem] bg-gradient-to-r from-slate-300 to-slate-100 rounded-xl sm:rounded-2xl border border-slate-200 shadow-lg overflow-hidden cursor-none"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Subtle grid overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:24px_24px]" />

          {/* Floating tech bubbles */}
          {techIcons.map((tech, index) => {
            const baseX = 12 + (index % 6) * 14
            const baseY = 8 + Math.floor(index / 6) * 14  // increased vertical spacing

            // Default idle floating
            let offsetX = Math.sin(time + index) * 6
            let offsetY = Math.cos(time + index * 0.5) * 6

            // Push away effect on hover
            if (isHovered) {
              const distance = Math.sqrt(
                Math.pow(mouse.x - baseX * 10, 2) + Math.pow(mouse.y - baseY * 10, 2)
              )
              const maxDistance = 150
              const force = Math.max(0, (maxDistance - distance) / maxDistance)
              const angle = Math.atan2(mouse.y - baseY * 10, mouse.x - baseX * 10)
              offsetX += Math.cos(angle + Math.PI) * force * 20
              offsetY += Math.sin(angle + Math.PI) * force * 20
            }

            return (
              <div
                key={tech.icon}
                className="absolute transition-transform duration-700 ease-in-out"
                style={{
                  left: `${baseX}%`,
                  top: `${baseY}%`,
                  transform: `translate(${offsetX}px, ${offsetY}px)`
                }}
              >
                <div className="group relative">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-white/90 backdrop-blur-sm rounded-full shadow-md border border-slate-200 flex items-center justify-center transition-transform duration-300 hover:scale-110 hover:shadow-2xl">
                    {badgeIcon(tech.icon)}
                  </div>
                  <div className="absolute -bottom-6 sm:-bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-slate-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                      {tech.label}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
          
          {/* Cursor indicator */}
          {isHovered && (
            <div 
              className="absolute w-8 h-8 bg-blue-400/20 rounded-full border-2 border-blue-400 pointer-events-none transition-all duration-100"
              style={{ left: mouse.x - 16, top: mouse.y - 16 }}
            />
          )}
        </div>
      </div>
    </section>
  )
}

function badgeIcon(icon: BadgeIcon): React.ReactElement | undefined {
    const base = "w-5 h-5"
    switch (icon) {
      case "nodejs": return <SiNodedotjs className={base} color="#83CD29" />
      case "python": return <SiPython className={base} color="#3776AB" />
      case "dotnet": return <SiDotnet className={base} color="#512BD4" />
      case "angular": return <SiAngular className={base} color="#DD0031" />
      case "react": return <SiReact className={base} color="#61DAFB" />
      case "typescript": return <SiTypescript className={base} color="#3178C6" />
      case "javascript": return <SiJavascript className={base} color="#F7DF1E" />
      case "vue": return <SiVuedotjs className={base} color="#41B883" />
      case "docker": return <SiDocker className={base} color="#2496ED" />
      case "postgresql": return <SiPostgresql className={base} color="#336791" />
      case "rails": return <SiRubyonrails className={base} color="#CC0000" />
      case "kubernetes": return <SiKubernetes className={base} color="#326CE5" />
      case "graphql": return <SiGraphql className={base} color="#E10098" />
      case "nextjs": return <SiNextdotjs className={base} color="black" />
      case "redis": return <SiRedis className={base} color="#D82C20" />
      case "html": return <SiHtml5 className={base} color="#E34F26" />
      case "css": return <SiCss3 className={base} color="#1572B6" />
      case "git": return <SiGit className={base} color="#F05032" />
      case "mongodb": return <SiMongodb className={base} color="#47A248" />
      case "firebase": return <SiFirebase className={base} color="#FFCA28" />
      case "tailwind": return <SiTailwindcss className={base} color="#06B6D4" />
      case "jenkins": return <SiJenkins className={base} color="#D24939" />
      case "elasticsearch": return <SiElasticsearch className={base} color="#005571" />
      case "nginx": return <SiNginx className={base} color="#009639" />
      case "apache": return <SiApache className={base} color="#D22128" />
      case "sass": return <SiSass className={base} color="#CC6699" />
      case "bootstrap": return <SiBootstrap className={base} color="#7952B3" />
      case "webpack": return <SiWebpack className={base} color="#8DD6F9" />
      case "babel": return <SiBabel className={base} color="#F9DC3E" />
      case "flutter": return <SiFlutter className={base} color="#02569B" />
      case "php": return <SiPhp className={base} color="#777BB4" />
      case "go": return <SiGo className={base} color="#00ADD8" />
      case "swift": return <SiSwift className={base} color="#FA7343" />
      case "rust": return <SiRust className={base} color="#000000" />
      case "aws": return <SiAmazon className={base} color="#FF9900" />
    }
  }
