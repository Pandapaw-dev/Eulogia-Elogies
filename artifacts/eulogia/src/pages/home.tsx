import { motion } from "framer-motion";
import { ArrowRight, Building2, Map, HardHat, Compass, Briefcase } from "lucide-react";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <img 
            src="/images/hero.png" 
            alt="Brutalist Architecture" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container relative z-20 px-6 md:px-12 mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-[1.1]">
              Designing spaces that shape the future.
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl mb-10 font-sans font-light">
              Eulogia and Elogies Project. Abuja's premier architecture, urban planning, and development studio.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#projects" className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground text-sm uppercase tracking-widest transition-transform hover:-translate-y-1">
                View Projects
              </a>
              <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 border border-white/30 text-white text-sm uppercase tracking-widest transition-all hover:bg-white/10 hover:-translate-y-1">
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-background">
        <div className="container px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-sm font-sans tracking-[0.2em] text-primary uppercase mb-4">About the Studio</h2>
              <h3 className="text-4xl md:text-5xl text-foreground mb-8 leading-tight">
                We build Nigeria's future, one landmark at a time.
              </h3>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-muted-foreground text-lg mb-6 font-light leading-relaxed">
                Eulogia and Elogies Project is a multidisciplinary Nigerian firm headquartered in Abuja, specializing in architecture, urban planning, project management, construction, and property development.
              </p>
              <p className="text-muted-foreground text-lg font-light leading-relaxed mb-8">
                We do not just construct buildings — we shape the Nigerian landscape. Our work is grounded in rigour, local context, and an unwavering commitment to excellence. Every project is an opportunity to redefine what is possible in this country.
              </p>
              <a href="#contact" className="inline-flex items-center text-primary group uppercase tracking-widest text-xs">
                Partner with us <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-2" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 bg-secondary/30">
        <div className="container px-6 md:px-12">
          <div className="mb-20">
            <h2 className="text-sm font-sans tracking-[0.2em] text-primary uppercase mb-4">Our Disciplines</h2>
            <h3 className="text-4xl md:text-5xl text-foreground">Comprehensive Capabilities</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12">
            {[
              { icon: Building2, title: "Architecture", desc: "Monumental, uncompromising design that stands the test of time." },
              { icon: Map, title: "Urban Planning", desc: "Masterplanning spaces that foster community and growth." },
              { icon: HardHat, title: "Construction", desc: "Flawless execution handled with precision and care." },
              { icon: Compass, title: "Project Management", desc: "End-to-end oversight ensuring vision matches reality." },
              { icon: Briefcase, title: "Property Development", desc: "Strategic investments shaping the urban skyline." }
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="border-t border-border pt-8"
              >
                <service.icon className="w-8 h-8 text-primary mb-6 stroke-[1.5]" />
                <h4 className="text-2xl mb-4 font-serif">{service.title}</h4>
                <p className="text-muted-foreground font-light">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="py-32 bg-background">
        <div className="container px-6 md:px-12 mb-20">
          <h2 className="text-sm font-sans tracking-[0.2em] text-primary uppercase mb-4">Selected Works</h2>
          <h3 className="text-4xl md:text-5xl text-foreground">Featured Projects</h3>
        </div>

        <div className="flex flex-col gap-32">
          {[
            { img: "project-1.png", name: "Maitama Heights", loc: "Maitama, Abuja", year: "2024", desc: "A landmark mixed-use tower redefining Abuja's most prestigious district." },
            { img: "project-2.png", name: "Asokoro Gardens", loc: "Asokoro, Abuja", year: "2023", desc: "A luxury residential estate integrating tropical landscaping into modern living." },
            { img: "project-3.png", name: "Wuse Commercial Plaza", loc: "Wuse II, Abuja", year: "2023", desc: "A vibrant commercial hub anchoring the heart of Wuse's business corridor." },
            { img: "project-4.png", name: "CBD Office Campus", loc: "Central Business District, Abuja", year: "2025", desc: "A contemporary glass campus setting a new standard for corporate architecture in Nigeria." }
          ].map((project, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
              className="relative w-full h-[70vh] md:h-[90vh] group overflow-hidden"
            >
              <div className="absolute inset-0 bg-black/40 z-10 transition-opacity duration-700 group-hover:bg-black/20" />
              <img 
                src={`/images/${project.img}`} 
                alt={project.name} 
                className="w-full h-full object-cover transition-transform duration-[20s] group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 p-8 md:p-16 z-20 w-full bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                <div className="container px-0 md:px-12">
                  <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                      <p className="text-primary font-sans tracking-widest text-xs uppercase mb-3">{project.loc} — {project.year}</p>
                      <h4 className="text-4xl md:text-6xl text-white mb-4">{project.name}</h4>
                      <p className="text-white/70 max-w-xl font-light text-lg">{project.desc}</p>
                    </div>
                    <button className="w-14 h-14 rounded-full border border-white/30 flex items-center justify-center text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-black">
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-32 bg-secondary/30">
        <div className="container px-6 md:px-12">
          <div className="mb-20 text-center">
            <h2 className="text-sm font-sans tracking-[0.2em] text-primary uppercase mb-4">Methodology</h2>
            <h3 className="text-4xl md:text-5xl text-foreground">How We Build</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {[
              { num: "01", title: "Consultation", desc: "Understanding the vision, constraints, and aspirations." },
              { num: "02", title: "Planning & Design", desc: "Rigorous architectural drafting and urban strategizing." },
              { num: "03", title: "Development", desc: "Executing the vision with uncompromising quality." },
              { num: "04", title: "Delivery", desc: "Handover of a monumental, generational asset." }
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative"
              >
                <div className="text-7xl font-serif text-border/40 absolute -top-8 -left-4 z-0 pointer-events-none">{step.num}</div>
                <div className="relative z-10 pt-4 border-t-2 border-primary w-12 mb-6"></div>
                <h4 className="text-2xl mb-4 relative z-10">{step.title}</h4>
                <p className="text-muted-foreground font-light relative z-10">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-background border-t border-border">
        <div className="container px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-sm font-sans tracking-[0.2em] text-primary uppercase mb-4">Inquiries</h2>
              <h3 className="text-4xl md:text-5xl text-foreground mb-8">Start a Conversation</h3>
              <p className="text-muted-foreground text-lg font-light mb-12 max-w-md">
                We are selective with our partnerships. Reach out to discuss how we can shape your next ambitious project in Nigeria.
              </p>

              <div className="space-y-6 text-foreground font-light">
                <div>
                  <p className="text-sm text-primary uppercase tracking-widest mb-1">Email</p>
                  <a href="mailto:info@eulogiaproject.ng" className="text-xl hover:text-primary transition-colors">info@eulogiaproject.ng</a>
                </div>
                <div>
                  <p className="text-sm text-primary uppercase tracking-widest mb-1">Phone</p>
                  <a href="tel:+2348000000000" className="text-xl hover:text-primary transition-colors">+234 800 000 0000</a>
                </div>
                <div>
                  <p className="text-sm text-primary uppercase tracking-widest mb-1">Office</p>
                  <p className="text-xl">Maitama District, Abuja, FCT, Nigeria</p>
                </div>
              </div>

              <div className="mt-12">
                <a href="https://wa.me/2348000000000" className="inline-flex items-center text-sm uppercase tracking-widest border border-border px-6 py-3 hover:border-primary transition-colors">
                  Contact via WhatsApp
                </a>
              </div>
            </div>

            <div>
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm tracking-widest uppercase text-muted-foreground mb-2">Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-border py-3 focus:outline-none focus:border-primary transition-colors text-foreground" />
                </div>
                <div>
                  <label className="block text-sm tracking-widest uppercase text-muted-foreground mb-2">Organization</label>
                  <input type="text" className="w-full bg-transparent border-b border-border py-3 focus:outline-none focus:border-primary transition-colors text-foreground" />
                </div>
                <div>
                  <label className="block text-sm tracking-widest uppercase text-muted-foreground mb-2">Email</label>
                  <input type="email" className="w-full bg-transparent border-b border-border py-3 focus:outline-none focus:border-primary transition-colors text-foreground" />
                </div>
                <div>
                  <label className="block text-sm tracking-widest uppercase text-muted-foreground mb-2">Project Details</label>
                  <textarea rows={4} className="w-full bg-transparent border-b border-border py-3 focus:outline-none focus:border-primary transition-colors text-foreground resize-none"></textarea>
                </div>
                <button className="w-full bg-foreground text-background py-4 uppercase tracking-widest text-sm hover:bg-primary hover:text-primary-foreground transition-colors">
                  Submit Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border bg-background text-center text-muted-foreground text-sm font-light">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <span>&copy; {new Date().getFullYear()} Eulogia and Elogies Project. All rights reserved.</span>
          <span className="text-muted-foreground/60">Abuja, FCT &mdash; Nigeria</span>
        </div>
      </footer>
    </div>
  );
}
