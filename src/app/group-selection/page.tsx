import React from "react";

const GroupSelectionInfographic: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 p-5">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white p-10 text-center">
          <h1 className="text-5xl font-light mb-3">Group Selection</h1>
          <p className="text-xl opacity-90">
            Evolution beyond the individual level
          </p>
        </div>

        <div className="p-10">
          {/* Definition Section */}
          <div className="mb-12">
            <div className="bg-gradient-to-r from-blue-400 to-blue-600 text-white p-8 rounded-2xl text-lg">
              <strong>Group Selection</strong> is an evolutionary mechanism
              where natural selection acts on groups of organisms rather than
              just individuals. Traits that benefit the group as a whole can
              evolve even if they reduce individual fitness.
            </div>
          </div>

          {/* Individual vs Group Selection */}
          <div className="mb-12">
            <h2 className="text-4xl font-light text-slate-700 mb-5 pb-3 border-b-4 border-blue-500">
              Individual vs Group Selection
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-center my-8">
              <div className="bg-gray-50 p-6 rounded-2xl text-center border-4 border-red-400 hover:transform hover:-translate-y-2 transition-all duration-300 hover:shadow-lg">
                <div className="text-4xl mb-4">🦎</div>
                <div className="text-xl font-bold text-slate-700 mb-4">
                  Individual Selection
                </div>
                <p className="mb-4">
                  Traits evolve because they benefit the individual organism's
                  survival and reproduction
                </p>
                <p>
                  <strong>Example:</strong> Faster running speed helps an
                  individual escape predators
                </p>
              </div>

              <div className="text-3xl font-bold text-gray-500 text-center hidden lg:block">
                VS
              </div>

              <div className="bg-gray-50 p-6 rounded-2xl text-center border-4 border-green-500 hover:transform hover:-translate-y-2 transition-all duration-300 hover:shadow-lg">
                <div className="text-4xl mb-4">🐜</div>
                <div className="text-xl font-bold text-slate-700 mb-4">
                  Group Selection
                </div>
                <p className="mb-4">
                  Traits evolve because they benefit the group, even if costly
                  to individuals
                </p>
                <p>
                  <strong>Example:</strong> Alarm calls that warn others but
                  attract predator attention
                </p>
              </div>
            </div>
          </div>

          {/* Mechanisms */}
          <div className="mb-12">
            <h2 className="text-4xl font-light text-slate-700 mb-5 pb-3 border-b-4 border-blue-500">
              Mechanisms of Group Selection
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-8">
              <div className="bg-gradient-to-br from-purple-400 to-purple-600 text-white p-6 rounded-2xl text-center">
                <div className="text-xl font-bold mb-3">
                  📊 Differential Group Success
                </div>
                <p>
                  Groups with beneficial traits survive and reproduce better
                  than other groups
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-400 to-purple-600 text-white p-6 rounded-2xl text-center">
                <div className="text-xl font-bold mb-3">
                  🌱 Group Proliferation
                </div>
                <p>
                  Successful groups split and form new groups, spreading
                  beneficial traits
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-400 to-purple-600 text-white p-6 rounded-2xl text-center">
                <div className="text-xl font-bold mb-3">
                  ⚖️ Multi-level Selection
                </div>
                <p>
                  Selection operates simultaneously at individual and group
                  levels
                </p>
              </div>
            </div>
          </div>

          {/* Examples */}
          <div className="mb-12">
            <h2 className="text-4xl font-light text-slate-700 mb-5 pb-3 border-b-4 border-blue-500">
              Examples in Nature
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-blue-500 hover:transform hover:-translate-y-1 transition-all duration-300 hover:shadow-lg">
                <div className="text-xl font-bold text-slate-700 mb-3">
                  🐝 Eusocial Insects
                </div>
                <p>
                  Worker ants and bees sacrifice reproduction to help the
                  colony. The sterile worker caste benefits the group but not
                  the individual.
                </p>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-blue-500 hover:transform hover:-translate-y-1 transition-all duration-300 hover:shadow-lg">
                <div className="text-xl font-bold text-slate-700 mb-3">
                  🚨 Alarm Calls
                </div>
                <p>
                  Prairie dogs give warning calls when predators approach,
                  helping the group but potentially attracting danger to
                  themselves.
                </p>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-blue-500 hover:transform hover:-translate-y-1 transition-all duration-300 hover:shadow-lg">
                <div className="text-xl font-bold text-slate-700 mb-3">
                  🦠 Bacterial Cooperation
                </div>
                <p>
                  Some bacteria produce costly public goods (like
                  iron-scavenging molecules) that benefit the entire bacterial
                  community.
                </p>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-blue-500 hover:transform hover:-translate-y-1 transition-all duration-300 hover:shadow-lg">
                <div className="text-xl font-bold text-slate-700 mb-3">
                  👥 Human Cooperation
                </div>
                <p>
                  Large-scale cooperation in human societies may have evolved
                  through group selection for cooperative groups.
                </p>
              </div>
            </div>
          </div>

          {/* Controversy */}
          <div className="mb-12">
            <div className="bg-gradient-to-r from-yellow-200 to-orange-300 p-8 rounded-2xl border-l-8 border-orange-500">
              <div className="text-xl font-bold text-gray-800 mb-4">
                ⚡ Scientific Controversy
              </div>
              <p className="text-gray-800">
                Group selection remains debated among evolutionary biologists.
                Critics argue that apparent group selection can often be
                explained by individual-level selection, kin selection, or
                reciprocal altruism. Supporters argue that true group selection
                occurs when group benefits cannot be reduced to individual
                benefits.
              </p>
            </div>
          </div>

          {/* Key Takeaways */}
          <div className="mb-12">
            <h2 className="text-4xl font-light text-slate-700 mb-5 pb-3 border-b-4 border-blue-500">
              Key Takeaways
            </h2>
            <div className="bg-gray-100 p-8 rounded-2xl">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-green-600 font-bold text-xl mr-3">
                    ✓
                  </span>
                  <span className="text-slate-700">
                    Group selection can overcome individual selection when
                    groups vary significantly in composition
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold text-xl mr-3">
                    ✓
                  </span>
                  <span className="text-slate-700">
                    It requires group-level differences to be maintained despite
                    individual migration
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold text-xl mr-3">
                    ✓
                  </span>
                  <span className="text-slate-700">
                    Most effective when combined with mechanisms that reduce
                    within-group competition
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold text-xl mr-3">
                    ✓
                  </span>
                  <span className="text-slate-700">
                    May explain the evolution of extreme cooperation and
                    altruism in some species
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold text-xl mr-3">
                    ✓
                  </span>
                  <span className="text-slate-700">
                    Continues to be an active area of research and theoretical
                    development
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupSelectionInfographic;
