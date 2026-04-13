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
  Megaphone,
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
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const currentYear = new Date().getFullYear();

  const testimonials = [
    {
      message:
        'Nganiriza helped me understand my emotions better. The mood tracking feature is incredibly insightful, and the AI support feels genuinely caring.',
      name: 'Sarah M.',
      role: 'Mental Health Advocate',
    },
    {
      message:
        "As someone with anxiety, Nganiriza's CBT techniques integrated into the platform have been life-changing. I feel more in control of my thoughts.",
      name: 'James L.',
      role: 'Wellness Enthusiast',
    },
    {
      message:
        "I love how Nganiriza makes mental wellness fun with the brain games. It's helped me build a consistent daily routine and I feel happier.",
      name: 'Emma K.',
      role: 'Student & App User',
    },
  ];

  const decorativeBrains = [
    { top: '6%', left: '6%', size: '1rem', delay: '0s', duration: '4.2s' },
    { top: '10%', left: '24%', size: '1.2rem', delay: '0.6s', duration: '4.8s' },
    { top: '8%', left: '44%', size: '1.1rem', delay: '1.3s', duration: '5.1s' },
    { top: '12%', left: '66%', size: '1.4rem', delay: '0.9s', duration: '4.6s' },
    { top: '9%', left: '86%', size: '1rem', delay: '1.8s', duration: '5.3s' },
    { top: '34%', left: '14%', size: '1.5rem', delay: '0.4s', duration: '4.4s' },
    { top: '38%', left: '36%', size: '1.2rem', delay: '1.1s', duration: '5s' },
    { top: '32%', left: '58%', size: '1.6rem', delay: '0.7s', duration: '4.5s' },
    { top: '40%', left: '80%', size: '1.3rem', delay: '1.6s', duration: '5.2s' },
    { top: '62%', left: '8%', size: '1.2rem', delay: '1.4s', duration: '4.7s' },
    { top: '68%', left: '28%', size: '1.6rem', delay: '0.3s', duration: '4.3s' },
    { top: '64%', left: '48%', size: '1.3rem', delay: '1.9s', duration: '5.4s' },
    { top: '70%', left: '68%', size: '1.5rem', delay: '0.8s', duration: '4.9s' },
    { top: '66%', left: '88%', size: '1.1rem', delay: '1.2s', duration: '4.6s' },
  ];

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

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

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
        <div className="absolute inset-0 pointer-events-none z-0">
          {decorativeBrains.map((brain, index) => (
            <span
              key={`hero-bg-brain-${index}`}
              className="absolute opacity-20 animate-[brainDrift_5s_ease-in-out_infinite]"
              style={{
                top: brain.top,
                left: brain.left,
                fontSize: brain.size,
                animationDelay: brain.delay,
                animationDuration: brain.duration,
              }}
            >
              🧠
            </span>
          ))}
        </div>
        <div className="max-w-4xl mx-auto text-center">
          {/* <div className="mb-8 inline-block px-4 py-2 bg-accent/10 rounded-full border border-accent/20 animate-[heroMessageFloat_5s_ease-in-out_infinite]">
            <span className="text-sm font-medium text-accent">Mental Wellness Made Simple</span>
          </div> */}

          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance animate-[heroMessageFloat_6s_ease-in-out_infinite]">
            Your Daily Mental Wellness Companion
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto text-balance animate-[heroMessageFloat_7s_ease-in-out_infinite]">
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

      {/* About Us / Mission / Vision */}
      <section
        id="about"
        className="relative overflow-hidden px-4 sm:px-6 lg:px-8 py-20 md:py-28 bg-gradient-to-br from-primary/10 to-accent/10 border-y border-primary/20 transition-colors duration-300"
      >
        <div className="absolute inset-0 pointer-events-none z-0">
          {decorativeBrains.map((brain, index) => (
            <span
              key={`about-bg-brain-${index}`}
              className="absolute opacity-15 animate-[brainDrift_5.5s_ease-in-out_infinite]"
              style={{
                top: brain.top,
                left: brain.left,
                fontSize: brain.size,
                animationDelay: brain.delay,
                animationDuration: brain.duration,
              }}
            >
              🧠
            </span>
          ))}
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="max-w-3xl mx-auto mb-14 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">About Nganiriza</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mx-auto">
              Nganiriza is a youth-centered mental health movement and digital platform helping young adults (18-30)
              heal out loud, reconnect with community, and lead change through lived experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                We break mental health stigma among youth by combining in-app wellbeing tools, community storytelling
                spaces, and QR-code awareness campaigns so lived experience becomes leadership, education, and hope.
              </p>
             
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                A world where mental health is openly discussed without shame, where every person - regardless of
                diagnosis or treatment history - feels empowered to seek support, share their story, and be celebrated
                for resilience.
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

            {/* Awareness Campaigns */}
            <Card className="p-6 hover:shadow-xl hover:border-accent/50 hover:-translate-y-1 transition-all duration-300 bg-card border-border/50 shadow-md">
              <div className="w-12 h-12 rounded-lg bg-accent/10 text-accent flex items-center justify-center mb-4">
                <Megaphone className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Awareness Campaigns</h3>
              <p className="text-muted-foreground">
                Speak up. Seek support. Share your story. We run youth-focused, QR-code awareness campaigns that
                challenge stigma and connect people to help.
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

          <div className="max-w-xl mx-auto">
            <Card className="p-4 md:p-5 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-card border-border/50">
              <div className="flex gap-1 mb-4 justify-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4 italic text-center text-sm md:text-base min-h-20 transition-all duration-500">
                &quot;{testimonials[activeTestimonial].message}&quot;
              </p>
              <p className="font-semibold text-foreground text-center">{testimonials[activeTestimonial].name}</p>
              <p className="text-sm text-muted-foreground text-center">{testimonials[activeTestimonial].role}</p>
              <div className="mt-6 flex items-center justify-center gap-2" aria-label="Testimonial indicators">
                {testimonials.map((testimonial, index) => (
                  <button
                    type="button"
                    key={testimonial.name}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      index === activeTestimonial ? 'w-6 bg-primary' : 'w-2.5 bg-border'
                    }`}
                    aria-label={`Show testimonial ${index + 1}`}
                    onMouseEnter={() => setActiveTestimonial(index)}
                    onClick={() => setActiveTestimonial(index)}
                  />
                ))}
              </div>
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
                Nganiriza supports youth to heal, speak openly about mental health, and turn lived experience into community leadership.
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
                  <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                    About Us
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
