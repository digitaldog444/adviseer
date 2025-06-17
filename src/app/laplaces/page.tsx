// pages/index.tsx
import { useEffect, useRef } from "react";
import Head from "next/head";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

interface ParticleProps {
  left: string;
  top: string;
  size: string;
  animationDuration: string;
  animationDirection?: string;
}

const Particle: React.FC<ParticleProps> = ({
  left,
  top,
  size,
  animationDuration,
  animationDirection = "",
}) => (
  <div
    className={`absolute ${size} bg-white rounded-full opacity-30`}
    style={{
      left,
      top,
      animation: `float ${animationDuration} ease-in-out infinite ${animationDirection}`,
    }}
  />
);

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  year,
  title,
  description,
}) => (
  <div className="relative pl-12 pb-8">
    <div className="timeline-dot"></div>
    <div className="bg-white rounded-lg shadow-lg p-6 card-hover">
      <h4 className="text-xl font-bold text-gray-800 mb-2">
        {year} - {title}
      </h4>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

interface ConceptCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  bgColor: string;
  iconColor: string;
}

const ConceptCard: React.FC<ConceptCardProps> = ({
  icon,
  title,
  description,
  bgColor,
  iconColor,
}) => (
  <div className="bg-white rounded-2xl shadow-lg p-8 card-hover">
    <div
      className={`w-16 h-16 ${bgColor} rounded-full flex items-center justify-center mb-6`}
    >
      <div className={iconColor}>{icon}</div>
    </div>
    <h3 className="text-2xl font-bold text-gray-800 mb-4">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

interface ChallengeCardProps {
  title: string;
  description: string;
  borderColor: string;
}

const ChallengeCard: React.FC<ChallengeCardProps> = ({
  title,
  description,
  borderColor,
}) => (
  <div
    className={`bg-white rounded-2xl shadow-lg p-8 card-hover border-l-4 ${borderColor}`}
  >
    <h3 className="text-2xl font-bold text-gray-800 mb-4">{title}</h3>
    <p className="text-gray-700 leading-relaxed">{description}</p>
  </div>
);

const LaplacesDemon: React.FC = () => {
  const contentRef = useRef<HTMLElement>(null);

  const scrollToContent = (): void => {
    contentRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    // Intersection Observer for fade-in animations
    const observerOptions: IntersectionObserverInit = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
        }
      });
    }, observerOptions);

    // Observe all sections for animations
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const concepts = [
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          ></path>
        </svg>
      ),
      title: "Determinism",
      description:
        "The philosophical idea that every event is the inevitable result of prior causes. If the universe is deterministic, then the future is already fixed by the present state.",
      bgColor: "bg-purple-100",
      iconColor: "text-purple-600",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 10V3L4 14h7v7l9-11h-7z"
          ></path>
        </svg>
      ),
      title: "Perfect Knowledge",
      description:
        "The demon would need to know the exact position, velocity, and all forces acting on every particle in the universe - an impossible level of precision.",
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
          ></path>
        </svg>
      ),
      title: "Computational Power",
      description:
        "The demon would need infinite computational power to process all the data and calculate the trajectories of every particle in the universe.",
      bgColor: "bg-green-100",
      iconColor: "text-green-600",
    },
  ];

  const challenges = [
    {
      title: "Quantum Mechanics",
      description:
        "The Heisenberg Uncertainty Principle states that we cannot simultaneously know both the exact position and momentum of a particle. This fundamental limit makes perfect knowledge impossible, not just practically but theoretically.",
      borderColor: "border-red-500",
    },
    {
      title: "Chaos Theory",
      description:
        "Even in classical systems, tiny differences in initial conditions can lead to vastly different outcomes (the butterfly effect). This sensitive dependence on initial conditions makes long-term prediction practically impossible.",
      borderColor: "border-orange-500",
    },
    {
      title: "Computational Limits",
      description:
        "The computational resources required would be astronomical. Some argue that simulating the universe would require more matter and energy than the universe itself contains.",
      borderColor: "border-yellow-500",
    },
  ];

  const timelineItems = [
    {
      year: "1814",
      title: "The Original Concept",
      description:
        'Pierre-Simon Laplace introduces the concept in "A Philosophical Essay on Probabilities"',
    },
    {
      year: "1927",
      title: "Heisenberg's Challenge",
      description:
        "The Uncertainty Principle fundamentally challenges the possibility of perfect knowledge",
    },
    {
      year: "1960s-70s",
      title: "Chaos Theory",
      description:
        "Discovery of chaotic systems shows that even deterministic systems can be unpredictable",
    },
    {
      year: "Modern Era",
      title: "Computational Complexity",
      description:
        "Advanced understanding of computational limits and information theory",
    },
  ];

  return (
    <div className={inter.className}>
      <Head>
        <title>Laplace&apos;s Demon - The Ultimate Intelligence</title>
        <meta
          name="description"
          content="Explore Laplace's demon, the philosophical thought experiment about determinism and the limits of prediction."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <style jsx>{`
        .gradient-bg {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }
        .card-hover {
          transition: all 0.3s ease;
        }
        .card-hover:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }
        .timeline-dot {
          width: 12px;
          height: 12px;
          background: #667eea;
          border-radius: 50%;
          position: absolute;
          left: -6px;
          top: 8px;
        }
        .fade-in {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInUp 0.6s ease forwards;
        }
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>

      {/* Hero Section */}
      <section className="gradient-bg min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Laplace&apos;s Demon
            </h1>
            <p className="text-xl md:text-2xl text-white opacity-90 mb-8 max-w-3xl mx-auto">
              An intelligence knowing all forces and positions in the universe
              could predict the entire future and past
            </p>
            <button
              onClick={scrollToContent}
              className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Explore the Concept
            </button>
          </div>
        </div>

        {/* Floating particles animation */}
        <div className="absolute inset-0 overflow-hidden">
          <Particle
            left="20%"
            top="20%"
            size="w-2 h-2"
            animationDuration="6s"
          />
          <Particle
            left="80%"
            top="30%"
            size="w-1 h-1"
            animationDuration="8s"
            animationDirection="reverse"
          />
          <Particle
            left="60%"
            top="70%"
            size="w-3 h-3"
            animationDuration="10s"
          />
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-16" ref={contentRef}>
        {/* Introduction */}
        <section className="mb-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
              What is Laplace&apos;s Demon?
            </h2>
            <div className="bg-white rounded-2xl shadow-lg p-8 card-hover">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Laplace&apos;s demon is a thought experiment proposed by French
                mathematician Pierre-Simon Laplace in 1814. It imagines a
                hypothetical intelligence that knows the exact location and
                momentum of every atom in the universe at any given moment.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                According to Laplace, such an intelligence could use
                Newton&apos;s laws of mechanics to predict the entire future of
                the universe, as well as reconstruct its entire past. This
                concept became a cornerstone in discussions about determinism
                and free will.
              </p>
            </div>
          </div>
        </section>

        {/* The Original Quote */}
        <section className="mb-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
              Laplace&apos;s Original Words
            </h2>
            <div className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-2xl shadow-lg p-8 card-hover">
              <blockquote className="text-lg italic text-gray-800 leading-relaxed border-l-4 border-purple-500 pl-6">
                &quot;We may regard the present state of the universe as the
                effect of its past and the cause of its future. An intellect
                which at a certain moment would know all forces that set nature
                in motion, and all positions of all items of which nature is
                composed, if this intellect were also vast enough to submit
                these data to analysis, for it nothing would be uncertain and
                the future as well as the past would be present before its
                eyes.&quot;
              </blockquote>
              <cite className="block text-right text-gray-600 mt-4 font-medium">
                — Pierre-Simon Laplace, 1814
              </cite>
            </div>
          </div>
        </section>

        {/* Key Concepts */}
        <section className="mb-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">
              Key Concepts
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {concepts.map((concept, index) => (
                <ConceptCard key={index} {...concept} />
              ))}
            </div>
          </div>
        </section>

        {/* Modern Challenges */}
        <section className="mb-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">
              Why Laplace&apos;s Demon Is Impossible
            </h2>
            <div className="space-y-8">
              {challenges.map((challenge, index) => (
                <ChallengeCard key={index} {...challenge} />
              ))}
            </div>
          </div>
        </section>

        {/* Interactive Timeline */}
        <section className="mb-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">
              Historical Timeline
            </h2>
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-purple-300"></div>
              {timelineItems.map((item, index) => (
                <TimelineItem key={index} {...item} />
              ))}
            </div>
          </div>
        </section>

        {/* Philosophical Implications */}
        <section className="mb-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
              Philosophical Impact
            </h2>
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl shadow-lg p-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Laplace&apos;s demon remains influential in philosophical
                discussions about free will, determinism, and the nature of
                reality. Even though we now know the demon is impossible, it
                continues to provoke important questions:
              </p>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-3">•</span>
                  <span>
                    If the universe is deterministic at a fundamental level, do
                    we truly have free will?
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-3">•</span>
                  <span>
                    What are the fundamental limits of knowledge and prediction?
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-3">•</span>
                  <span>
                    How does quantum indeterminacy affect our understanding of
                    causation?
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-3">•</span>
                  <span>
                    What role does consciousness play in a potentially
                    deterministic universe?
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold mb-4">Continue Exploring</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Laplace&apos;s demon represents humanity&apos;s eternal quest to
            understand and predict the universe. While the demon itself is
            impossible, it continues to inspire scientific and philosophical
            inquiry.
          </p>
          <div className="flex justify-center space-x-6">
            <button className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg transition-colors">
              Learn More About Determinism
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition-colors">
              Explore Quantum Mechanics
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};
