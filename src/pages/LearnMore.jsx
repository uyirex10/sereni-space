import React from "react";
import { Link } from "react-router-dom";

const PracticeCard = ({ title, description, image, link }) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 transition-transform hover:transform hover:scale-[1.02]">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="font-serif text-xl mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link
        to={link}
        className="text-dark font-medium inline-flex items-center group"
      >
        Learn more
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
);

const QuoteSection = ({ quote, author, role }) => (
  <div className="bg-light py-16 px-6 md:px-12 lg:px-24 text-center">
    <div className="max-w-3xl mx-auto">
      <svg
        className="w-12 h-12 text-primary mx-auto mb-6 opacity-60"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.51.88-3.995 2.533-3.995 5.849h4v10h-10zm-14 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.511.88-3.996 2.533-3.996 5.849h4v10h-10z"></path>
      </svg>
      <blockquote className="text-2xl md:text-3xl font-serif mb-6 italic">
        {quote}
      </blockquote>
      <div className="text-gray-600">
        <span className="font-medium">{author}</span>
        {role && <span className="block text-sm">{role}</span>}
      </div>
    </div>
  </div>
);

const LearnMore = () => {
  return (
    <div className="min-h-screen">
      {/* Hero section */}
      <div
        className="bg-cover bg-center py-20 px-6 md:px-12 lg:px-24 relative"
        style={{ backgroundImage: "url('/images/learn-more-hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 max-w-3xl mx-auto text-white">
          <h1 className="text-4xl md:text-5xl font-serif mb-6">
            The Way We Breathe
          </h1>
          <p className="text-xl mb-8">
            In a world that never stops, we believe in the power of mindful
            pauses. Our philosophy is built on creating intentional spaces and
            practices that invite presence.
          </p>
        </div>
      </div>

      {/* Our philosophy section */}
      <div className="py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif mb-8 text-center">
            Our Philosophy
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-serif mb-4">
                Space Shapes Experience
              </h3>
              <p className="text-lg mb-4">
                We believe that the spaces we inhabit profoundly affect our
                mental state. Through thoughtful design and natural elements, we
                create environments that calm the nervous system and invite
                reflection.
              </p>
              <p className="text-lg">
                Each Still + Online space is designed around principles of
                biophilia, natural light, and mindful acoustics to support your
                journey inward.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-serif mb-4">
                Ritual Creates Presence
              </h3>
              <p className="text-lg mb-4">
                Simple, consistent rituals act as doorways between the noise of
                everyday life and moments of true presence. Our rituals are
                designed to be accessible and adaptable to your unique needs.
              </p>
              <p className="text-lg">
                Whether it's a morning meditation, a midday breathing practice,
                or an evening wind-down, these acts of intention help reclaim
                your attention from a scattered world.
              </p>
            </div>
          </div>

          <div className="relative py-12 my-12 border-t border-b border-gray-200">
            <div className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2 bg-white px-8">
              <h3 className="text-xl font-serif text-gray-500">Our Approach</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌿</span>
                </div>
                <h4 className="font-serif text-xl mb-2">Biophilic Design</h4>
                <p>
                  Connecting to nature's rhythms through thoughtful integration
                  of natural elements.
                </p>
              </div>

              <div>
                <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🧘</span>
                </div>
                <h4 className="font-serif text-xl mb-2">Mindful Practices</h4>
                <p>
                  Simple, accessible methods to return to presence throughout
                  your day.
                </p>
              </div>

              <div>
                <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔄</span>
                </div>
                <h4 className="font-serif text-xl mb-2">Sustainable Rhythms</h4>
                <p>
                  Creating patterns that nurture wellbeing for the long term,
                  not quick fixes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quote section */}
      <QuoteSection
        quote="The quieter you become, the more you can hear."
        author="Ram Dass"
      />

      {/* Practices section */}
      <div className="py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif mb-4 text-center">
            Our Practices
          </h2>
          <p className="text-lg text-center max-w-3xl mx-auto mb-12">
            Explore our collection of mindfulness practices, each designed to
            create space for presence in different contexts and moments of your
            day.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PracticeCard
              title="Breath Work"
              description="Simple breathing techniques to regulate your nervous system and return to center."
              image="/images/practice-breath.jpg"
              link="/practices/breath"
            />

            <PracticeCard
              title="Movement Meditation"
              description="Gentle somatic practices that unite body awareness with mental presence."
              image="/images/practice-movement.jpg"
              link="/practices/movement"
            />

            <PracticeCard
              title="Sound Healing"
              description="Immersive acoustic experiences that quiet the mind and open the heart."
              image="/images/practice-sound.jpg"
              link="/practices/sound"
            />
          </div>
        </div>
      </div>

      {/* CTA section */}
      <div className="bg-dark text-white py-16 px-6 md:px-12 lg:px-24 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">
            Begin Your Journey
          </h2>
          <p className="text-lg mb-8">
            Take the first step toward creating more mindful spaces and moments
            in your life.
          </p>
          <Link
            to="/start"
            className="bg-primary text-dark py-3 px-8 rounded-full inline-block hover:bg-opacity-90"
          >
            Start Your Ritual
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LearnMore;
