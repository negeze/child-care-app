"use client"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
              ♥
            </div>
            <span className="font-bold text-lg text-foreground">Bright Kids Care</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-foreground hover:text-primary transition">
              Services
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition">
              About
            </a>
            <a href="#testimonials" className="text-foreground hover:text-primary transition">
              Testimonials
            </a>
          </div>
          <a href="/signup" className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90">
            Enroll Now
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-primary/15 rounded-full">
            <span className="text-sm font-semibold text-primary">Award-Winning Child Care</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">Where Every Child Thrives</h1>
          <p className="text-lg md:text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
            Providing nurturing, safe, and educational childcare for ages 6 months to 5 years.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/signup"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 font-medium text-center"
            >
              Schedule a Tour
            </a>
            <button className="px-8 py-3 border border-primary text-primary rounded-lg hover:bg-primary/10 bg-transparent font-medium">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Services</h2>
            <p className="text-lg text-foreground/70">
              Comprehensive childcare programs designed for your child's development
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Infant Care", desc: "Personalized care for newborns to 12 months" },
              { title: "Toddler Programs", desc: "Learning through play for ages 1-3" },
              { title: "Preschool", desc: "Educational curriculum for ages 3-5" },
              { title: "Enrichment", desc: "Music, art, and special activities" },
            ].map((service, idx) => (
              <div key={idx} className="p-6 border border-border rounded-lg hover:shadow-lg transition bg-card">
                <div className="text-3xl mb-4">★</div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-foreground/70">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/children-playing-and-learning-in-classroom.jpg"
                alt="Children learning together"
                className="rounded-2xl shadow-lg w-full"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Why Choose Us?</h2>
              <ul className="space-y-4">
                {[
                  "State-licensed and accredited caregivers with extensive training",
                  "Safe, secure, and sanitized facilities with modern equipment",
                  "Individualized attention and developmental tracking",
                  "24/7 parent portal to stay connected throughout the day",
                  "Nutritious meals and snacks prepared fresh daily",
                  "Flexible enrollment options to fit your schedule",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span className="text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Parents Love Us</h2>
            <p className="text-lg text-foreground/70">See what families are saying about their experience</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                text: "My daughter was shy at first, but the caring staff helped her blossom. She loves going to Bright Kids Care!",
                author: "Sarah M.",
                role: "Parent of Emma, Age 3",
              },
              {
                text: "The daily updates and photos keep us connected even during work. We trust the team completely with our son's care.",
                author: "David & Lisa K.",
                role: "Parents of Jack, Age 2",
              },
              {
                text: "Outstanding facilities and a genuine love for children. Our twins have made wonderful friends and learned so much.",
                author: "Jennifer T.",
                role: "Parent of Lucas & Sophie, Age 4",
              },
            ].map((testimonial, idx) => (
              <div key={idx} className="p-8 border border-border rounded-lg bg-card">
                <div className="flex gap-1 mb-4">★★★★★</div>
                <p className="text-foreground/80 mb-6">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-foreground/60">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Give Your Child the Best?</h2>
          <p className="text-lg mb-8 opacity-95">
            Join our growing community of families who trust us with their most precious treasure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/signup"
              className="px-8 py-3 bg-primary-foreground text-primary rounded-lg hover:bg-primary-foreground/90 font-medium text-center"
            >
              Enroll Today
            </a>
            <button className="px-8 py-3 border border-primary-foreground text-primary-foreground rounded-lg hover:bg-primary-foreground/10 bg-transparent font-medium">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground/5 border-t border-border py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-sm">
                  ♥
                </div>
                <span className="font-bold text-foreground">Bright Kids Care</span>
              </div>
              <p className="text-sm text-foreground/70">Nurturing tomorrow's leaders today.</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li>
                  <a href="#" className="hover:text-primary transition">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition">
                    Services
                  </a>
                </li>
                <li>
                  <a href="/signup" className="hover:text-primary transition">
                    Enrollment
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li>📞 (555) 123-4567</li>
                <li>📧 info@brightkidscare.com</li>
                <li>📍 123 Main Street, City</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Follow Us</h4>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li>
                  <a href="#" className="hover:text-primary transition">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition">
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-foreground/60">
            <p>&copy; 2025 Bright Kids Care. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
