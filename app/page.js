"use client";

import React, { useEffect, useRef, useMemo, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { gsap } from "gsap";
import { Sparkles } from "lucide-react";

export default function LandingPage() {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const buttonRef = useRef(null);
  const imageRef = useRef(null);
  const [mounted, setMounted] = useState(false);

  // Generate stable particle data
  const particles = useMemo(() => {
    return Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: -(Math.random() * 20),
      delay: Math.random() * 5,
      duration: 10 + Math.random() * 10,
      size: Math.random() * 20 + 10,
    }));
  }, []);

  useEffect(() => {
    setMounted(true);

    const ctx = gsap.context(() => {
      // Hero title animation
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
      });

      // Description animation (delayed)
      gsap.from(descRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.3,
        ease: "power2.out",
      });

      // Button animation
      gsap.from(buttonRef.current, {
        opacity: 0,
        scale: 0.8,
        duration: 0.6,
        delay: 0.5,
        ease: "back.out(1.7)",
      });

      // Image animation
      gsap.from(imageRef.current, {
        opacity: 0,
        x: 100,
        duration: 1,
        delay: 0.4,
        ease: "power3.out",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={heroRef}>
      {/* Animated Background Particles */}
      {mounted && (
        <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none">
          {particles.map((particle) => (
            <div
              key={particle.id}
              className="absolute animate-float"
              style={{
                left: `${particle.left}%`,
                top: `${particle.top}%`,
                animationDelay: `${particle.delay}s`,
                animationDuration: `${particle.duration}s`,
              }}
            >
              <Sparkles
                className="text-cyan-500/20"
                size={particle.size}
              />
            </div>
          ))}
        </div>
      )}

      {/* Hero Section */}
      <section className="pb-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left content */}
          <div className="text-center sm:text-left">
            <div className="mb-6">
              <span className="text-gray-400 font-light tracking-wide text-sm">
                Welcome to{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-emerald-500 bg-clip-text text-transparent font-semibold">
                  BookMyVibe
                </span>
              </span>
            </div>

            <h1
              ref={titleRef}
              className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-[0.95] tracking-tight"
            >
              Discover &<br />
              create amazing
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent">
                events.
              </span>
            </h1>

            <p
              ref={descRef}
              className="text-lg sm:text-xl text-gray-400 mb-12 max-w-lg font-light"
            >
              Whether you&apos;re hosting or attending, BookMyVibe makes every
              event memorable with AI-powered event management. Join our
              community today.
            </p>

            <div ref={buttonRef}>
              <Link href="/explore">
                <Button
                  size="xl"
                  className="rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Get Started
                </Button>
              </Link>
            </div>
          </div>

          {/* Right - Hero Image */}
          <div ref={imageRef} className="relative block">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 blur-3xl rounded-full" />
              <Image
                src="/hero.png"
                alt="BookMyVibe Events"
                width={700}
                height={700}
                className="w-full h-auto relative z-10"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-emerald-500 bg-clip-text text-transparent">
                BookMyVibe
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              The most powerful AI-powered event management platform
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-emerald-500/10 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500 flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">AI-Powered Creation</h3>
              <p className="text-gray-400">
                Generate complete event details with a single prompt. Let AI handle the heavy lifting.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-teal-500/10 to-cyan-500/10 border border-teal-500/20 hover:border-teal-500/40 transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Smart Ticketing</h3>
              <p className="text-gray-400">
                QR-coded tickets, seamless registration, and real-time attendance tracking.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Analytics Dashboard</h3>
              <p className="text-gray-400">
                Track registrations, attendance, and engagement with powerful analytics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-500 bg-clip-text text-transparent mb-2">
                10K+
              </div>
              <div className="text-gray-400">Events Created</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent mb-2">
                50K+
              </div>
              <div className="text-gray-400">Active Users</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent mb-2">
                100K+
              </div>
              <div className="text-gray-400">Tickets Sold</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-500 bg-clip-text text-transparent mb-2">
                4.9/5
              </div>
              <div className="text-gray-400">User Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative z-10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="p-12 rounded-3xl bg-gradient-to-br from-cyan-500/10 to-emerald-500/10 border border-cyan-500/20">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Ready to create your next event?
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of organizers who trust BookMyVibe to make their events unforgettable.
            </p>
            <Link href="/explore">
              <Button
                size="xl"
                className="rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600 text-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Start For Free
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }
        .animate-float {
          animation: float linear infinite;
        }
      `}</style>
    </div>
  );
}
