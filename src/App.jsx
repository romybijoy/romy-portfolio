import { useState } from "react";
import {
  ArrowRight,
  Check,
  ChevronDown,
  ExternalLink,
  Github,
  Globe2,
  Layers3,
  Mail,
  Menu,
  MessageCircle,
  Smartphone,
  X,
} from "lucide-react";

const githubUrl = "https://github.com/romybijoy"; 
const linkedinUrl = "https://www.linkedin.com/in/romy-rose-jimmy-b91407100"; 
const email = "romybijoy@gmail.com";

const services = [
  {
    icon: Layers3,
    title: "Full-Stack Web Applications",
    text: "Custom web applications with React and Spring Boot — from requirements and data modelling through to deployment.",
  },
  {
    icon: Globe2,
    title: "Backend & API Development",
    text: "REST API development, microservices, third-party integrations, database design, and backend optimisation.",
  },
  {
    icon: Smartphone,
    title: "Cross-Platform Mobile Apps",
    text: "React Native applications for iOS and Android, with backend and API integration.",
  },
  {
    icon: MessageCircle,
    title: "Application Enhancement",
    text: "Bug fixing, new features, API integrations, UI improvements, and performance work on existing applications.",
  },
];

const projects = [
  {
    name: "FarmKonnect", type: "Self Project · Full Stack · Microservices · AI Integration", category: "Featured",
    description: "A microservice-based agricultural communication platform designed for farmers and users, combining social features, real-time communication, notifications, media sharing, and AI-powered farmer-focused content.",
    tech: ["React","Java","Spring Boot","Microservices","Python","AI Integration","Kafka","Redis","WebSocket","WebRTC","MySQL","MongoDB","Docker","Firebase"],
    features: ["Farmer-focused AI content using Python","Posts, comments, likes, shares and saves","Image and video stories","Group and private messaging","Real-time notifications","Audio/video calling and presence tracking"],
    github: "https://github.com/romybijoy"
  },
  {
    name: "ShopNest", type: "Self Project · Full Stack · E-Commerce", category: "Featured",
    description: "A full-stack e-commerce application with a modern React storefront and Spring Boot backend, focused on secure authentication, role-based access and protected payment data.",
    tech: ["React","Vite","Java","Spring Boot","MySQL","JWT","OAuth2","RBAC","AES"],
    features: ["JWT and OAuth2 authentication","Role-based access control","Modern React storefront","Spring Boot REST APIs","AES-encrypted payment data"],
    github: "https://github.com/romybijoy/ShopNest"
  },
  {
    name: "RaiserBuddy", type: "Self Project · Full Stack · E-Commerce", category: "Featured",
    description: "An e-commerce platform connecting farmers directly with customers, allowing farmers to sell products while customers discover and purchase natural and farm-based products.",
    tech: ["React","Java","Spring Boot","MySQL"],
    features: ["Farmer product listing and management","Customer product browsing and discovery","Shopping and order workflows","Separate farmer and customer flows","Responsive mobile-first interface"],
    github: "https://github.com/romybijoy"
  },
  {
    name: "TaskFlow", type: "Self Project · Full Stack · Task Management", category: "Self Project",
    description: "A full-stack task management application built with React, Spring Boot and MySQL, with JWT authentication and secure user workflows.",
    tech: ["React","Vite","Java","Spring Boot","MySQL","JWT"],
    features: ["JWT authentication","Task CRUD operations","React frontend","Spring Boot REST API","MySQL database integration"],
    github: "https://github.com/romybijoy/task-manager"
  },
  {
    name: "LibraryOS", type: "Self Project · Full Stack · Library Management", category: "Self Project",
    description: "A full-stack Library Management application with a Spring Boot REST API backend and React frontend for managing library resources.",
    tech: ["React","Java","Spring Boot","REST API"],
    features: ["Book management","React frontend","Spring Boot REST API","Frontend/backend integration"],
    github: "https://github.com/romybijoy/library-app"
  },
  {
    name: "Ewire", type: "Employer Project · Private", category: "Professional",
    description: "A virtual banking and prepaid-card platform involving core banking migration and integration with an Open Loop prepaid-card system.",
    tech: ["Java 8","Spring Boot","Hibernate","MySQL","JSP","Tomcat"],
    features: ["Core banking migration and integration","Client API integration","Code optimisation","Structured logging for testing and troubleshooting"]
  },
  {
    name: "Quik Pharma", type: "Employer Project · Private", category: "Professional",
    description: "An online ordering platform designed for pharma distributors, pharmacies, and patients across web and mobile.",
    tech: ["React","React Native"],
    features: ["Web and mobile application modules","Role-specific application flows","Real-world pharma workflow analysis","Key UI component development"]
  },
  {
    name: "EasyBin", type: "Employer Project · Private", category: "Professional",
    description: "A waste-management platform focused on reverse logistics and Extended Producer Responsibility reporting.",
    tech: ["React","React Native","Node.js","Express.js"],
    features: ["Web and mobile application modules","RESTful API development","Waste-management workflows","Frontend and backend integration"]
  },
  {
    name: "saleStrait", type: "Employer Project · Private", category: "Professional",
    description: "A multi-channel direct sales and marketing platform focused on commission management.",
    tech: ["Java 8","Spring Boot","Hibernate","MySQL","Angular","Tomcat"],
    features: ["REST API development and support","Java/Spring Boot backend","MySQL and Hibernate integration","Angular frontend contribution"]
  }
];

const skills = {
  Frontend: ["React","React Native","Angular","JavaScript","HTML","CSS","Tailwind CSS"],
  Backend: ["Java","Spring Boot","Hibernate","Node.js","Express.js","REST APIs","Python"],
  "AI & Architecture": ["AI Integration","Microservices","gRPC","Kafka","Redis"],
  "Databases & Real-time": ["MySQL","MongoDB","H2","WebSocket","WebRTC"],
  "Tools & Infrastructure": ["Docker","Git","GitHub","Firebase","Maven","Postman"]
};

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showAll, setShowAll] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  const displayedProjects = showAll ? projects : projects.slice(0, 5);

  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-50 text-slate-800">
      <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 lg:px-8">
          <button onClick={() => scrollTo("home")} className="font-display text-lg font-bold tracking-tight text-slate-950">
            Romy<span className="text-blue-600">.</span>
          </button>

          <nav className="hidden items-center gap-7 text-sm font-semibold text-slate-600 md:flex">
            {[
              ["About", "about"],
              ["Services", "services"],
              ["Projects", "projects"],
              ["Skills", "skills"],
              ["Contact", "contact"],
            ].map(([label, id]) => (
              <button key={id} onClick={() => scrollTo(id)} className="transition hover:text-blue-600">
                {label}
              </button>
            ))}
          </nav>

          <button
            onClick={() => scrollTo("contact")}
            className="hidden rounded-full bg-slate-950 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-blue-600 md:block"
          >
            Hire Me
          </button>

          <button
            aria-label="Open menu"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-lg p-2 text-slate-700 md:hidden"
          >
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </div>

        {mobileOpen && (
          <div className="border-t border-slate-100 bg-white px-5 py-4 md:hidden">
            {[
              ["About", "about"],
              ["Services", "services"],
              ["Projects", "projects"],
              ["Skills", "skills"],
              ["Contact", "contact"],
            ].map(([label, id]) => (
              <button key={id} onClick={() => scrollTo(id)} className="block w-full py-3 text-left font-semibold text-slate-700">
                {label}
              </button>
            ))}
          </div>
        )}
      </header>

      <main>
        <section id="home" className="grid-bg relative">
          <div className="mx-auto grid max-w-6xl gap-14 px-5 py-24 lg:grid-cols-[1.25fr_.75fr] lg:px-8 lg:py-32">
            <div className="reveal">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
                <span className="h-2 w-2 rounded-full bg-blue-600" />
                Available for freelance projects
              </div>

              <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-blue-600">
                Java + React Full Stack Developer
              </p>

              <h1 className="font-display max-w-4xl text-5xl font-bold leading-[1.02] tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
                I build software that turns ideas into{" "}
                <span className="text-blue-600">working products.</span>
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">
                I build modern web and mobile applications for startups and growing businesses — from responsive React interfaces to Java/Spring Boot APIs and scalable backend systems.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <button
                  onClick={() => scrollTo("projects")}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3.5 font-bold text-white transition hover:bg-blue-600"
                >
                  See My Work <ArrowRight size={18} />
                </button>
                <button
                  onClick={() => scrollTo("contact")}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3.5 font-bold text-slate-800 transition hover:border-blue-400 hover:text-blue-600"
                >
                  Start a Project
                </button>
              </div>

              <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-slate-500">
                <span>5+ years experience</span>
                <span>•</span>
                <span>Full-stack development</span>
                <span>•</span>
                <span>Remote</span>
              </div>
            </div>

            <div className="flex items-end lg:justify-end">
              <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-7 shadow-soft">
                <div className="mb-8 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Core stack</p>
                    <p className="mt-1 font-display text-xl font-bold text-slate-950">Build. Integrate. Deliver.</p>
                  </div>
                  <div className="rounded-2xl bg-blue-50 p-3 text-blue-600">
                    <Layers3 size={23} />
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["React", "Java", "Spring Boot", "Node.js", "React Native", "Angular", "Python", "MySQL", "MongoDB", "Docker", "Kafka"].map((item) => (
                    <span key={item} className="rounded-full bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700">
                      {item}
                    </span>
                  ))}
                </div>
                <div className="mt-8 border-t border-slate-100 pt-6">
                  <p className="text-sm leading-6 text-slate-500">
                    From business websites and e-commerce platforms to APIs and microservice applications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="bg-white">
          <div className="mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-28">
            <div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr]">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">About me</p>
                <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-slate-950">A developer who thinks beyond the code.</h2>
              </div>
              <div className="space-y-5 text-lg leading-8 text-slate-600">
                <p>
                  I turn business requirements into practical, reliable, and user-friendly software solutions.
                </p>
                <p>
                  My professional experience spans virtual banking, pharmaceuticals, waste management, sales and commission platforms, while my full-stack projects include agriculture-focused communication and e-commerce applications.
                </p>
                <p>
                  I work across the stack — frontend, backend, APIs, databases, integrations, and application architecture — so a feature can move from an idea to a working implementation with less coordination overhead.
                </p>
                <div className="grid gap-4 pt-3 sm:grid-cols-2">
                  {[
                    "5+ years of development experience",
                    "Frontend + backend capability",
                    "Professional employer projects",
                    "Agile / Scrum experience",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4 text-sm font-semibold text-slate-700">
                      <Check className="mt-0.5 shrink-0 text-blue-600" size={18} />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="bg-slate-50">
          <div className="mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-28">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">Services</p>
              <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-slate-950">What I can build for you.</h2>
              <p className="mt-4 text-lg leading-7 text-slate-600">
                Flexible development support for new products, business applications, and existing systems.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {services.map(({ icon: Icon, title, text }) => (
                <article key={title} className="card-hover rounded-3xl border border-slate-200 bg-white p-7">
                  <div className="mb-6 inline-flex rounded-2xl bg-blue-50 p-3.5 text-blue-600">
                    <Icon size={24} />
                  </div>
                  <h3 className="font-display text-xl font-bold text-slate-950">{title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="bg-white">
          <div className="mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-28">
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div className="max-w-2xl">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">Selected work</p>
                <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-slate-950">Projects that show how I build.</h2>
                <p className="mt-4 text-lg leading-7 text-slate-600">
                  My self projects include public GitHub repositories. Professional employer projects are private and are shown as experience highlights.
                </p>
              </div>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              {displayedProjects.map((project, index) => (
                <article
                  key={project.name}
                  className={`card-hover overflow-hidden rounded-3xl border border-slate-200 bg-white ${index < 2 ? "lg:min-h-[510px]" : ""}`}
                >
                  <div className="border-b border-slate-100 bg-slate-950 p-7 text-white">
                    <div className="flex items-start justify-between gap-5">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-blue-300">{project.category}</p>
                        <h3 className="mt-2 font-display text-3xl font-bold">{project.name}</h3>
                      </div>
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="rounded-xl border border-white/15 p-2.5 transition hover:bg-white/10"
                          aria-label={`${project.name} GitHub`}
                        >
                          <Github size={20} />
                        </a>
                      )}
                    </div>
                    <p className="mt-2 text-sm font-medium text-slate-300">{project.type}</p>
                  </div>

                  <div className="p-7">
                    <p className="leading-7 text-slate-600">{project.description}</p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span key={tech} className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-bold text-slate-600">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="mt-7 border-t border-slate-100 pt-6">
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Highlights</p>
                      <ul className="mt-4 space-y-3">
                        {project.features.map((feature) => (
                          <li key={feature} className="flex gap-3 text-sm leading-6 text-slate-600">
                            <Check className="mt-1 shrink-0 text-blue-600" size={16} />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-8 text-center">
              <button
                onClick={() => setShowAll(!showAll)}
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-3 font-bold text-slate-700 transition hover:border-blue-400 hover:text-blue-600"
              >
                {showAll ? "Show Featured Projects" : "View All Projects"}
                <ChevronDown className={`transition ${showAll ? "rotate-180" : ""}`} size={18} />
              </button>
            </div>
          </div>
        </section>

        <section id="skills" className="bg-slate-50">
          <div className="mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-28">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">Technologies</p>
              <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-slate-950">Tools I work with.</h2>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {Object.entries(skills).map(([group, items]) => (
                <div key={group} className="rounded-3xl border border-slate-200 bg-white p-7">
                  <h3 className="font-display text-lg font-bold text-slate-950">{group}</h3>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {items.map((item) => (
                      <span key={item} className="rounded-full border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-600">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-28">
            <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">How I work</p>
                <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-slate-950">Clear process. Visible progress.</h2>
              </div>
              <div className="space-y-4">
                {[
                  ["01", "Understand", "Start with the business goal, users, requirements, and what success should look like."],
                  ["02", "Plan", "Define application flow, data model, technology approach, and visible delivery milestones."],
                  ["03", "Build", "Develop in short cycles with regular check-ins so working software appears early."],
                  ["04", "Test", "Validate functionality, edge cases, responsive behaviour, and requirements before delivery."],
                  ["05", "Deliver", "Prepare the application for deployment and support a smooth handover."],
                ].map(([num, title, text]) => (
                  <div key={num} className="grid grid-cols-[48px_110px_1fr] items-start gap-4 rounded-2xl border border-slate-200 p-5">
                    <span className="font-display text-sm font-bold text-blue-600">{num}</span>
                    <h3 className="font-bold text-slate-950">{title}</h3>
                    <p className="text-sm leading-6 text-slate-600">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-slate-950 text-white">
          <div className="mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-28">
            <div className="grid gap-10 lg:grid-cols-[1.25fr_.75fr] lg:items-end">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-300">Let's build something</p>
                <h2 className="mt-4 max-w-3xl font-display text-5xl font-bold tracking-tight sm:text-6xl">
                  Have an idea for a website or application?
                </h2>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                  Whether you need a business website, e-commerce platform, mobile app, REST API, or custom full-stack solution, let's discuss what you need.
                </p>
                <a
                  href={`mailto:${email}`}
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 font-bold text-slate-950 transition hover:bg-blue-500 hover:text-white"
                >
                  <Mail size={18} /> Start a Conversation
                </a>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-7">
                <p className="text-sm font-bold uppercase tracking-wider text-slate-400">Connect</p>
                <div className="mt-5 space-y-3">
                  <a href={`mailto:${email}`} className="flex items-center gap-3 rounded-2xl bg-white/5 p-4 transition hover:bg-white/10">
                    <Mail size={19} className="text-blue-300" />
                    <span className="font-semibold">{email}</span>
                  </a>
                  <a href={linkedinUrl} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-2xl bg-white/5 p-4 transition hover:bg-white/10">
                    <ExternalLink size={19} className="text-blue-300" />
                    <span className="font-semibold">LinkedIn</span>
                  </a>
                  <a href={githubUrl} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-2xl bg-white/5 p-4 transition hover:bg-white/10">
                    <Github size={19} className="text-blue-300" />
                    <span className="font-semibold">GitHub</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-20 border-t border-white/10 pt-6 text-sm text-slate-500">
              © {new Date().getFullYear()} Romy Rose Jimmy. Built with React.
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;