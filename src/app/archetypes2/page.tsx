"use client";
import React, { useState } from "react";
import { Crown, Shield, Eye, Flame } from "lucide-react";

interface Archetype {
  name: string;
  subtitle: string;
  description: string;
  trigger: string;
  manifestation: string;
  icon: React.ReactNode;
  color: string;
  bgGradient: string;
  textColor: string;
}

const archetypes: Archetype[] = [
  {
    name: "The Great Mother",
    subtitle: "Nurturing Feminine",
    description:
      "The embodiment of unconditional love, protection, and life-giving force. She creates safe spaces where others can flourish and grow.",
    trigger: "Stable Comfort",
    manifestation:
      "Nurturing, generous, creating safe spaces for growth and healing. Expresses through care, support, and unconditional acceptance.",
    icon: <Shield className="w-12 h-12" />,
    color: "emerald",
    bgGradient: "from-emerald-500 to-teal-600",
    textColor: "text-emerald-100",
  },
  {
    name: "Baphomet",
    subtitle: "Shadow Feminine",
    description:
      "The dark feminine that emerges when security is threatened. Represents both creation and destruction, wielding seductive power that can lead to wisdom or ruin.",
    trigger: "Unstable Comfort",
    manifestation:
      "Manipulation, seduction, using emotional and sexual power destructively when safety and security are compromised.",
    icon: <Flame className="w-12 h-12" />,
    color: "purple",
    bgGradient: "from-purple-600 to-indigo-700",
    textColor: "text-purple-100",
  },
  {
    name: "The Wise Old Man",
    subtitle: "Evolved Masculine",
    description:
      "Masculine wisdom at its peak. The sage who has integrated experience into understanding, offering guidance without coercion.",
    trigger: "Stable Stress",
    manifestation:
      "Mentorship, measured response, using knowledge for genuine benefit. Pressure forges wisdom and creates strength.",
    icon: <Eye className="w-12 h-12" />,
    color: "blue",
    bgGradient: "from-blue-600 to-cyan-700",
    textColor: "text-blue-100",
  },
  {
    name: "The Tyrannical Father",
    subtitle: "Shadow Masculine",
    description:
      "The dark side of masculine authority. Rigid control, harsh judgment, and abuse of power. Rules through fear and domination.",
    trigger: "Unstable Stress",
    manifestation:
      "Authoritarianism, harsh control, reactive dominance. Chaos breeds destructive use of power and position.",
    icon: <Crown className="w-12 h-12" />,
    color: "red",
    bgGradient: "from-red-600 to-orange-700",
    textColor: "text-red-100",
  },
];

export default function ArchetypesWebsite() {
  const [selectedArchetype, setSelectedArchetype] = useState<number | null>(
    null
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800">
      {/* Header */}
      <header className="relative overflow-hidden bg-black/20 backdrop-blur-sm">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-16 text-center">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent mb-6">
            Four Core Archetypes
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Understanding how comfort and stress shape the expression of
            masculine and feminine energies
          </p>
        </div>
      </header>

      {/* Core Insight */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="bg-black/30 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
            The Core Insight
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-emerald-500/20 to-purple-500/20 rounded-2xl p-6 border border-emerald-300/20">
              <h3 className="text-2xl font-bold text-emerald-300 mb-4">
                Feminine Energy
              </h3>
              <p className="text-slate-300 text-lg leading-relaxed">
                Pivots on{" "}
                <span className="text-emerald-400 font-semibold">comfort</span>.
                When comfort is stable, feminine energy expresses as nurturing
                and life-giving. When comfort becomes unstable, it can manifest
                as manipulative and destructive.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-500/20 to-red-500/20 rounded-2xl p-6 border border-blue-300/20">
              <h3 className="text-2xl font-bold text-blue-300 mb-4">
                Masculine Energy
              </h3>
              <p className="text-slate-300 text-lg leading-relaxed">
                Pivots on{" "}
                <span className="text-blue-400 font-semibold">stress</span>.
                When stress is stable and manageable, masculine energy develops
                wisdom and strength. When stress becomes chaotic and
                unpredictable, it turns tyrannical and controlling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Archetypes Grid */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {archetypes.map((archetype, index) => (
            <div
              key={index}
              className={`group cursor-pointer transform transition-all duration-300 hover:scale-105 ${
                selectedArchetype === index ? "scale-105" : ""
              }`}
              onClick={() =>
                setSelectedArchetype(selectedArchetype === index ? null : index)
              }
            >
              <div
                className={`bg-gradient-to-br ${archetype.bgGradient} rounded-3xl p-6 h-full border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-300`}
              >
                <div className="flex flex-col items-center text-center h-full">
                  <div
                    className={`${archetype.textColor} mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {archetype.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {archetype.name}
                  </h3>
                  <p
                    className={`${archetype.textColor} text-sm font-medium mb-4`}
                  >
                    {archetype.subtitle}
                  </p>
                  <div className="flex-grow flex flex-col justify-between">
                    <p className="text-white/90 text-sm leading-relaxed mb-4">
                      {archetype.description}
                    </p>
                    <div className="space-y-2">
                      <div className="bg-black/20 rounded-lg p-2">
                        <p className="text-xs font-semibold text-white/80">
                          TRIGGER:
                        </p>
                        <p className="text-sm text-white">
                          {archetype.trigger}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Detailed View */}
      {selectedArchetype !== null && (
        <section className="max-w-4xl mx-auto px-6 py-16">
          <div className="bg-black/40 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20">
            <div className="text-center mb-8">
              <div
                className={`text-${archetypes[selectedArchetype].color}-400 mb-4 flex justify-center`}
              >
                {archetypes[selectedArchetype].icon}
              </div>
              <h2 className="text-4xl font-bold text-white mb-2">
                {archetypes[selectedArchetype].name}
              </h2>
              <p
                className={`text-${archetypes[selectedArchetype].color}-300 text-xl`}
              >
                {archetypes[selectedArchetype].subtitle}
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Description
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  {archetypes[selectedArchetype].description}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Manifestation
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  {archetypes[selectedArchetype].manifestation}
                </p>
              </div>

              <div
                className={`bg-gradient-to-r ${archetypes[selectedArchetype].bgGradient} bg-opacity-20 rounded-xl p-4 border border-${archetypes[selectedArchetype].color}-300/30`}
              >
                <h3 className="text-xl font-bold text-white mb-2">
                  Environmental Trigger
                </h3>
                <p
                  className={`text-${archetypes[selectedArchetype].color}-200 font-medium`}
                >
                  {archetypes[selectedArchetype].trigger}
                </p>
              </div>
            </div>

            <button
              onClick={() => setSelectedArchetype(null)}
              className="mt-8 mx-auto block px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl transition-colors duration-300 backdrop-blur-sm border border-white/20"
            >
              Close Details
            </button>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-black/30 backdrop-blur-sm border-t border-white/10 py-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-slate-400">
            Understanding these archetypes helps us recognize when we're sliding
            into shadow expressions and consciously choose more constructive
            manifestations of our energy.
          </p>
        </div>
      </footer>
    </div>
  );
}
