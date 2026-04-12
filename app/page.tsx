'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import {
  MessageCircle,
  TrendingUp,
  Calendar,
  Brain,
  Gamepad2,
  Facebook,
  Twitter,
  Linkedin,
  Mail,
  Moon,
  Sun,
  Star,
  Menu,
} from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Home() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);
  const currentYear = new Date().getFullYear();

  const handleLearnMoreClick = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

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
    <div id="home" className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary text-primary-foreground flex items-center justify-center font-bold">
              N
            </div>
            <span className="text-xl font-bold text-foreground">Nganiriza</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Home
            </a>
            <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              About Us
            </a>
            <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
          </nav>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-lg border border-border hover:bg-muted transition-colors"
              aria-label="Toggle theme"
            >
              {mounted && (isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />)}
            </button>

            <Sheet>
              <SheetTrigger asChild>
                <button
                  className="md:hidden p-2 rounded-lg border border-border hover:bg-muted transition-colors"
                  aria-label="Open navigation menu"
                >
                  <Menu className="w-5 h-5" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-72">
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <nav className="mt-8 flex flex-col gap-4">
                  <a href="#home" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Home
                  </a>
                  <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    About Us
                  </a>
                  <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Features
                  </a>
                  <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Contact
                  </a>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 inline-block px-4 py-2 bg-accent/10 rounded-full border border-accent/20">
            <span className="text-sm font-medium text-accent">Mental Wellness Made Simple</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            Your Daily Mental Wellness Companion
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto text-balance">
            Track your mood, get support, and build a healthier mind with Nganiriza
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8 transition-all duration-300 hover:scale-[1.02]">
              Get Started
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 transition-all duration-300 hover:scale-[1.02]"
              onClick={handleLearnMoreClick}
            >
              Learn More
            </Button>
          </div>

          {/* Decorative element */}
          <div className="mt-16 relative h-64 md:h-80 rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-6xl opacity-20">🧠</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us / Learn More Section */}
      <section id="about" className="px-4 sm:px-6 lg:px-8 py-20 md:py-32 bg-card/70 border-y border-border/50 transition-colors duration-300">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              About Nganiriza
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Nganiriza is dedicated to making mental health support accessible to everyone. We believe that mental wellness is a fundamental human right, and technology can be a powerful tool to help people understand themselves better, manage stress, and build resilience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our mission is to democratize mental health support by combining AI technology with evidence-based therapeutic techniques. We aim to provide a safe, non-judgmental space where individuals can explore their emotions, track their mental health journey, and access tools to improve their wellbeing.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">How We Help</h3>
              <p className="text-muted-foreground leading-relaxed">
                Through mood tracking, AI-powered emotional support, facial recognition for emotional patterns, and cognitive behavioral therapy techniques, Nganiriza helps users gain insights into their mental health. Our brain games and planning tools support daily wellness routines and cognitive development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Features Built for Your Wellness
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to support your mental health journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* AI Emotional Support (Combined) */}
            <Card className="p-6 hover:shadow-xl hover:border-primary/50 hover:-translate-y-1 transition-all duration-300 bg-card border-border/50 shadow-md">
              <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                <MessageCircle className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">AI Emotional Support</h3>
              <p className="text-muted-foreground">
                Interact with an AI chatbot that understands your emotions through conversation and facial cues.
              </p>
            </Card>

            {/* Mood Tracking */}
            <Card className="p-6 hover:shadow-xl hover:border-primary/50 hover:-translate-y-1 transition-all duration-300 bg-card border-border/50 shadow-md">
              <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Mood Tracking</h3>
              <p className="text-muted-foreground">
                Track your mental state with simple daily check-ins and questionnaires.
              </p>
            </Card>

            {/* Daily Planning */}
            <Card className="p-6 hover:shadow-xl hover:border-accent/50 hover:-translate-y-1 transition-all duration-300 bg-card border-border/50 shadow-md">
              <div className="w-12 h-12 rounded-lg bg-accent/10 text-accent flex items-center justify-center mb-4">
                <Calendar className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Daily Planning</h3>
              <p className="text-muted-foreground">
                Plan your daily activities with friendly reminders and notifications.
              </p>
            </Card>

            {/* CBT-Based Chat */}
            <Card className="p-6 hover:shadow-xl hover:border-accent/50 hover:-translate-y-1 transition-all duration-300 bg-card border-border/50 shadow-md">
              <div className="w-12 h-12 rounded-lg bg-accent/10 text-accent flex items-center justify-center mb-4">
                <Brain className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">CBT-Based Chat</h3>
              <p className="text-muted-foreground">
                Get support using Cognitive Behavioral Therapy techniques integrated into chat.
              </p>
            </Card>

            {/* Brain Games */}
            <Card className="p-6 hover:shadow-xl hover:border-primary/50 hover:-translate-y-1 transition-all duration-300 bg-card border-border/50 shadow-md">
              <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                <Gamepad2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Brain Games</h3>
              <p className="text-muted-foreground">
                Play simple games designed to stimulate and improve mental health.
              </p>
            </Card>

            {/* Testimonials */}
            <Card className="p-6 hover:shadow-xl hover:border-accent/50 hover:-translate-y-1 transition-all duration-300 bg-card border-border/50 shadow-md">
              <div className="w-12 h-12 rounded-lg bg-accent/10 text-accent flex items-center justify-center mb-4">
                <Star className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Testimonials</h3>
              <p className="text-muted-foreground">
                See how Nganiriza has helped users improve their mental well-being through real experiences.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Our Users Say
            </h2>
            <p className="text-lg text-muted-foreground">
              Real stories of transformation and improved mental wellness
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Testimonial 1 */}
            <Card className="p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-card border-border/50">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4 italic">
                &quot;Nganiriza helped me understand my emotions better. The mood tracking feature is incredibly insightful, and the AI support feels genuinely caring.&quot;
              </p>
              <p className="font-semibold text-foreground">Sarah M.</p>
              <p className="text-sm text-muted-foreground">Mental Health Advocate</p>
            </Card>

            {/* Testimonial 2 */}
            <Card className="p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-card border-border/50">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4 italic">
                &quot;As someone with anxiety, Nganiriza&apos;s CBT techniques integrated into the platform have been life-changing. I feel more in control of my thoughts.&quot;
              </p>
              <p className="font-semibold text-foreground">James L.</p>
              <p className="text-sm text-muted-foreground">Wellness Enthusiast</p>
            </Card>

            {/* Testimonial 3 */}
            <Card className="p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-card border-border/50">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4 italic">
                &quot;I love how Nganiriza makes mental wellness fun with the brain games. It&apos;s helped me build a consistent daily routine and I feel happier.&quot;
              </p>
              <p className="font-semibold text-foreground">Emma K.</p>
              <p className="text-sm text-muted-foreground">Student & App User</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="border-t border-border/50 bg-muted/40 px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* About */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  N
                </div>
                <span className="font-bold text-foreground">Nganiriza</span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Nganiriza is focused on improving mental wellness through technology and awareness.
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-lg bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-lg bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-lg bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-lg bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm">
              &copy; {currentYear} Nganiriza. All rights reserved.
            </p>
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
