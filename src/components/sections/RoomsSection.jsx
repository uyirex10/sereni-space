import React from "react";
import { Link } from "react-router-dom";

const RoomCard = ({ title, tags, description, image }) => (
  <div className="relative overflow-hidden rounded-lg">
    <img src={image} alt={title} className="w-full h-64 object-cover" />
    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
      <h3 className="text-xl font-serif mb-1">{title}</h3>
      <div className="flex gap-2 mb-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="text-xs px-2 py-1 bg-white bg-opacity-20 rounded"
          >
            {tag}
          </span>
        ))}
      </div>
      <p className="text-sm opacity-90">{description}</p>
    </div>
  </div>
);

const RoomsSection = () => {
  const rooms = [
    {
      title: "The Sol Room",
      tags: ["Relaxing", "Warmth"],
      description:
        "A sun-drenched corner with warm light, plush books, and a reading chair.",
      image: "/images/sol-room.jpg",
    },
    {
      title: "The Meadow Window",
      tags: ["Nature", "Reflection"],
      description:
        "A view of misty green hills, paired with gentle airflow and quiet rhythms.",
      image: "/images/meadow-window.jpg",
    },
    {
      title: "Nightlight Studio",
      tags: ["Creativity", "Solitude"],
      description:
        "A low-lit space with moonlit smoke and soft focus for writing or drawing.",
      image: "/images/nightlight-studio.jpg",
    },
  ];

  return (
    <div className="py-16 px-6 md:px-12 lg:px-24">
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-serif mb-4">
          Quiet Rooms for Loud Lives
        </h2>
        <div className="flex justify-between items-end">
          <p className="max-w-xl text-lg">
            Explore curated spaces crafted to hold your calm. Whether it's for
            reading, breathing, or being—you'll find your space here.
          </p>
          <Link
            to="/spaces"
            className="bg-dark text-white py-2 px-6 rounded inline-flex items-center group"
          >
            Explore Spaces
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
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {rooms.map((room, index) => (
          <RoomCard key={index} {...room} />
        ))}
      </div>
    </div>
  );
};

export default RoomsSection;
