import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative h-[85vh] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/images/mountain-view.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-20"></div>
      </div>

      <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-12 lg:px-24">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight mb-6">
            Find Your <em>Peace</em>
          </h1>
          <p className="text-white text-lg mb-8 max-w-md">
            We support you with tools, rituals, and spaces that nurture your
            calm, your creativity, and your connection to all of earth's
            rhythms.
          </p>
          <Link
            to="/start"
            className="bg-primary hover:bg-opacity-90 text-dark font-medium py-3 px-8 rounded-full inline-block"
          >
            Start Your Ritual
          </Link>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 flex flex-wrap justify-between px-6 md:px-12 lg:px-24 py-4 bg-black bg-opacity-30 text-white">
        <div className="px-4 py-3">
          <span className="block text-sm">Slow Spaces</span>
          <span className="text-xs opacity-75">Peaceful locations to rest</span>
        </div>
        <div className="px-4 py-3">
          <span className="block text-sm">Natural Light</span>
          <span className="text-xs opacity-75">A window to let nature in</span>
        </div>
        <div className="px-4 py-3">
          <span className="block text-sm">Thoughtful Rituals</span>
          <span className="text-xs opacity-75">Build mindful moments</span>
        </div>
        <div className="px-4 py-3">
          <span className="block text-sm">Everyday Sanctuary</span>
          <span className="text-xs opacity-75">Transform how you live</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
