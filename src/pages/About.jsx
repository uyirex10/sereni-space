import React from "react";
import { Link } from "react-router-dom";

const teamMembers = [
  {
    name: "Maya Wilson",
    role: "Founder & CEO",
    bio: "Former tech executive who discovered the power of mindfulness after burnout led her to a three-month retreat in the mountains.",
    image: "/images/founders/maya.jpg",
  },
  {
    name: "David Chen",
    role: "Head of Experience Design",
    bio: "Architect and meditation teacher who specializes in creating physical and digital spaces that facilitate presence.",
    image: "/images/founders/david.jpg",
  },
  {
    name: "Leila Patel",
    role: "Research Director",
    bio: "Neuroscientist with a focus on how environmental factors and mindfulness practices affect stress response and cognitive function.",
    image: "/images/founders/leila.jpg",
  },
  {
    name: "James Rodriguez",
    role: "Community Lead",
    bio: "Former yoga studio owner passionate about making mindfulness accessible to people from all walks of life.",
    image: "/images/founders/rodriguez.jpg",
  },
];

const About = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="/images/mountain-landscape.jpg"
            alt="Mountain landscape"
          />
          <div
            className="absolute inset-0 bg-gray-500 mix-blend-multiply"
            aria-hidden="true"
          ></div>
        </div>
        <div className="relative px-4 py-24 sm:px-6 sm:py-32 lg:py-40 lg:px-8">
          <h1 className="text-4xl font-serif tracking-tight text-white sm:text-5xl lg:text-6xl">
            Our Story
          </h1>
          <p className="mt-6 max-w-lg text-xl text-gray-200">
            Building spaces for people to reconnect with what matters.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="relative py-16 bg-white overflow-hidden">
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="text-lg max-w-prose mx-auto">
            <h2 className="text-base text-amber-400 font-semibold tracking-wide uppercase">
              Our Mission
            </h2>
            <p className="mt-2 text-3xl font-serif leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Creating moments of stillness in a constantly moving world
            </p>
            <div className="mt-8 text-xl text-gray-500 leading-8">
              <p className="mb-4">
                StillOnline also know as serenispace was born from a simple
                observation: in our hyper-connected world, we've lost touch with
                the power of stillness.
              </p>
              <p className="mb-4">
                We believe that moments of pause are not luxuries—they're
                necessities. They're the spaces where creativity emerges, where
                healing happens, and where we reconnect with what truly matters.
              </p>
              <p>
                Our team is committed to creating both digital and physical
                environments that invite people back to presence, combining
                ancient wisdom practices with modern design and research.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-stone-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-amber-400 font-semibold tracking-wide uppercase">
              Our Values
            </h2>
            <p className="mt-2 text-3xl font-serif leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              What guides our work
            </p>
          </div>

          <div className="mt-16">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-amber-400 text-white">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                  Presence Over Productivity
                </p>
                <p className="mt-2 ml-16 text-base text-gray-500">
                  We believe quality of attention matters more than quantity of
                  output. Our spaces are designed to foster deep engagement
                  rather than endless activity.
                </p>
              </div>

              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-amber-400 text-white">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                  Accessible Mindfulness
                </p>
                <p className="mt-2 ml-16 text-base text-gray-500">
                  We create experiences that make mindfulness approachable for
                  everyone, regardless of background or experience level.
                </p>
              </div>

              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-amber-400 text-white">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                    />
                  </svg>
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                  Evidence-Based Approaches
                </p>
                <p className="mt-2 ml-16 text-base text-gray-500">
                  Our practices and spaces are designed based on the latest
                  research in neuroscience, psychology, and mindfulness studies.
                </p>
              </div>

              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-amber-400 text-white">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                  Environmental Harmony
                </p>
                <p className="mt-2 ml-16 text-base text-gray-500">
                  We believe human wellbeing is inseparable from the health of
                  our planet. Our physical spaces and business practices reflect
                  this connection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-12">
            <h2 className="text-base text-amber-400 font-semibold tracking-wide uppercase">
              Our Team
            </h2>
            <p className="mt-2 text-3xl font-serif leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              The people behind StillOnline
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              A diverse group of researchers, designers, and practitioners
              united by a passion for mindful living.
            </p>
          </div>

          <div className="mt-10 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <div className="flex-shrink-0">
                  <img
                    className="h-48 w-48 rounded-full object-cover"
                    src={member.image}
                    alt={member.name}
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    {member.name}
                  </h3>
                  <p className="text-sm text-amber-400">{member.role}</p>
                  <p className="mt-3 text-base text-gray-500">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-amber-400">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 lg:py-16 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-serif tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to experience stillness?</span>
            <span className="block text-green-100">
              Try our spaces or join our community today.
            </span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link
                to="/spaces"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-amber-400 bg-white hover:bg-green-50"
              >
                Explore Spaces
              </Link>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <Link
                to="/book-your-peace"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-amber-400 hover:amber-300"
              >
                Book Your Peace
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
