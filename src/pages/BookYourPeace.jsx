import React, { useState } from "react";

const BookYourPeace = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    space: "The Sol Room",
    message: "",
  });
  const [successMessage, setSuccessMessage] = useState("");

  const spaces = [
    {
      id: "sol",
      name: "The Sol Room",
      description:
        "A sun-drenched corner with warm light, plush books, and a reading chair.",
      img: "/images/sol-room.jpg",
    },
    {
      id: "meadow",
      name: "The Meadow Window",
      description:
        "A view of misty green hills, paired with gentle airflow and quiet rhythms.",
      img: "/images/meadow-window.jpg",
    },
    {
      id: "nightlight",
      name: "Nightlight Studio",
      description:
        "A low-lit space with moonlit smoke and soft focus for writing or drawing.",
      img: "/images/nightlight-studio.jpg",
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    setSuccessMessage(
      "Your booking request has been received. We will contact you shortly to confirm your space."
    );

    setTimeout(() => {
      setSuccessMessage("");
    }, 4000);

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      space: "The Sol Room",
      message: "",
    });
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-80 bg-stone-100">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/images/mountain-view.jpg"
            alt="Peaceful mountain view"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>
        <div className="relative flex flex-col items-center justify-center h-full text-white px-4">
          <h1 className="text-4xl md:text-5xl font-serif mb-4 text-center">
            Book Your Peace
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl text-center">
            Reserve time in our curated spaces and reconnect with yourself
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Form */}
          <div>
            <h2 className="text-3xl font-serif mb-6">Reserve Your Space</h2>
            <p className="mb-8 text-gray-600">
              Select your preferred space, date, and time. Our team will follow
              up to confirm your booking and provide any additional details
              needed for your visit.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-stone-500 focus:border-stone-500"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-stone-500 focus:border-stone-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-stone-500 focus:border-stone-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="date"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-stone-500 focus:border-stone-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="time"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Time
                  </label>
                  <input
                    type="time"
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-stone-500 focus:border-stone-500"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="space"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Select Your Space
                </label>
                <select
                  id="space"
                  name="space"
                  value={formData.space}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-stone-500 focus:border-stone-500"
                >
                  {spaces.map((space) => (
                    <option key={space.id} value={space.name}>
                      {space.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Special Requests (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-stone-500 focus:border-stone-500"
                ></textarea>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-amber-500 hover:bg-amber-600 text-white py-3 px-6 rounded-md transition duration-300"
                >
                  Book Your Space
                </button>
              </div>
            </form>

            {successMessage && (
              <div className="mb-6 p-4 rounded-md bg-green-100 text-green-700 border border-green-300">
                {successMessage}
              </div>
            )}
          </div>

          {/* Right Column - Space Info */}
          <div>
            <h2 className="text-3xl font-serif mb-6">Our Spaces</h2>
            <p className="mb-8 text-gray-600">
              Choose from our thoughtfully designed spaces, each crafted to
              support different mindful practices and experiences.
            </p>

            <div className="space-y-8">
              {spaces.map((space) => (
                <div key={space.id} className="bg-stone-50 p-6 rounded-lg">
                  <h3 className="text-xl font-serif mb-2">{space.name}</h3>
                  <p className="text-gray-600 mb-4">{space.description}</p>
                  <div className="h-48 bg-stone-200 rounded-md overflow-hidden">
                    <img
                      src={space.img}
                      alt={space.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-stone-100 rounded-lg">
              <h3 className="text-xl font-serif mb-2">What to Expect</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>Private access to your chosen space for 90 minutes</li>
                <li>Complimentary tea and filtered water</li>
                <li>Gentle guidance on how to use the space (if requested)</li>
                <li>Journals and writing tools available</li>
                <li>Quiet, intentional atmosphere</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookYourPeace;
