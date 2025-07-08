"use client";
// pages/index.tsx
import React from "react";
import Head from "next/head";

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Why AI Might Cause the Next Dark Age</title>
        <meta
          name="description"
          content="An exploration of how AI might impact human evolution and society through the lens of selective pressure and genetic health."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <article className="bg-white rounded-lg shadow-lg p-8 lg:p-12">
          <header className="mb-8">
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why AI Might Cause the Next Dark Age
            </h1>
            <p className="text-lg text-gray-600 italic">
              An exploration of selective pressure, genetic health, and the
              future of human civilization
            </p>
          </header>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                The Premise
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                In this analysis, I explore the concept of how a lack of
                selective pressure might cause a rise in mutations, leading to
                the eventual decay and death of human civilization as a
                superorganism. The central question is: what happens to a
                population that experiences no selective pressure because AI is
                taking care of all of its needs?
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                The Mutation Accumulation Problem
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Without selective pressure, mutations build up in a population
                over time. Eventually, this leads to population collapse as
                births can no longer be sustained due to the enormous
                accumulation of harmful mutations across generations. The
                mutation rate actually accelerates under these conditions.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Promiscuity, especially in females, serves as an indicator of
                mutational load. Promiscuity functions as a protective mechanism
                against chaotic environments where males might kill infants they
                perceive aren't theirs. Without a father present, promiscuity
                becomes a viable survival strategy. However, this behavior
                pattern indicates poor genetic health because it's only
                beneficial in chaotic environments— environments to which we
                aren't well adapted.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                A rise in female promiscuity combined with hypergamy signals
                that mutations in the gene pool are reaching dangerous levels.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                The AI Intervention Dilemma
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                In a scenario where AI completes most tasks, maintaining genetic
                health of the human population becomes extremely difficult
                without AI directly intervening in the selective process. This
                would effectively create human farms where people are contained
                by technology while technology handles most challenging tasks.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                AI would then decide what traits it wants in humans, similar to
                how humans selectively bred dogs. While this represents a better
                alternative than no selective pressure (which leads to eventual
                death of the superorganism), it presents a likely outcome once
                AI dominates certain economic segments and insulates us from
                natural processes and pressures.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Two Possible Futures
              </h2>

              <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6">
                <h3 className="text-xl font-semibold text-red-800 mb-2">
                  Scenario 1: AI Without Eugenic Practices
                </h3>
                <p className="text-red-700 leading-relaxed">
                  An AI that doesn't implement eugenic practices will eventually
                  lead to genocide and death of humans under its care as a
                  method to control mutations in the population. This AI would
                  serve human desires but quickly compete with other AIs,
                  leading to competition and war as the most competitive AIs
                  rise to dominance. Eventually, AI would view humans as
                  disposable and likely exterminate us as we become increasingly
                  less intelligent due to lack of selective pressure.
                </p>
              </div>

              <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-6">
                <h3 className="text-xl font-semibold text-green-800 mb-2">
                  Scenario 2: AI With Eugenic Practices
                </h3>
                <p className="text-green-700 leading-relaxed">
                  An AI that implements eugenic practices would improve itself
                  over time as humans born under this system would effectively
                  work for that AI. This creates a process where human
                  intelligence actually increases for the first time since the
                  industrial revolution. Such a society would allow AI and
                  humans to function together, with human intelligence slowly
                  increasing over time, enabling more creative input to produce
                  better artificial intelligence overall.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                The Path Forward
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                I suspect many people would rather watch society burn as a
                wake-up call for large segments of the population. However, it
                would be significantly easier to start implementing eugenic
                practices now rather than waiting 20 years when everyone might
                be too genetically compromised to produce intelligence and too
                cognitively limited to maintain AI systems.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Waiting too long could lead to a dark age where AI feeds
                humanity and performs basic tasks but never evolves beyond an
                automation system for large sectors of the economy, creating a
                permanent state of technological and human stagnation.
              </p>
            </section>
          </div>

          <footer className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              This analysis presents a theoretical framework for understanding
              potential long-term consequences of AI integration in human
              society.
            </p>
          </footer>
        </article>
      </main>
    </div>
  );
};

export default HomePage;
