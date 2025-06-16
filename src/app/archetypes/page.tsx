"use client";
// components/ArchetypeInfographic.tsx (or directly in app/page.tsx)
import React, { useState } from "react";

// Define a type for each archetype's data
interface ArchetypeData {
  title: string;
  subtitle: string;
  icon: string;
  bgColorClass: string;
  borderColorClass: string;
  shadowColorClass: string;
  textColorClass: string;
  essence: string;
  influence: string[];
}

// Data for each archetype
const archetypes: ArchetypeData[] = [
  {
    title: "The Great Mother",
    subtitle: "(Good Feminine)",
    icon: "🌸",
    bgColorClass: "bg-green-700/20",
    borderColorClass: "hover:border-green-400",
    shadowColorClass: "hover:shadow-green-500/20",
    textColorClass: "text-green-300",
    essence:
      "Nurturing, life-giving, compassionate, accepting, foundational, secure.",
    influence: [
      "Trust and Belonging: We see connection and feel a deep sense of belonging, fostering trust in others and the natural order.",
      "Empathy and Compassion: Our perception is colored by empathy, leading us to understand and forgive, focusing on the interconnectedness of all things.",
      "Creativity and Growth: The world appears as a fertile ground for creation, growth, and renewal, encouraging an optimistic and hopeful outlook.",
      "Acceptance: We perceive situations and people with acceptance, recognizing inherent worth and potential.",
    ],
  },
  {
    title: "The Tyrannical Father",
    subtitle: "(Evil Masculine)",
    icon: "⛓️",
    bgColorClass: "bg-red-700/20",
    borderColorClass: "hover:border-red-400",
    shadowColorClass: "hover:shadow-red-500/20",
    textColorClass: "text-red-300",
    essence:
      "Authoritarian, oppressive, rigid, judgmental, demanding, destructive, isolating.",
    influence: [
      "Threat and Scarcity: The world is seen as a dangerous place where resources are limited, and one must constantly fight for survival or dominance.",
      "Hierarchy and Submission: We perceive rigid social structures, rules, and power dynamics, often feeling oppressed or compelled to oppress others.",
      "Guilt and Punishment: Every action is scrutinized for potential failure or wrongdoing, leading to self-criticism, anxiety, and a perception of impending retribution.",
      "Isolation: Connection is replaced by separation, fostering a sense of being alone against a harsh and unforgiving world.",
    ],
  },
  {
    title: "Baphomet",
    subtitle: "(Evil Feminine)",
    icon: "😈",
    bgColorClass: "bg-purple-700/20",
    borderColorClass: "hover:border-purple-400",
    shadowColorClass: "hover:shadow-purple-500/20",
    textColorClass: "text-purple-300",
    essence:
      "Seductive, chaotic, deceptive, manipulative, hedonistic, destructive of boundaries, tempting.",
    influence: [
      "Deception and Illusion: We perceive a world rife with hidden agendas and illusions, where appearances are deceiving, and truth is elusive or irrelevant.",
      "Impulsivity and Chaos: Logic and order are undermined, leading to a perception of randomness and an attraction to sensation over stability. Boundaries blur.",
      "Manipulation and Self-Serving: Interactions are seen through a lens of personal gain, where others are objects to be used for pleasure or power, fostering cynicism.",
      "Nihilism/Despair: The lack of inherent meaning or moral structure can lead to a sense of pointlessness and a destructive pursuit of immediate gratification.",
    ],
  },
  {
    title: "The Wise Old Man",
    subtitle: "(Good Masculine)",
    icon: "🦉",
    bgColorClass: "bg-blue-700/20",
    borderColorClass: "hover:border-blue-400",
    shadowColorClass: "hover:shadow-blue-500/20",
    textColorClass: "text-blue-300",
    essence:
      "Wisdom, guidance, integrity, order, reason, protection, spiritual insight, self-discipline.",
    influence: [
      "Clarity and Understanding: We seek patterns, knowledge, and deeper truths, perceiving challenges as opportunities for growth and learning.",
      "Order and Justice: The world is seen as having inherent laws and principles, fostering a desire for justice, fairness, and ethical conduct.",
      "Purpose and Direction: We find meaning in our actions and perceive a clear path forward, guided by inner conviction and objective truth.",
      "Responsibility and Integrity: Our perception emphasizes accountability, self-mastery, and the importance of acting with honor and conviction.",
    ],
  },
];

const ArchetypeInfographic: React.FC = () => {
  // State to hold the data of the currently active archetype for the info panel
  const [activeArchetype, setActiveArchetype] = useState<ArchetypeData | null>(
    null
  );

  return (
    // Global styles (typically in layout.tsx or global.css in a real Next.js app)
    // For this immersive, applied directly to the body like structure
    <div className="min-h-screen flex flex-col items-center justify-center p-5 bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100 selection:bg-purple-700 selection:text-white">
      <div className="max-w-6xl w-full bg-gray-800 rounded-3xl p-10 shadow-2xl flex flex-col items-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-6 text-center leading-tight">
          Your Four Core Archetypes
        </h1>
        <p className="text-lg text-center mb-8 px-4 text-gray-300">
          These fundamental archetypes –{" "}
          <span className="font-semibold text-white">
            The Great Mother, The Tyrannical Father, Baphomet, and The Wise Old
            Man
          </span>{" "}
          – define the lenses through which we perceive the world. Click on each
          card to explore their influence.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full mt-8">
          {archetypes.map((archetype) => (
            <div
              key={archetype.title.replace(/\s/g, "-").toLowerCase()} // Unique key for React list rendering
              className={`
                                relative flex flex-col items-center text-center p-6 rounded-xl cursor-pointer transition-all duration-300
                                border-2 border-transparent hover:transform hover:-translate-y-1
                                shadow-md hover:shadow-xl
                                ${archetype.bgColorClass} ${
                archetype.borderColorClass
              } ${archetype.shadowColorClass}
                                ${
                                  activeArchetype?.title === archetype.title
                                    ? "border-purple-500 shadow-lg transform -translate-y-1"
                                    : ""
                                }
                            `}
              onClick={() => setActiveArchetype(archetype)}
            >
              <span className="text-5xl mb-4">{archetype.icon}</span>
              <div
                className={`text-2xl font-bold mb-1 ${archetype.textColorClass}`}
              >
                {archetype.title}
              </div>
              <div
                className={`text-lg font-semibold ${archetype.textColorClass.replace(
                  "300",
                  "400"
                )}`}
              >
                {archetype.subtitle}
              </div>
            </div>
          ))}
        </div>

        <div
          className={`
                        mt-8 p-8 rounded-3xl w-full bg-gray-900 shadow-inner
                        transition-all duration-500 ease-in-out
                        ${
                          activeArchetype
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-5"
                        }
                    `}
          style={{ minHeight: "200px" }} // Maintain height during transition
        >
          {activeArchetype ? (
            <>
              <h3 className="text-3xl font-bold text-purple-400 mb-4 text-center">
                {activeArchetype.title}
              </h3>
              <div className="text-gray-200">
                <h4 className="text-xl font-semibold text-gray-300 mb-2">
                  Essence:
                </h4>
                <p className="mb-4">{activeArchetype.essence}</p>
                <h4 className="text-xl font-semibold text-gray-300 mb-2">
                  Influence on Perception:
                </h4>
                <ul className="list-disc ml-5 space-y-1">
                  {activeArchetype.influence.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </>
          ) : (
            <p className="text-center text-gray-400 text-lg">
              Select any of the four archetype cards above to see its detailed
              description and how it influences perception.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ArchetypeInfographic; // Export the component for use in Next.js pages
