"use client";
import React, { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  AlertTriangle,
  Brain,
  Dna,
  Zap,
  Users,
  BookOpen,
} from "lucide-react";

const HomePage = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (section: any) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const sections = [
    {
      id: "premise",
      title: "The Premise",
      icon: <BookOpen className="w-6 h-6" />,
      content: `This analysis explores how reduced selective pressure might affect human genetic health and civilization. The central question: what happens to a population when AI handles all survival challenges, potentially removing natural selection mechanisms?`,
    },
    {
      id: "mutation",
      title: "The Mutation Accumulation Problem",
      icon: <Dna className="w-6 h-6" />,
      content: `Without selective pressure, harmful mutations may accumulate across generations. This theoretical framework suggests that certain behavioral patterns could indicate genetic health challenges in populations experiencing reduced environmental pressures.`,
    },
    {
      id: "ai-intervention",
      title: "The AI Intervention Dilemma",
      icon: <Brain className="w-6 h-6" />,
      content: `In scenarios where AI handles most cognitive and physical tasks, maintaining human genetic diversity and health becomes complex. This raises questions about the relationship between technological dependence and human evolution.`,
    },
  ];

  const scenarios = [
    {
      title: "Scenario 1: No Selective Mechanisms",
      type: "warning",
      description:
        "AI systems that don't account for genetic health might lead to gradual decline in human capabilities and eventual technological stagnation.",
      color: "red",
    },
    {
      title: "Scenario 2: Guided Selection",
      type: "positive",
      description:
        "AI systems that support human genetic health could potentially enhance both human intelligence and AI capabilities over time.",
      color: "green",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-indigo-100 rounded-lg">
              <Brain className="w-8 h-8 text-indigo-600" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                AI & Human Evolution
              </h1>
              <p className="text-sm text-gray-600">Theoretical Analysis</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-5xl">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why AI Might Cause the Next Dark Age
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              An exploration of selective pressure, genetic health, and the
              future of human civilization
            </p>
            <div className="mt-8 flex justify-center items-center space-x-2 text-amber-600">
              <AlertTriangle className="w-5 h-5" />
              <span className="text-sm font-medium">Theoretical Framework</span>
            </div>
          </div>
        </section>

        {/* Interactive Sections */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Core Concepts
          </h3>
          <div className="grid gap-6">
            {sections.map((section) => (
              <div
                key={section.id}
                className="bg-white/70 backdrop-blur-sm rounded-xl border border-gray-200 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50/50 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-indigo-100 rounded-lg">
                      {section.icon}
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900">
                      {section.title}
                    </h4>
                  </div>
                  {expandedSection === section.id ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                {expandedSection === section.id && (
                  <div className="px-6 pb-6">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-gray-700 leading-relaxed">
                        {section.content}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Scenarios */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Two Possible Futures
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {scenarios.map((scenario, index) => (
              <div
                key={index}
                className={`bg-white/70 backdrop-blur-sm rounded-xl border-2 ${
                  scenario.color === "red"
                    ? "border-red-200"
                    : "border-green-200"
                } p-6 shadow-lg hover:shadow-xl transition-all duration-300`}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div
                    className={`p-2 rounded-lg ${
                      scenario.color === "red" ? "bg-red-100" : "bg-green-100"
                    }`}
                  >
                    {scenario.color === "red" ? (
                      <AlertTriangle className={`w-6 h-6 text-red-600`} />
                    ) : (
                      <Zap className={`w-6 h-6 text-green-600`} />
                    )}
                  </div>
                  <h4
                    className={`text-lg font-semibold ${
                      scenario.color === "red"
                        ? "text-red-800"
                        : "text-green-800"
                    }`}
                  >
                    {scenario.title}
                  </h4>
                </div>
                <p
                  className={`leading-relaxed ${
                    scenario.color === "red" ? "text-red-700" : "text-green-700"
                  }`}
                >
                  {scenario.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* The Path Forward */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-8 text-white shadow-xl">
            <div className="flex items-center space-x-3 mb-4">
              <Users className="w-8 h-8" />
              <h3 className="text-2xl font-bold">The Path Forward</h3>
            </div>
            <p className="text-lg leading-relaxed mb-4 text-indigo-100">
              The analysis suggests that proactive approaches to human genetic
              health might be preferable to reactive responses. Early
              intervention could prevent scenarios where technological
              dependence leads to irreversible genetic decline.
            </p>
            <p className="text-lg leading-relaxed text-indigo-100">
              Without timely action, we might face a prolonged period where AI
              maintains basic human needs but lacks the capability to evolve
              beyond simple automation, creating permanent technological
              stagnation.
            </p>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-lg">
          <div className="flex items-center space-x-2 mb-2">
            <AlertTriangle className="w-5 h-5 text-amber-600" />
            <h4 className="font-semibold text-amber-800">Important Note</h4>
          </div>
          <p className="text-amber-700 text-sm">
            This analysis presents a theoretical framework for understanding
            potential long-term consequences of AI integration in human society.
            The concepts discussed are speculative and intended for academic
            consideration.
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white/80 backdrop-blur-sm border-t border-gray-200 mt-16">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-gray-500 text-sm">
            Theoretical Analysis • Human Evolution & AI • Speculative Framework
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
