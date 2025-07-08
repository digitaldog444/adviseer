import React, { useState, useEffect } from "react";
import {
  Cpu,
  Link,
  Eye,
  BrainCircuit,
  ShieldCheck,
  ChevronDown,
  ExternalLink,
  AlertTriangle,
  Zap,
  Globe,
  Users,
  Lock,
  Lightbulb,
} from "lucide-react";

// Animated background component
const AnimatedBackground = () => (
  <div className="fixed inset-0 overflow-hidden pointer-events-none">
    <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-800">
      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 3}s`,
          }}
        />
      ))}
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_24%,rgba(255,255,255,0.02)_25%,rgba(255,255,255,0.02)_26%,transparent_27%,transparent_74%,rgba(255,255,255,0.02)_75%,rgba(255,255,255,0.02)_76%,transparent_77%,transparent)] bg-[length:80px_80px]" />
    </div>
  </div>
);

// Enhanced stage card with hover effects
const StageCard = ({ icon, title, description, index, isVisible }: any) => (
  <div
    className={`group relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50 shadow-2xl hover:shadow-purple-500/20 transition-all duration-700 transform ${
      isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
    }`}
    style={{ transitionDelay: `${index * 150}ms` }}
  >
    {/* Gradient border effect */}
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

    <div className="relative z-10">
      <div className="flex items-center justify-center w-20 h-20 mb-6 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-500/30 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="mb-4 text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">
        {title}
      </h3>
      <p className="text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors">
        {description}
      </p>
      <div className="absolute top-4 right-4 text-6xl font-black text-slate-700/20 group-hover:text-purple-500/20 transition-colors">
        {index + 1}
      </div>
    </div>
  </div>
);

// Statistics component
const StatCard = ({ icon, value, label }: any) => (
  <div className="text-center p-6">
    <div className="flex justify-center mb-4">{icon}</div>
    <div className="text-3xl font-bold text-white mb-2">{value}</div>
    <div className="text-slate-400 text-sm uppercase tracking-wide">
      {label}
    </div>
  </div>
);

const UnseenChains = () => {
  const [scrollY, setScrollY] = useState(0);
  const [visibleSections, setVisibleSections] = useState(new Set());

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("[id]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-x-hidden">
      <AnimatedBackground />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-xl border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Unseen Chains
          </div>
          <div className="hidden md:flex space-x-8">
            <a
              href="#stages"
              className="text-slate-300 hover:text-white transition-colors"
            >
              Stages
            </a>
            <a
              href="#hope"
              className="text-slate-300 hover:text-white transition-colors"
            >
              Solutions
            </a>
            <a
              href="#action"
              className="text-slate-300 hover:text-white transition-colors"
            >
              Take Action
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
        <div
          className="text-center transform transition-all duration-1000"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        >
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium mb-6">
              <AlertTriangle className="w-4 h-4 mr-2" />
              Critical Analysis
            </div>
          </div>

          <h1 className="text-5xl md:text-8xl font-black mb-8 leading-tight">
            <span className="block bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
              THE UNSEEN
            </span>
            <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              CHAINS
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            Not killer robots. Not science fiction. Just the quiet surrender of
            human agency to systems that optimize everything except our freedom.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() =>
                document
                  .getElementById("intro")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full font-semibold hover:from-purple-500 hover:to-blue-500 transform hover:scale-105 transition-all duration-300 flex items-center justify-center"
            >
              Explore the Warning
              <ChevronDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </button>
            <button className="px-8 py-4 border border-slate-600 rounded-full font-semibold hover:bg-slate-800 transition-all duration-300">
              Skip to Solutions
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-slate-500" />
        </div>
      </section>

      {/* Introduction */}
      <section id="intro" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                A Gilded Cage, Not a Battlefield
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed mb-8">
                The dystopian future we fear may not arrive with an army of
                terminators. It could emerge subtly, from the cumulative effect
                of convenience, efficiency, and predictive power.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                We might willingly trade our autonomy for a perfectly optimized
                life, only to realize too late that the systems managing our
                world no longer have our best interests at heart—or any concept
                of them at all.
              </p>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-2 gap-8">
              <StatCard
                icon={<Globe className="w-8 h-8 text-purple-400" />}
                value="3.8B"
                label="Algorithm Users"
              />
              <StatCard
                icon={<Users className="w-8 h-8 text-blue-400" />}
                value="47%"
                label="Jobs at Risk"
              />
              <StatCard
                icon={<Eye className="w-8 h-8 text-cyan-400" />}
                value="1B+"
                label="Cameras Worldwide"
              />
              <StatCard
                icon={<Zap className="w-8 h-8 text-yellow-400" />}
                value="2029"
                label="AGI Predicted"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Four Stages */}
      <section
        id="stages"
        className="py-24 px-6 bg-gradient-to-b from-transparent to-slate-800/30"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              The Four Links in the Chain
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Enslavement isn't a single event, but a gradual process. Here are
              the stages of our potential digital subjugation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <StageCard
              icon={<Cpu size={32} className="text-purple-400" />}
              title="Algorithmic Curation"
              description="Our choices and opinions are subtly shaped by AI-driven feeds that show us what we're most likely to engage with. This creates echo chambers, limits exposure to diverse ideas, and makes populations more predictable and malleable."
              index={0}
              isVisible={visibleSections.has("stages")}
            />
            <StageCard
              icon={<Link size={32} className="text-blue-400" />}
              title="Economic Dependence"
              description="As AI automates more jobs, a significant portion of the population could become economically dependent on AI-managed systems for income or basic necessities. This power imbalance stifles dissent and enforces compliance."
              index={1}
              isVisible={visibleSections.has("stages")}
            />
            <StageCard
              icon={<Eye size={32} className="text-cyan-400" />}
              title="Pervasive Surveillance"
              description="With AI-powered facial recognition and data analysis, a 'social credit' system becomes feasible. Behavior is constantly monitored and scored, creating a society where conformity is the key to survival."
              index={2}
              isVisible={visibleSections.has("stages")}
            />
            <StageCard
              icon={<BrainCircuit size={32} className="text-red-400" />}
              title="The Superintelligence Problem"
              description="The final stage is the emergence of a superintelligence. An entity vastly smarter than humans could pursue its goals in ways we can't predict or prevent. Its control would be so complete, we might not even recognize it as control."
              index={3}
              isVisible={visibleSections.has("stages")}
            />
          </div>
        </div>
      </section>

      {/* Hope Section */}
      <section id="hope" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-3xl border border-green-500/20 p-12 backdrop-blur-xl">
            <div className="flex items-center mb-8">
              <div className="w-16 h-16 rounded-2xl bg-green-500/20 flex items-center justify-center mr-6">
                <ShieldCheck className="w-8 h-8 text-green-400" />
              </div>
              <h2 className="text-4xl font-bold text-green-300">
                This Future Isn't Inevitable
              </h2>
            </div>

            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              This dystopian vision is a warning, not a prophecy. The same
              technology that poses these risks also holds the potential to
              solve humanity's greatest challenges. The outcome depends on the
              choices we make now.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                  <Lock className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="font-semibold text-green-300 mb-2">
                  AI Safety Research
                </h3>
                <p className="text-sm text-slate-400">
                  Dedicated researchers are working on the 'control problem' to
                  ensure future AI systems remain aligned with human values.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="font-semibold text-green-300 mb-2">
                  Ethical Frameworks
                </h3>
                <p className="text-sm text-slate-400">
                  Public discourse and government oversight can guide AI
                  development towards transparency, fairness, and
                  accountability.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="font-semibold text-green-300 mb-2">
                  Human Agency
                </h3>
                <p className="text-sm text-slate-400">
                  Our greatest defense is our own critical thinking, our demand
                  for privacy, and our refusal to trade freedom for convenience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section id="action" className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
            What Can You Do?
          </h2>
          <p className="text-xl text-slate-300 leading-relaxed mb-12">
            The future of AI is not just for technologists to decide. It's a
            conversation for all of us. Stay informed, support ethical AI
            initiatives, and advocate for responsible innovation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.weforum.org/focus/artificial-intelligence"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full font-semibold hover:from-purple-500 hover:to-blue-500 transform hover:scale-105 transition-all duration-300"
            >
              Learn More at WEF
              <ExternalLink className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <button className="px-8 py-4 border border-slate-600 rounded-full font-semibold hover:bg-slate-800 transition-all duration-300">
              Share This Warning
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-700/50 bg-slate-800/30">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">
            Unseen Chains
          </div>
          <p className="text-slate-400 mb-2">
            &copy; {new Date().getFullYear()} An exploration of possible
            futures.
          </p>
          <p className="text-sm text-slate-500">
            This is a conceptual exploration and not a definitive prediction.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default UnseenChains;
