import React from "react";

const StatCard = ({ number, text }) => (
  <div className="text-center px-4 py-6">
    <div className="text-4xl font-serif mb-2">{number}</div>
    <p className="text-sm max-w-[120px] mx-auto">{text}</p>
  </div>
);

const Stats = () => {
  return (
    <div className="py-16 px-6 md:px-12 lg:px-24">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard number="12k" text="Moments of stillness shared" />
        <StatCard number="5" text="Simple rituals to ground your day" />
        <StatCard number="40+" text="Curated spaces designed for calm" />
        <StatCard number="98%" text="Guests feel more present after visiting" />
      </div>
    </div>
  );
};

export default Stats;
