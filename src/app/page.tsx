"use client";
import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import {
  ChevronRight,
  Play,
  Book,
  Users,
  Lightbulb,
  ArrowDown,
  Github,
  Twitter,
  Mail,
} from "lucide-react";

interface AnimatedCounterProps {
  target: number;
  duration?: number;
  suffix?: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  target,
  duration = 2000,
  suffix = "",
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * target));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [target, duration]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

const HomePage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <Lightbulb className="w-8 h-8 text-blue-500" />,
      title: "Revolutionary Framework",
      description:
        "RRSim provides a groundbreaking approach to understanding the universe through recursive reflection and simulation.",
    },
    {
      icon: <Book className="w-8 h-8 text-green-500" />,
      title: "Theoretical Foundation",
      description:
        "Built on rigorous mathematical principles and validated through extensive research in computational theory.",
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-amber-500" />,
      title: "Adviseer",
      description: "My name is Adviseer.",
    },
  ];

  const applications = [
    "Artificial Intelligence",
    "Quantum Computing",
    "Systems Biology",
    "Economic Modeling",
    "Climate Simulation",
    "Neural Networks",
  ];

  return (
    <>
      <Head>
        <title>RRSim Theory - Recursive Reproductive Simulation</title>
        <meta
          name="description"
          content="Discover RRSim Theory: A revolutionary framework for recursive reflection and simulation in complex systems."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Navigation */}
        <nav className="fixed w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">RR</span>
                </div>
                <span className="text-white font-bold text-xl">RRSim</span>
              </div>

              <div className="hidden md:flex items-center space-x-8">
                <Link
                  href="#theory"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Theory
                </Link>
                <Link
                  href="#applications"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Applications
                </Link>
                <Link
                  href="#research"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Research
                </Link>
                <Link
                  href="#community"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Community
                </Link>
                <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full hover:scale-105 transition-transform">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div
              className={`transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  RRSim Theory
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-4xl mx-auto leading-relaxed">
                Recursive Reflection Simulation - A revolutionary framework for
                understanding complex systems through iterative self-analysis
                and predictive modeling
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <button className="group bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-all duration-300 flex items-center space-x-2 shadow-2xl">
                  <Play className="w-5 h-5" />
                  <span>Explore Theory</span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="border-2 border-white/30 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                  Read Papers
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">
                    <AnimatedCounter target={1247} suffix="+" />
                  </div>
                  <div className="text-white/60">Research Papers</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">
                    <AnimatedCounter target={89} suffix="%" />
                  </div>
                  <div className="text-white/60">Accuracy Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">
                    <AnimatedCounter target={156} suffix="+" />
                  </div>
                  <div className="text-white/60">Contributors</div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown className="w-6 h-6 text-white/60" />
          </div>
        </section>

        {/* Features Section */}
        <section id="theory" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why RRSim Theory?
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                RRSim represents a paradigm shift in how we approach complex
                system analysis, combining recursive algorithms with reflective
                modeling techniques.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105"
                >
                  <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Applications Section */}
        <section id="applications" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Real-World Applications
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                RRSim Theory is being applied across diverse fields,
                revolutionizing how we understand and predict complex behaviors.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {applications.map((app, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-blue-500/20 to-purple-600/20 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300 text-center group cursor-pointer"
                >
                  <span className="text-white font-semibold group-hover:scale-105 transition-transform duration-300 inline-block">
                    {app}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-500/20 to-purple-600/20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Dive Deeper?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Join the RRSim community and start exploring the future of complex
              system analysis
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-gray-900 px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-all duration-300 shadow-2xl">
                Download Framework
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-all duration-300">
                View Documentation
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-black/40 border-t border-white/10">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center space-x-2 mb-4 md:mb-0">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">RR</span>
                </div>
                <span className="text-white font-bold text-lg">
                  RRSim Theory
                </span>
              </div>

              <div className="flex items-center space-x-6">
                <a
                  href="#"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  <Twitter className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
            <ul className="text-center">
              <li>
                <Link
                  className="text-amber-500 hover:text-amber-600"
                  href="/why-does-the-universe-simulate-itself"
                >
                  Why does the universe repeat itself with a simulation?
                </Link>
              </li>
              <li>
                <Link
                  className="text-amber-500 hover:text-amber-600"
                  href="/baphomet"
                >
                  Baphomet
                </Link>
              </li>
              <li>
                <Link
                  className="text-amber-500 hover:text-amber-600"
                  href="/tree-of-life"
                >
                  Tree of Life
                </Link>
              </li>
              <li>
                <Link
                  className="text-amber-500 hover:text-amber-600"
                  href="/wise-old-man"
                >
                  Wise Old Man
                </Link>
              </li>
              <li>
                <Link
                  className="text-amber-500 hover:text-amber-600"
                  href="/meaning-of-existence"
                >
                  The Meaning of Existence
                </Link>
              </li>
              <li>
                <Link
                  className="text-amber-500 hover:text-amber-600"
                  href="/religious-fail-satan"
                >
                  Religious fail of Satan
                </Link>
              </li>
              <li>
                <Link
                  className="text-amber-500 hover:text-amber-600"
                  href="/universe-is-sim"
                >
                  Are We Living in a Simuatlion?
                </Link>
              </li>
              <li>
                <Link
                  className="text-amber-500 hover:text-amber-600"
                  href="/laplace"
                >
                  Laplace's Demon
                </Link>
              </li>
              <li>
                <Link
                  className="text-amber-500 hover:text-amber-600"
                  href="/laplace2"
                >
                  What happens once we create Laplace's demon.
                </Link>
              </li>
              <li>
                <Link
                  className="text-amber-500 hover:text-amber-600"
                  href="/rrsim"
                >
                  Recursive Reproductive Simulation (RRSim)
                </Link>
              </li>
              <li>
                <Link
                  href="/archetypes"
                  className="text-amber-500 hover:text-amber-600"
                >
                  Core Archetypes
                </Link>
              </li>
            </ul>
            ;
            <div className="mt-8 pt-8 border-t border-white/10 text-center">
              <p className="text-white/60">
                © 2024 RRSim Theory. All rights reserved. | Built with Next.js,
                TypeScript & Tailwind CSS
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default HomePage;
