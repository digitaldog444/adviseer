"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  gradient: string;
}

interface VideoCardProps {
  title: string;
  description: string;
  thumbnail: string;
  duration: string;
  views: string;
}

interface TopicProps {
  emoji: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  gradient,
}) => (
  <div
    className={`${gradient} p-8 rounded-3xl shadow-2xl transform transition-all duration-300 hover:scale-105 hover:rotate-1 group`}
  >
    <div className="text-6xl mb-4 group-hover:animate-bounce">{icon}</div>
    <h3 className="text-2xl font-bold mb-4 text-white">{title}</h3>
    <p className="text-white/90 leading-relaxed">{description}</p>
  </div>
);

const VideoCard: React.FC<VideoCardProps> = ({
  title,
  description,
  thumbnail,
  duration,
  views,
}) => (
  <div className="bg-gray-900/50 backdrop-blur-lg rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group border border-purple-500/20">
    <div className="relative overflow-hidden">
      <div
        className={`w-full h-48 ${thumbnail} bg-cover bg-center transition-transform duration-300 group-hover:scale-110`}
      ></div>
      <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-sm font-semibold">
        {duration}
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
        {title}
      </h3>
      <p className="text-gray-400 text-sm mb-4 leading-relaxed">
        {description}
      </p>
      <div className="flex items-center justify-between text-xs text-gray-500">
        <span>{views} views</span>
        <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full transition-colors duration-200 font-semibold">
          Watch
        </button>
      </div>
    </div>
  </div>
);

const TopicBubble: React.FC<TopicProps> = ({ emoji, title, description }) => (
  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-cyan-300/50 transition-all duration-300 hover:bg-white/15 group">
    <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-200">
      {emoji}
    </div>
    <h4 className="text-lg font-bold text-cyan-300 mb-2">{title}</h4>
    <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
  </div>
);

const AdviseerHomepage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const features = [
    {
      icon: "🧠",
      title: "Mind Mechanics",
      description:
        "Explore how evolutionary psychology shapes our decision-making, biases, and behavioral patterns in the modern world.",
      gradient: "bg-gradient-to-br from-purple-600 via-pink-600 to-red-500",
    },
    {
      icon: "🤖",
      title: "AI Evolution",
      description:
        "Discover how artificial intelligence mirrors and diverges from natural evolutionary processes and human cognition.",
      gradient: "bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-700",
    },
    {
      icon: "🔬",
      title: "Deep Analysis",
      description:
        "Scientific breakdowns of complex topics made accessible, connecting ancient wisdom with cutting-edge research.",
      gradient: "bg-gradient-to-br from-green-500 via-teal-600 to-blue-600",
    },
  ];

  const topics = [
    {
      emoji: "🧬",
      title: "Genetic Algorithms",
      description: "How evolution inspires AI development",
    },
    {
      emoji: "🎯",
      title: "Behavioral Economics",
      description: "Psychology meets decision theory",
    },
    {
      emoji: "🌐",
      title: "Collective Intelligence",
      description: "Swarm behavior and emergent systems",
    },
    {
      emoji: "⚡",
      title: "Neural Networks",
      description: "Brain-inspired computing architectures",
    },
    {
      emoji: "🎲",
      title: "Game Theory",
      description: "Strategic thinking in evolution and AI",
    },
    {
      emoji: "🔄",
      title: "Feedback Loops",
      description: "How systems learn and adapt over time",
    },
  ];

  const videos = [
    {
      title: "Why Your Brain Tricks You: Evolutionary Biases Explained",
      description:
        "Discover the ancient survival mechanisms that still influence your daily decisions and how to recognize them.",
      thumbnail: "bg-gradient-to-br from-orange-400 to-red-600",
      duration: "12:34",
      views: "147K",
    },
    {
      title: "AI vs Human Intelligence: The Ultimate Comparison",
      description:
        "Breaking down the fundamental differences between artificial and biological intelligence systems.",
      thumbnail: "bg-gradient-to-br from-blue-500 to-purple-600",
      duration: "18:22",
      views: "203K",
    },
    {
      title: "The RRSim Theory: Are We Living in a Simulation?",
      description:
        "Exploring the recursive reproductive simulation hypothesis and what it means for consciousness.",
      thumbnail: "bg-gradient-to-br from-green-400 to-teal-600",
      duration: "24:15",
      views: "89K",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white overflow-hidden relative">
      {/* Dynamic Background Elements */}
      <div
        className="fixed inset-0 opacity-20 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(147, 51, 234, 0.15), transparent 40%)`,
        }}
      />

      {/* Floating Particles */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        {/* Navigation */}
        <nav className="p-6 backdrop-blur-lg bg-black/20 border-b border-white/10">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Adviseer
              </div>
              <div className="h-8 w-px bg-white/30"></div>
              <div className="text-gray-300 text-sm">
                AI × Evolutionary Psychology
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Videos
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                About
              </a>
              <Link
                href="https://youtube.com/@adviseer"
                className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded-full transition-colors font-semibold"
              >
                Subscribe
              </Link>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section
          className={`px-6 py-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight">
              Where Minds Meet
              <br />
              <span className="text-5xl">Machines</span>
            </h1>
            <p className="text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Exploring the fascinating intersection of artificial intelligence,
              evolutionary psychology, and the mechanisms that drive both human
              and machine behavior.
            </p>
            <div className="flex items-center justify-center space-x-4 mb-12">
              <Link
                href="https://youtube.com/@adviseer"
                className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                🎥 Latest Videos
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400">1K+</div>
                <div className="text-gray-400">Subscribers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">5K+</div>
                <div className="text-gray-400">Total Views</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-400">70+</div>
                <div className="text-gray-400">Videos</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="px-6 py-20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              What Makes Us Different
            </h2>
            <p className="text-xl text-gray-400 text-center mb-16 max-w-3xl mx-auto">
              We bridge the gap between ancient evolutionary wisdom and
              cutting-edge AI research
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <FeatureCard key={index} {...feature} />
              ))}
            </div>
          </div>
        </section>

        {/* Topics We Cover */}
        <section className="px-6 py-20 bg-black/20 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-white">
              Topics We Explore
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {topics.map((topic, index) => (
                <TopicBubble key={index} {...topic} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-6 py-20 bg-gradient-to-r from-purple-900/50 to-indigo-900/50 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Join the Evolution
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Stay ahead of the curve with insights that matter. Subscribe for
              weekly deep-dives into the minds of both humans and machines.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                href="https://www.youtube.com/@adviseer"
                className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg w-full sm:w-auto"
              >
                🔔 Subscribe Now
              </Link>
              <Link
                href="https://discord.gg/CKggrPgQrC"
                className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-200 w-full sm:w-auto"
              >
                💬 Join Discord
              </Link>
            </div>
          </div>
        </section>
        <ItemList />
        {/* Footer */}
        <footer className="px-6 py-12 bg-black/40 backdrop-blur-lg border-t border-white/10">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex items-center space-x-4 mb-4 md:mb-0">
                <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Adviseer
                </div>
                <div className="text-gray-400">© 2025 All rights reserved</div>
              </div>
              <div className="flex items-center space-x-6">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Privacy
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Terms
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default AdviseerHomepage;

const ItemList = () => {
  return (
    <ul className="text-center">
      <h1 className="text-3xl font-bold">Articles</h1>
      <li>
        <Link
          className="text-amber-500 hover:text-amber-600"
          href="/why-does-the-universe-simulate-itself"
        >
          Why does the universe repeat itself with a simulation?
        </Link>
      </li>
      <li>
        <Link className="text-amber-500 hover:text-amber-600" href="/baphomet">
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
        <Link className="text-amber-500 hover:text-amber-600" href="/laplace">
          Laplace's Demon
        </Link>
      </li>
      <li>
        <Link className="text-amber-500 hover:text-amber-600" href="/laplace2">
          What happens once we create Laplace's demon.
        </Link>
      </li>
      <li>
        <Link className="text-amber-500 hover:text-amber-600" href="/rrsim">
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
      <li>
        <Link href="/rrsim2" className="text-amber-500 hover:text-amber-600">
          Recursive Reproductive Simulation Explained
        </Link>
      </li>
      <li>
        <Link
          href="/archetypes2"
          className="text-amber-500 hover:text-amber-600"
        >
          The 4 core archetypes (continued)
        </Link>
      </li>
    </ul>
  );
};
