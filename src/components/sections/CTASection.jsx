import React from "react";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <div className="relative py-24 px-6 md:px-12 lg:px-24 my-16">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/images/mountain-retreat.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>

      <div className="relative z-10 max-w-xl mx-auto text-center text-white">
        <h2 className="text-3xl md:text-4xl font-serif mb-4">
          You don't need more time.
          <br />
          You need more <em>space</em>.
        </h2>
        <div className="mt-8">
          <Link
            to="/start"
            className="bg-primary hover:bg-opacity-90 text-dark font-medium py-3 px-8 rounded-full inline-block"
          >
            Start Your Ritual
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
