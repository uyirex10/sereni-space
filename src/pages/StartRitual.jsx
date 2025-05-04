import React, { useState } from "react";
import { Link } from "react-router-dom";

const RitualOption = ({ title, description, icon, selected, onSelect }) => {
  return (
    <div
      className={`border rounded-lg p-6 cursor-pointer transition-all ${
        selected
          ? "border-primary bg-amber-50"
          : "border-gray-200 hover:border-gray-300"
      }`}
      onClick={onSelect}
    >
      <div className="flex items-start mb-4">
        <div className="mr-4 text-2xl">{icon}</div>
        <div>
          <h3 className="font-serif text-xl mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
      <div
        className={`w-5 h-5 rounded-full border-2 ml-auto ${
          selected ? "border-primary bg-primary" : "border-gray-300"
        }`}
      ></div>
    </div>
  );
};

const StartRitual = () => {
  const [step, setStep] = useState(1);
  const [selectedRitual, setSelectedRitual] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const ritualOptions = [
    {
      id: "morning",
      title: "Morning Clarity",
      description:
        "Begin your day with intention through a 10-minute guided ritual to set your focus.",
      icon: "☀️",
    },
    {
      id: "midday",
      title: "Midday Reset",
      description:
        "A 5-minute breath practice to recenter during your busy day.",
      icon: "🌤️",
    },
    {
      id: "evening",
      title: "Evening Unwind",
      description:
        "Release the day and prepare for restorative sleep with this gentle practice.",
      icon: "🌙",
    },
    {
      id: "custom",
      title: "Custom Ritual",
      description:
        "Work with our guides to build a personalized ritual for your specific needs.",
      icon: "✨",
    },
  ];

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep(3);
  };

  return (
    <div className="min-h-screen bg-light">
      {/* Header section */}
      <div
        className="bg-cover bg-center py-20 px-6 md:px-12 lg:px-24 relative"
        style={{ backgroundImage: "url('/images/ritual-header.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative z-10 max-w-3xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-5xl font-serif mb-6">
            Start Your Ritual
          </h1>
          <p className="text-xl">
            Create space in your day for what truly matters.
          </p>
        </div>
      </div>

      {/* Content section */}
      <div className="py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-3xl mx-auto">
          {/* Progress indicator */}
          <div className="flex justify-between items-center mb-12">
            <div className="flex items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  step >= 1
                    ? "bg-primary text-dark"
                    : "bg-gray-200 text-gray-500"
                }`}
              >
                1
              </div>
              <div
                className={`h-1 w-16 ${
                  step >= 2 ? "bg-primary" : "bg-gray-200"
                }`}
              ></div>
            </div>
            <div className="flex items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  step >= 2
                    ? "bg-primary text-dark"
                    : "bg-gray-200 text-gray-500"
                }`}
              >
                2
              </div>
              <div
                className={`h-1 w-16 ${
                  step >= 3 ? "bg-primary" : "bg-gray-200"
                }`}
              ></div>
            </div>
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                step >= 3 ? "bg-primary text-dark" : "bg-gray-200 text-gray-500"
              }`}
            >
              3
            </div>
          </div>

          {/* Step 1: Choose ritual */}
          {step === 1 && (
            <div className="fade-in">
              <h2 className="text-3xl font-serif mb-6">Choose Your Ritual</h2>
              <p className="mb-8 text-lg">
                Select the ritual that resonates with your current needs.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {ritualOptions.map((option) => (
                  <RitualOption
                    key={option.id}
                    title={option.title}
                    description={option.description}
                    icon={option.icon}
                    selected={selectedRitual === option.id}
                    onSelect={() => setSelectedRitual(option.id)}
                  />
                ))}
              </div>

              <div className="flex justify-end">
                <button
                  className={`bg-primary text-dark py-3 px-8 rounded-full transition-opacity ${
                    !selectedRitual
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:bg-opacity-90"
                  }`}
                  onClick={handleNext}
                  disabled={!selectedRitual}
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Personal details */}
          {step === 2 && (
            <div className="fade-in">
              <h2 className="text-3xl font-serif mb-6">
                Personalize Your Journey
              </h2>
              <p className="mb-8 text-lg">
                We'll create a personalized ritual guide for you based on your
                selection:
                <span className="font-medium">
                  {ritualOptions.find((o) => o.id === selectedRitual)?.title}
                </span>
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-lg mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-lg mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="pt-4 flex justify-between">
                  <button
                    type="button"
                    className="text-dark py-3 px-6 rounded-full border border-gray-300 hover:bg-gray-50"
                    onClick={() => setStep(1)}
                  >
                    Back
                  </button>

                  <button
                    type="submit"
                    className="bg-primary text-dark py-3 px-8 rounded-full hover:bg-opacity-90"
                  >
                    Begin Your Ritual
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Step 3: Confirmation */}
          {step === 3 && (
            <div className="fade-in text-center py-8">
              <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-10 h-10 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </div>

              <h2 className="text-3xl font-serif mb-4">Your Journey Begins</h2>
              <p className="text-lg mb-8">
                Thank you, {name}! We've sent your personalized ritual guide to{" "}
                {email}. Your first session will be available within the next 24
                hours.
              </p>

              <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-sm border border-gray-100 mb-8">
                <h3 className="font-serif text-xl mb-3">What happens next:</h3>
                <ul className="text-left space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">1.</span>
                    <span>Check your email for your welcome guide</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">2.</span>
                    <span>Download our companion app for guided sessions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">3.</span>
                    <span>
                      Set aside 10 minutes tomorrow for your first ritual
                    </span>
                  </li>
                </ul>
              </div>

              <Link
                to="/"
                className="inline-block bg-dark text-white py-3 px-8 rounded-full hover:bg-opacity-90"
              >
                Return Home
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StartRitual;
