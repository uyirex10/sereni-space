import React from "react";
import { Link } from "react-router-dom";

const BreathingSection = () => {
  return (
    <div className="py-16 px-6 md:px-12 lg:px-24">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">
            The Way We Breathe
          </h2>
          <p className="mb-6 text-lg">
            StillOnline is a collection of mindful spaces built for pause.
            Whether you're reflecting, creating, or simply existing, these
            spaces invite you to slow down - because growth happens in
            stillness.
          </p>
          <Link
            to="/learn-more"
            className="bg-dark text-white py-2 px-6 rounded inline-flex items-center group"
          >
            Learn More
            <svg
              className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </Link>
        </div>
        <div className="md:w-1/2 relative">
          <div className="relative ml-8 mb-8">
            <img
              src="/images/meditation-1.jpg"
              alt="Woman meditating"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          <div className="absolute top-8 -left-4 -rotate-6">
            <img
              src="/images/meditation-2.jpg"
              alt="Meditation space"
              className="w-72 rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreathingSection;
