"use client";

import React from "react";

interface UniverseBoxProps {
  title: string;
  subtitle: string;
  isWinner?: boolean;
}

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

interface EvidenceItemProps {
  icon: string;
  title: string;
  description: string;
}

const UniverseBox: React.FC<UniverseBoxProps> = ({
  title,
  subtitle,
  isWinner = false,
}) => (
  <div
    className={`
    bg-gradient-to-br from-pink-300 to-purple-200 text-gray-800 
    p-5 rounded-lg min-w-[120px] text-center font-bold relative
    shadow-lg transition-transform duration-300 hover:scale-105
    ${isWinner ? "border-4 border-red-400 animate-pulse shadow-red-400/60" : ""}
  `}
  >
    <div>{title}</div>
    <div className="text-xs mt-1 font-normal">{subtitle}</div>
  </div>
);

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
}) => (
  <div
    className="
    bg-white/10 p-6 rounded-2xl border border-white/20 
    transition-all duration-300 hover:-translate-y-2 hover:bg-white/15
    backdrop-blur-sm
  "
  >
    <div className="text-4xl mb-4 text-center">{icon}</div>
    <div className="text-xl font-bold mb-3 text-cyan-300">{title}</div>
    <p className="text-gray-200 leading-relaxed">{description}</p>
  </div>
);

const EvidenceItem: React.FC<EvidenceItemProps> = ({
  icon,
  title,
  description,
}) => (
  <div className="bg-white/10 p-5 rounded-lg border-l-4 border-cyan-300">
    <div className="text-3xl mb-3 text-center">{icon}</div>
    <div className="text-lg font-bold text-cyan-300 mb-2">{title}</div>
    <p className="text-gray-200 text-sm leading-relaxed">{description}</p>
  </div>
);

const RRSimInfographic: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white p-5">
      <div className="max-w-6xl mx-auto bg-white/5 backdrop-blur-lg rounded-3xl p-10 shadow-2xl">
        {/* Header */}
        <h1 className="text-center text-6xl font-bold mb-2 bg-gradient-to-r from-red-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
          RRSim Theory
        </h1>
        <div className="text-center text-xl text-gray-400 mb-10">
          Recursive Reproductive Simulation
        </div>

        {/* Core Concept */}
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-8 rounded-2xl mb-8 text-center text-lg leading-relaxed shadow-lg">
          <strong>Core Concept:</strong> Any universe capable of simulating
          itself creates an infinite loop of nested simulations, where each
          simulation contains the simulation process itself, leading to
          competing chains of universes that evolve to maximize consciousness
          production.
        </div>

        {/* Simulation Chain */}
        <h2 className="text-center text-3xl font-bold text-cyan-300 mb-8 mt-12">
          The Simulation Chain
        </h2>

        <div className="flex justify-center items-center mb-12 flex-wrap gap-5">
          <UniverseBox title="Base Universe" subtitle="Original Reality" />
          <div className="text-3xl text-cyan-300 mx-2">→</div>
          <UniverseBox title="Simulation 1" subtitle="First Layer" />
          <div className="text-3xl text-cyan-300 mx-2">→</div>
          <UniverseBox title="Simulation 2" subtitle="Second Layer" />
          <div className="text-3xl text-cyan-300 mx-2">→</div>
          <UniverseBox
            title="Simulation N"
            subtitle="Most Consciousness"
            isWinner
          />
          <div className="text-3xl text-cyan-300 mx-2">→</div>
          <div className="text-2xl text-cyan-300">∞</div>
        </div>

        {/* Competition Section */}
        <div className="bg-gradient-to-r from-pink-500 to-yellow-400 text-gray-800 p-8 rounded-2xl mb-8 text-center shadow-lg">
          <h2 className="text-2xl font-bold mb-4">
            The Competition: Consciousness Maximization
          </h2>
          <p className="mb-2">
            <strong>Winner:</strong> The simulation chain that produces the most
            consciousness
          </p>
          <p className="mb-6">
            <strong>Anthropic Selection:</strong> We are most likely to find
            ourselves in the winning chain
          </p>

          {/* Consciousness Meter */}
          <div className="relative bg-gradient-to-r from-red-400 via-cyan-300 to-blue-400 h-5 rounded-full mb-4 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
          </div>
          <p className="text-sm">
            Higher consciousness density = higher probability of being "there"
          </p>
        </div>

        {/* Evidence Section */}
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-8 rounded-2xl mb-8 shadow-lg">
          <h2 className="text-2xl font-bold text-center mb-6">
            Observable Evidence: Universe "Game Mechanics"
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <EvidenceItem
              icon="🕳️"
              title="Information Hiding"
              description="Black holes create event horizons that permanently hide information, preventing any single entity from achieving perfect knowledge and maintaining competitive uncertainty."
            />
            <EvidenceItem
              icon="⚡"
              title="Speed Limit"
              description="The speed of light prevents instant universal domination, forcing gradual expansion and allowing multiple civilizations to develop independently."
            />
            <EvidenceItem
              icon="🌌"
              title="Vast Universe"
              description="Enormous size ensures causally disconnected regions where independent consciousness can emerge and flourish simultaneously."
            />
            <EvidenceItem
              icon="🎲"
              title="Quantum Uncertainty"
              description="Built-in randomness prevents deterministic outcomes and maintains the complexity necessary for consciousness development."
            />
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <FeatureCard
            icon="🔄"
            title="Recursive Structure"
            description="Each simulation contains the capability to simulate itself, creating infinite nested loops where computation includes its own computation process."
          />
          <FeatureCard
            icon="🧠"
            title="Consciousness Optimization"
            description="Physical laws appear fine-tuned not for life specifically, but for maximizing total consciousness production across all simulation layers."
          />
          <FeatureCard
            icon="💻"
            title="Computational Feasibility"
            description="Advanced civilizations eventually overcome computational resource limitations, making universe simulation technologically achievable."
          />
          <FeatureCard
            icon="🎯"
            title="Anthropic Selection"
            description="We observe ourselves in the simulation chain with maximum consciousness because that's where most observers exist to make observations."
          />
        </div>

        {/* Footer */}
        <div className="text-center p-6 bg-white/5 rounded-lg italic text-gray-400">
          <p>
            <strong>Testability Challenge:</strong> The only way to verify RRSim
            would be to simulate alternate universes and measure consciousness
            production - but doing so would itself extend the simulation chain.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RRSimInfographic;
