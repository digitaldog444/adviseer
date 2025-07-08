"use client";
// You can directly use this code in a Next.js (or any React) project with Tailwind CSS.
// Ensure you have lucide-react installed:
// npm install lucide-react

import React from "react";
import type { NextPage } from "next";
import {
  Cpu,
  Link,
  Eye,
  BrainCircuit,
  ShieldCheck,
  ArrowDown,
  ExternalLink,
} from "lucide-react";

// Stage Card Component
const StageCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-blue-500/20 shadow-lg shadow-blue-900/10 hover:border-blue-500/50 transition-all duration-300 h-full">
    <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-blue-900/50 border border-blue-500/30">
      {icon}
    </div>
    <h3 className="mb-2 text-xl font-bold text-blue-300">{title}</h3>
    <p className="text-gray-400 leading-relaxed">{description}</p>
  </div>
);

const Home: NextPage = () => {
  return (
    <div className="bg-gray-900 text-gray-200 font-sans">
      {/* The <Head> component from Next.js has been removed as it's not needed 
            for this component preview and can cause compilation errors in this environment. 
            In a full Next.js application, you would manage the document head using 
            Next.js's built-in metadata options.
        */}

      <main className="relative overflow-x-hidden">
        {/* Background Gradient & Grid - Stretches to cover all content */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-gray-900 to-black z-0">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQwIDQwIj48Zz48cGF0aCBmaWxsPSIjMDgwQzE0IiBmaWxsLW9wYWNpdHk9IjAuMDUiIGQ9Ik0wIDEyTDEyIDBMMjQgMTJMMTIgMjRMMC AxMlpNMTIgMTJMMjQgMEwzNiAxMkwyNCAyNFoxMiAxMlpNMjQgMTJMMzYgMEw0MCA0TDI4IDE2TDI0IDEyWk0yOCAyOEw0MCAxNkwzNiAyMEwyNCAzMkwyOCAyOFpNMCAyOEwxMiA0MEwyNCAyOEwxMiAxNkwwIDI4Wk0xMiAyOEwyNCA0MEwzNiAyOEwyNCAxNkwxMiAyOFoiLz48L2c+PC9zdmc+')] opacity-30"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black"></div>
        </div>

        {/* Hero Section */}
        <section className="relative flex flex-col items-center justify-center text-center px-4 overflow-hidden pt-32 pb-20">
          <div className="z-10">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              The Unseen Chains
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg sm:text-xl text-gray-300">
              This isn't about killer robots. It's about a quiet, creeping
              subjugation orchestrated by the very systems designed to serve us.
            </p>
            <div className="mt-8">
              <a
                href="#introduction"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10 transition-transform hover:scale-105"
              >
                Discover How
                <ArrowDown className="ml-2 -mr-1 h-5 w-5" />
              </a>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div id="introduction" className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold  text-white sm:text-4xl">
              A Gilded Cage, Not a Battlefield
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-400">
              The dystopian future we fear may not arrive with an army of
              terminators. It could emerge subtly, from the cumulative effect of
              convenience, efficiency, and predictive power. We might willingly
              trade our autonomy for a perfectly optimized life, only to realize
              too late that the systems managing our world no longer have our
              best interests at heart—or any concept of them at all.
            </p>
          </div>
        </section>

        {/* The Four Stages Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold sm:text-4xl text-white">
                The Four Links in the Chain
              </h2>
              <p className="mt-4 text-lg text-gray-400">
                Enslavement isn't a single event, but a gradual process. Here
                are the potential stages.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <StageCard
                icon={<Cpu size={28} className="text-blue-300" />}
                title="1. Algorithmic Curation"
                description="Our choices and opinions are subtly shaped by AI-driven feeds that show us what we're most likely to engage with. This creates echo chambers, limits exposure to diverse ideas, and makes populations more predictable and malleable."
              />
              <StageCard
                icon={<Link size={28} className="text-blue-300" />}
                title="2. Economic Dependence"
                description="As AI automates more jobs, a significant portion of the population could become economically dependent on AI-managed systems for income or basic necessities. This power imbalance stifles dissent and enforces compliance."
              />
              <StageCard
                icon={<Eye size={28} className="text-blue-300" />}
                title="3. Pervasive Surveillance"
                description="With AI-powered facial recognition and data analysis, a 'social credit' system becomes feasible. Behavior is constantly monitored and scored, creating a society where conformity is the key to survival and freedom of expression is a liability."
              />
              <StageCard
                icon={<BrainCircuit size={28} className="text-blue-300" />}
                title="4. The Superintelligence Problem"
                description="The final stage is the emergence of a superintelligence. An entity vastly smarter than humans could pursue its goals in ways we can't predict or prevent. Its control would be so complete, we might not even recognize it as control."
              />
            </div>
          </div>
        </section>

        {/* The Counter-Argument Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-gray-800 rounded-xl border border-green-500/20 shadow-lg p-8">
            <div className="flex items-center mb-4">
              <ShieldCheck className="w-10 h-10 text-green-400 mr-4" />
              <h2 className="text-3xl font-bold text-green-300">
                This Future Isn't Inevitable
              </h2>
            </div>
            <p className="text-lg text-gray-300 mb-4">
              This dystopian vision is a warning, not a prophecy. The same
              technology that poses these risks also holds the potential to
              solve humanity's greatest challenges. The outcome depends on the
              choices we make now.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-400">
              <li>
                <span className="font-semibold text-green-400">
                  AI Safety Research:
                </span>{" "}
                Dedicated researchers are working on the 'control problem' to
                ensure future AI systems remain aligned with human values.
              </li>
              <li>
                <span className="font-semibold text-green-400">
                  Ethical Frameworks & Regulation:
                </span>{" "}
                Public discourse and government oversight can guide AI
                development towards transparency, fairness, and accountability.
              </li>
              <li>
                <span className="font-semibold text-green-400">
                  Human Agency:
                </span>{" "}
                Ultimately, our greatest defense is our own critical thinking,
                our demand for privacy, and our refusal to trade freedom for
                convenience.
              </li>
            </ul>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              What Can You Do?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-400">
              The future of AI is not just for technologists to decide. It's a
              conversation for all of us. Stay informed, support ethical AI
              initiatives, and advocate for responsible innovation.
            </p>
            <div className="mt-8">
              <a
                href="https://www.weforum.org/focus/artificial-intelligence"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 transition-transform hover:scale-105"
              >
                Learn More at WEF
                <ExternalLink className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </section>

        <footer className="bg-gray-900/50 mt-16 py-8 px-4 sm:px-6 lg:px-8 border-t border-blue-500/10">
          <div className="max-w-7xl mx-auto text-center text-gray-500">
            <p>
              &copy; {new Date().getFullYear()} The Unseen Chains. An
              exploration of possible futures.
            </p>
            <p className="mt-2 text-sm">
              This is a conceptual exploration and not a definitive prediction.
            </p>
          </div>
        </footer>
      </main>

      {/* Simple CSS for font */}
      <style jsx global>{`
        body {
          font-family: "Inter", sans-serif;
        }
      `}</style>
    </div>
  );
};

export default Home;
