import React, { useState } from "react";
import { Link } from "react-router-dom";

// Filter button component
const FilterButton = ({ name, active, onClick }) => (
  <button
    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
      active
        ? "bg-primary text-dark"
        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
    }`}
    onClick={onClick}
  >
    {name}
  </button>
);

// Space card component
const SpaceCard = ({
  title,
  description,
  image,
  tags,
  duration,
  difficulty,
}) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 h-full flex flex-col">
    <div className="relative">
      <img src={image} alt={title} className="w-full h-56 object-cover" />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
        <div className="flex gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs px-2 py-1 bg-white bg-opacity-20 rounded text-white"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>

    <div className="p-6 flex-grow flex flex-col">
      <h3 className="font-serif text-xl mb-2">{title}</h3>
      <p className="text-gray-600 mb-4 flex-grow">{description}</p>

      <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
        <div className="flex items-center">
          <svg
            className="w-4 h-4 mr-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          {duration}
        </div>
        <div>
          <span className="font-medium">Difficulty:</span> {difficulty}
        </div>
      </div>

      <Link
        to={`/spaces/${title.toLowerCase().replace(/\s+/g, "-")}`}
        state={{ title, image, description }}
        className="bg-dark text-white py-2 px-4 rounded text-center hover:bg-opacity-90 transition-colors"
      >
        Book This Space
      </Link>
    </div>
  </div>
);

const ExploreSpaces = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  // Filter categories
  const filters = [
    { id: "all", name: "All Spaces" },
    { id: "relaxation", name: "Relaxation" },
    { id: "creativity", name: "Creativity" },
    { id: "focus", name: "Focus" },
    { id: "meditation", name: "Meditation" },
  ];

  // Space data
  const spaces = [
    {
      id: 1,
      title: "The Sol Room",
      description:
        "A sun-drenched corner with warm light, plush books, and a reading chair perfect for morning reflection or afternoon pause.",
      image: "/images/sol-room.jpg",
      tags: ["Relaxation", "Warmth"],
      duration: "30-60 mins",
      difficulty: "Easy",
      categories: ["relaxation", "meditation"],
    },
    {
      id: 2,
      title: "The Meadow Window",
      description:
        "A view of misty green hills, paired with gentle airflow and quiet rhythms that inspire deep thought and peaceful contemplation.",
      image: "/images/meadow-window.jpg",
      tags: ["Nature", "Reflection"],
      duration: "20-45 mins",
      difficulty: "Easy",
      categories: ["relaxation", "meditation"],
    },
    {
      id: 3,
      title: "Nightlight Studio",
      description:
        "A low-lit space with moonlit smoke and soft focus for writing or drawing. The perfect environment for creative expression.",
      image: "/images/nightlight-studio.jpg",
      tags: ["Creativity", "Solitude"],
      duration: "45-90 mins",
      difficulty: "Medium",
      categories: ["creativity", "focus"],
    },
    {
      id: 4,
      title: "The Harbor Desk",
      description:
        "An anchored workspace designed for deep focus and productivity, with minimal distractions and optimal ergonomics.",
      image: "/images/harbor-desk.jpg",
      tags: ["Focus", "Productivity"],
      duration: "60-120 mins",
      difficulty: "Medium",
      categories: ["focus"],
    },
    {
      id: 5,
      title: "Dawn Reflection Pool",
      description:
        "A morning meditation space with natural light patterns and water elements to ground your day from the start.",
      image: "/images/dawn-reflection.jpg",
      tags: ["Meditation", "Morning"],
      duration: "15-30 mins",
      difficulty: "Easy",
      categories: ["meditation"],
    },
    {
      id: 6,
      title: "The Forest Bath",
      description:
        "Immerse yourself in the healing properties of nature with this indoor woodland escape designed for sensory restoration.",
      image: "/images/forest-bath.jpg",
      tags: ["Nature", "Healing"],
      duration: "45-60 mins",
      difficulty: "Easy",
      categories: ["relaxation", "meditation"],
    },
  ];

  // Filter spaces based on active filter
  const filteredSpaces =
    activeFilter === "all"
      ? spaces
      : spaces.filter((space) => space.categories.includes(activeFilter));

  return (
    <div className="min-h-screen bg-light">
      {/* Hero section */}
      <div
        className="bg-cover bg-center py-20 px-6 md:px-12 lg:px-24 relative"
        style={{ backgroundImage: "url('/images/spaces-hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 max-w-3xl mx-auto text-white text-center">
          <h1 className="text-4xl md:text-5xl font-serif mb-6">
            Quiet Rooms for Loud Lives
          </h1>
          <p className="text-xl mb-8">
            Discover curated spaces designed to hold your attention, nurture
            your creativity, and restore your sense of calm.
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          {/* Filter section */}
          <div className="flex flex-wrap gap-3 mb-12 justify-center">
            {filters.map((filter) => (
              <FilterButton
                key={filter.id}
                name={filter.name}
                active={activeFilter === filter.id}
                onClick={() => setActiveFilter(filter.id)}
              />
            ))}
          </div>

          {/* Results count */}
          <p className="text-center mb-8 text-gray-600">
            Showing {filteredSpaces.length}{" "}
            {filteredSpaces.length === 1 ? "space" : "spaces"}
          </p>

          {/* Spaces grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSpaces.map((space) => (
              <SpaceCard
                key={space.id}
                title={space.title}
                description={space.description}
                image={space.image}
                tags={space.tags}
                duration={space.duration}
                difficulty={space.difficulty}
              />
            ))}
          </div>

          {/* Empty state */}
          {filteredSpaces.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl mb-4">
                No spaces match your current filter.
              </p>
              <button
                className="text-primary underline"
                onClick={() => setActiveFilter("all")}
              >
                View all spaces
              </button>
            </div>
          )}
        </div>
      </div>

      {/* FAQ section */}
      <div className="bg-white py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif mb-12 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-serif mb-2">
                How do I book a space?
              </h3>
              <p className="text-gray-600">
                Simply browse our collection of spaces, select the one that
                resonates with you, and click "Book This Space." You'll be
                guided through selecting a date, time, and any additional
                preferences.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-serif mb-2">
                How long can I book a space for?
              </h3>
              <p className="text-gray-600">
                Each space has recommended duration ranges, but you can book
                them for as little as 15 minutes or up to 3 hours depending on
                your needs.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-serif mb-2">
                Are the spaces physical or virtual?
              </h3>
              <p className="text-gray-600">
                We offer both physical locations in select cities and virtual
                spaces that help you transform your own environment. The virtual
                experiences include guided audio, visual elements, and practical
                setup instructions.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-serif mb-2">
                Can I customize a space?
              </h3>
              <p className="text-gray-600">
                Yes! We offer personalization options for most spaces. During
                booking, you'll be able to select preferences for lighting,
                sound elements, and other features.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-serif mb-2">
                What if I need to cancel my booking?
              </h3>
              <p className="text-gray-600">
                We understand that plans change. You can cancel or reschedule
                your booking up to 24 hours in advance with no charge. For
                cancellations within 24 hours, a small fee may apply.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-serif mb-2">
                Do you offer gift cards?
              </h3>
              <p className="text-gray-600">
                Yes, we offer digital gift cards that can be used for any space
                booking or ritual package. They're perfect for sharing the gift
                of mindful spaces with someone you care about.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA section */}
      <div
        className="bg-cover bg-center py-20 px-6 md:px-12 lg:px-24 relative"
        style={{ backgroundImage: "url('/images/cta-background.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 max-w-3xl mx-auto text-white text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">
            Ready to experience stillness?
          </h2>
          <p className="text-xl mb-8">
            Book your first space visit and receive a complimentary guided audio
            meditation.
          </p>
          <Link
            to="/start"
            className="inline-block bg-primary text-dark py-3 px-8 rounded-full text-lg font-medium hover:bg-opacity-90 transition-colors"
          >
            Start Your Journey
          </Link>
        </div>
      </div>

      {/* Testimonial section */}
      <div className="bg-white py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif mb-12 text-center">
            What Our Visitors Say
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4">
                  <img
                    src="/images/testimonials/sarah.jpg"
                    alt="Sarah L."
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div>
                  <h4 className="font-medium">Sarah L.</h4>
                  <p className="text-gray-500 text-sm">The Sol Room</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Finding Still Online has transformed my work-from-home routine.
                Taking 30 minutes in The Sol Room each morning has helped me
                feel more centered and productive throughout the day."
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4">
                  <img
                    src="/images/testimonials/marcus.jpg"
                    alt="Marcus T."
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div>
                  <h4 className="font-medium">Marcus T.</h4>
                  <p className="text-gray-500 text-sm">Nightlight Studio</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "As a creative professional, I was looking for a space that
                could help me disconnect from digital noise and reconnect with
                my artistic practice. The Nightlight Studio has become my weekly
                retreat."
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4">
                  <img
                    src="/images/testimonials/elena.jpg"
                    alt="Elena G."
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div>
                  <h4 className="font-medium">Elena G.</h4>
                  <p className="text-gray-500 text-sm">The Meadow Window</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "I've tried many meditation apps, but nothing compares to the
                immersive experience of The Meadow Window. The thoughtful design
                makes it so easy to drop into a state of calm."
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4">
                  <img
                    src="/images/testimonials/james.jpg"
                    alt="James R."
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div>
                  <h4 className="font-medium">James R.</h4>
                  <p className="text-gray-500 text-sm">The Harbor Desk</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "The Harbor Desk has completely changed how I approach focused
                work. I'm able to accomplish in one hour what used to take me
                three, simply because the space helps me eliminate
                distractions."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreSpaces;
