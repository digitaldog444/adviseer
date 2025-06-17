const ToxinResponse = () => {
  return (
    <div>
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Genetic Toxin Response
          </h1>
          <p className="text-xl md:text-2xl opacity-90">
            A Framework for Understanding Intergroup Dynamics
          </p>
        </div>
      </header>

      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-6">
          <div className="flex justify-center space-x-8 py-4">
            <a
              href="#overview"
              className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
            >
              Overview
            </a>
            <a
              href="#stages"
              className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
            >
              Four Stages
            </a>
            <a
              href="#biological"
              className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
            >
              Biological Basis
            </a>
            <a
              href="#applications"
              className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
            >
              Applications
            </a>
            <a
              href="#considerations"
              className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
            >
              Critical Analysis
            </a>
          </div>
        </div>
      </nav>

      <section id="overview" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Theoretical Overview
            </h2>
            <div className="prose prose-lg mx-auto">
              <p className="text-gray-600 mb-6">
                The Genetic Toxin Response theory proposes that human groups may
                exhibit response patterns similar to biological systems when
                encountering perceived threats or incompatible behaviors from
                other groups. This framework draws parallels between cellular
                toxin responses and intergroup conflict dynamics.
              </p>
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                <h3 className="text-xl font-semibold mb-3 text-blue-800">
                  Core Hypothesis
                </h3>
                <p className="text-blue-700">
                  When one group perceives another as exhibiting "toxic" or
                  threatening behaviors, they may respond through an escalating
                  four-stage process that mirrors biological toxin responses:
                  Contain → Expel → Kill → Absorb.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="stages" className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">
            The Four Stages
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-bio-blue rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-white font-bold text-2xl">1</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center text-bio-blue">
                CONTAIN
              </h3>
              <p className="text-gray-600 text-center mb-4">
                Initial response involves isolating or limiting the perceived
                threat through social, legal, or physical boundaries.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Social exclusion</li>
                <li>• Legal restrictions</li>
                <li>• Geographic segregation</li>
                <li>• Economic limitations</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-bio-green rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-white font-bold text-2xl">2</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center text-bio-green">
                EXPEL
              </h3>
              <p className="text-gray-600 text-center mb-4">
                Active removal of the perceived threat from the group's
                territory or sphere of influence.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Deportation</li>
                <li>• Forced migration</li>
                <li>• Exile</li>
                <li>• Displacement</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-bio-red rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-white font-bold text-2xl">3</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center text-bio-red">
                ELIMINATE
              </h3>
              <p className="text-gray-600 text-center mb-4">
                Direct destruction of the perceived threat when containment and
                expulsion are deemed insufficient.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Physical violence</li>
                <li>• Systematic killing</li>
                <li>• Cultural destruction</li>
                <li>• Identity erasure</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-bio-purple rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-white font-bold text-2xl">4</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center text-bio-purple">
                ABSORB
              </h3>
              <p className="text-gray-600 text-center mb-4">
                Integration of useful elements from the eliminated group while
                maintaining dominant group identity.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Cultural appropriation</li>
                <li>• Resource acquisition</li>
                <li>• Knowledge integration</li>
                <li>• Selective adoption</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="biological" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Biological Parallels
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-800">
                  Cellular Response
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold">Detection</h4>
                      <p className="text-gray-600 text-sm">
                        Cells identify foreign or harmful substances
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold">Isolation</h4>
                      <p className="text-gray-600 text-sm">
                        Compartmentalization of threats
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold">Elimination</h4>
                      <p className="text-gray-600 text-sm">
                        Breakdown and removal of toxins
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-3 h-3 bg-purple-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold">Recovery</h4>
                      <p className="text-gray-600 text-sm">
                        Recycling useful components
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-800">
                  Group Dynamics
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold">Threat Perception</h4>
                      <p className="text-gray-600 text-sm">
                        Groups identify "deviant" or threatening behaviors
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold">Social Boundaries</h4>
                      <p className="text-gray-600 text-sm">
                        Creation of in-group/out-group distinctions
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold">Conflict Escalation</h4>
                      <p className="text-gray-600 text-sm">
                        Progressive intensification of responses
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-3 h-3 bg-purple-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold">Cultural Integration</h4>
                      <p className="text-gray-600 text-sm">
                        Selective adoption of beneficial elements
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="applications" className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Potential Applications
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-3 text-blue-600">
                  Historical Analysis
                </h3>
                <p className="text-gray-600">
                  Understanding patterns in historical conflicts, genocides, and
                  intergroup violence through this biological lens.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-3 text-green-600">
                  Conflict Prevention
                </h3>
                <p className="text-gray-600">
                  Early identification of escalation patterns to intervene
                  before reaching more destructive stages.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-3 text-purple-600">
                  Social Psychology
                </h3>
                <p className="text-gray-600">
                  Exploring the psychological mechanisms that drive group
                  responses to perceived threats.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="considerations" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Critical Considerations
            </h2>
            <div className="space-y-6">
              <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
                <h3 className="text-xl font-semibold mb-3 text-yellow-800">
                  Subjective Threat Perception
                </h3>
                <p className="text-yellow-700">
                  What constitutes "toxic" behavior is highly subjective and
                  culturally determined. This framework must account for the
                  constructed nature of threat perception.
                </p>
              </div>

              <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
                <h3 className="text-xl font-semibold mb-3 text-red-800">
                  Ethical Implications
                </h3>
                <p className="text-red-700">
                  Biological metaphors can be misused to justify harmful
                  actions. This theory must not be interpreted as legitimizing
                  or naturalizing violence against any group.
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                <h3 className="text-xl font-semibold mb-3 text-blue-800">
                  Non-Linear Progression
                </h3>
                <p className="text-blue-700">
                  Real-world conflicts rarely follow neat linear progressions.
                  Groups may skip stages, reverse course, or remain in certain
                  phases indefinitely.
                </p>
              </div>

              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                <h3 className="text-xl font-semibold mb-3 text-green-800">
                  Alternative Responses
                </h3>
                <p className="text-green-700">
                  This framework should be balanced with models that emphasize
                  cooperation, integration, and peaceful coexistence as equally
                  valid group responses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold mb-4">
            Genetic Toxin Response Theory
          </h3>
          <p className="text-gray-400 mb-4">
            A theoretical framework for understanding intergroup dynamics
            through biological parallels
          </p>
          <p className="text-sm text-gray-500">
            This framework is presented for academic and theoretical discussion.
            It should not be used to justify or legitimize harmful actions
            against any group.
          </p>
        </div>
      </footer>
    </div>
  );
};
export default ToxinResponse;
