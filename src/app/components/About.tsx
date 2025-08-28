import React from "react";
import { aboutText, coreStrengths, interests } from "@/app/data/about";

export default function About() {
  return (
    <section id="about" className="py-20 bg-base-200">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Who Am I</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        {/* Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <div className="prose prose-lg max-w-none">
              {aboutText.map((paragraph, idx) => (
                <p key={idx} className="text-lg leading-relaxed mb-6">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Cards */}
          <div className="space-y-6">
            {/* Core Strengths */}
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="card-title text-primary">Core Strengths</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  {coreStrengths.map((strength, idx) => (
                    <span
                      key={idx}
                      className="badge badge-primary text-sm px-3 py-2 sm:px-4 sm:py-4 break-words max-w-full"
                    >
                      {strength}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Interests */}
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="card-title text-secondary">Interests</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  {interests.map((interest, idx) => (
                    <span
                      key={idx}
                      className="badge badge-secondary text-sm px-3 py-2 sm:px-4 sm:py-4 break-words max-w-full"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
