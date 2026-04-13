'use client';

import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function AboutPage() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    setMounted(true);
    const isDarkMode = document.documentElement.classList.contains('dark');
    setIsDark(isDarkMode);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark, mounted]);

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary text-primary-foreground flex items-center justify-center font-bold">
              N
            </div>
            <span className="text-xl font-bold text-foreground">Nganiriza</span>
          </div>

          <nav className="flex items-center gap-6">
            <a href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Home
            </a>
            <a href="/about" className="text-sm text-foreground font-medium">
              About Us
            </a>
          </nav>

          <button
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-lg border border-border hover:bg-muted transition-colors"
            aria-label="Toggle theme"
          >
            {mounted && (isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />)}
          </button>
        </div>
      </header>

      <main className="px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">About Nganiriza</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Nganiriza is a youth-centered mental health movement and digital platform helping young adults (18-30)
              heal out loud, reconnect with community, and lead change through lived experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <section className="space-y-4 p-6 rounded-2xl border border-border/60 bg-card/50">
              <h2 className="text-2xl font-semibold text-foreground">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                A world where mental health is openly discussed without shame, where every person - regardless of
                diagnosis or treatment history - feels empowered to seek support, share their story, and be celebrated
                for resilience.
              </p>
            </section>

            <section className="space-y-4 p-6 rounded-2xl border border-border/60 bg-card/50">
              <h2 className="text-2xl font-semibold text-foreground">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                We break mental health stigma among youth by combining in-app wellbeing tools, community storytelling
                spaces, and QR-code awareness campaigns so lived experience becomes leadership, education, and hope.
              </p>
            </section>
          </div>
        </div>
      </main>

      <footer id="contact" className="border-t border-border/50 bg-muted/40 px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  N
                </div>
                <span className="font-bold text-foreground">Nganiriza</span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Nganiriza supports youth to heal, speak openly about mental health, and turn lived experience into
                community leadership.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="/" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/about" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                    About Us
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Contact</h4>
              <p className="text-muted-foreground text-sm">hello@nganiriza.org</p>
            </div>
          </div>

          <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm">&copy; {currentYear} Nganiriza. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                Privacy
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                Terms
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
