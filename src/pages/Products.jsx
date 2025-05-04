import React, { useState, useRef } from "react";
import { motion } from "framer-motion"; // eslint-disable-line no-unused-vars

const products = [
  {
    id: 1,
    name: "Meditation Cushion Set",
    category: "Essentials",
    price: 89.99,
    description:
      "A premium meditation cushion set designed for comfort and stability during your practice. Includes matching zabuton mat.",
    image: "/images/products/meditation-cushion.jpg",
    rating: 4.8,
    features: [
      "Ergonomic design for proper posture",
      "Natural cotton canvas cover",
      "Removable and washable outer cover",
      "Sustainable buckwheat hull filling",
    ],
  },
  {
    id: 2,
    name: "Essential Oil Diffuser",
    category: "Ambiance",
    price: 65.0,
    description:
      "A beautifully crafted ceramic diffuser that releases calming scents to enhance your mindfulness practice and daily rituals.",
    image: "/images/products/oil-diffuser.jpg",
    rating: 4.7,
    features: [
      "Silent ultrasonic technology",
      "Adjustable mist intensity",
      "LED light with color options",
      "8-hour continuous operation",
    ],
  },
  {
    id: 3,
    name: "Mindfulness Journal",
    category: "Practice",
    price: 32.5,
    description:
      "A thoughtfully designed journal with prompts and exercises to deepen your mindfulness practice and track your journey.",
    image: "/images/products/mindfulness-journal.jpg",
    rating: 4.9,
    features: [
      "Premium recycled paper",
      "Guided reflection prompts",
      "Gratitude and intention sections",
      "Mindful tracking templates",
    ],
  },
  {
    id: 4,
    name: "Ritual Tea Collection",
    category: "Essentials",
    price: 45.0,
    description:
      "A curated collection of artisanal teas specifically blended to complement different mindfulness practices and times of day.",
    image: "/images/products/tea-collection.jpg",
    rating: 4.6,
    features: [
      "Organic ingredients",
      "Four unique blends",
      "Hand-blended in small batches",
      "Resealable eco-friendly packaging",
    ],
  },
  {
    id: 5,
    name: "Meditation Timer",
    category: "Tools",
    price: 78.5,
    description:
      "A beautiful wooden meditation timer that helps you maintain consistent practice without digital distractions.",
    image: "/images/products/meditation-timer.jpg",
    rating: 4.5,
    features: [
      "Natural wood construction",
      "Soothing bell tones",
      "Adjustable intervals",
      "No screens or digital elements",
    ],
  },
  {
    id: 6,
    name: "Breathing Stone",
    category: "Tools",
    price: 49.99,
    description:
      "A handheld stone designed to guide your breathing patterns through gentle vibrations, helping you center and calm your mind.",
    image: "/images/products/breathing-stone.jpg",
    rating: 4.7,
    features: [
      "Smooth polished stone",
      "Customizable breathing patterns",
      "Long battery life",
      "Discreet and portable",
    ],
  },
];

const categories = ["All", "Essentials", "Ambiance", "Practice", "Tools"];

function Products() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeProduct, setActiveProduct] = useState(null);
  const [showSubscriptionSuccess, setShowSubscriptionSuccess] = useState(false);

  // Create ref for categories section to scroll to
  const categoriesRef = useRef(null);

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  // Function to scroll to categories section
  const scrollToCategories = () => {
    categoriesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Function to handle subscription
  const handleSubscribe = () => {
    setShowSubscriptionSuccess(true);
    setTimeout(() => {
      setShowSubscriptionSuccess(false);
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero Section */}
      <div className="relative text-white">
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/images/hero-bg-2.jpg"
            alt="Mindfulness space"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-stone-900 opacity-50"></div>
        </div>
        <div className="container mx-auto px-6 py-32 relative z-10">
          <h1 className="text-5xl md:text-6xl font-serif mb-6">
            Tools for Presence
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mb-8">
            Thoughtfully designed products to support your mindfulness journey
            and create moments of stillness in everyday life.
          </p>
          <button
            onClick={scrollToCategories}
            className="bg-amber-400 hover:bg-amber-500 text-stone-900 font-medium px-8 py-3 rounded-sm transition-colors"
          >
            Explore Collection
          </button>
        </div>
      </div>

      {/* Category Filters */}
      <div ref={categoriesRef} className="container mx-auto px-6 py-12">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-colors ${
                selectedCategory === category
                  ? "bg-stone-800 text-white"
                  : "bg-stone-100 text-stone-800 hover:bg-stone-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-medium text-stone-800">
                    {product.name}
                  </h3>
                  <span className="bg-amber-100 text-amber-800 text-xs font-medium px-2.5 py-1 rounded">
                    {product.category}
                  </span>
                </div>
                <p className="text-stone-600 mb-4 line-clamp-2">
                  {product.description}
                </p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xl font-medium text-stone-900">
                    ${product.price}
                  </span>
                  <div className="flex items-center">
                    <span className="text-amber-500 mr-1">★</span>
                    <span className="text-sm text-stone-600">
                      {product.rating}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() =>
                    setActiveProduct(
                      activeProduct === product.id ? null : product.id
                    )
                  }
                  className="text-stone-600 text-sm flex items-center hover:text-stone-900 mb-4"
                >
                  {activeProduct === product.id
                    ? "Hide details"
                    : "Show details"}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-4 w-4 ml-1 transition-transform ${
                      activeProduct === product.id ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {activeProduct === product.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="text-sm text-stone-600"
                  >
                    <ul className="list-disc pl-5 space-y-1">
                      {product.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </motion.div>
                )}
                <div className="flex justify-between items-center mt-4">
                  <button className="bg-stone-800 hover:bg-stone-900 text-white font-medium py-2 px-4 rounded-sm transition-colors">
                    Add to Cart
                  </button>
                  <button className="text-stone-600 hover:text-stone-900">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-stone-100 py-16 mt-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-12">
            Why Choose Our Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-amber-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-amber-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-3">Mindfully Crafted</h3>
              <p className="text-stone-600">
                Every product is designed with intention and attention to the
                smallest details to enhance your practice.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="bg-amber-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-amber-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-3">Sustainably Sourced</h3>
              <p className="text-stone-600">
                We prioritize eco-friendly materials and ethical production
                processes in everything we create.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="bg-amber-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-amber-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-3">
                Tested by Practitioners
              </h3>
              <p className="text-stone-600">
                All our items are thoroughly tested by mindfulness practitioners
                to ensure they truly support your practice.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="container mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-12">
          What Our Community Says
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="text-amber-500 flex">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            <p className="text-stone-600 mb-6">
              "The meditation cushion set completely transformed my practice.
              The comfort and support it provides allows me to sit for longer
              periods without discomfort."
            </p>
            <div className="flex items-center">
              <img
                src="/images/testimonials/anita.jpg"
                alt="Anita S."
                className="w-12 h-12 rounded-full object-cover mx-auto"
              />
              <div className="mt-4">
                <h4 className="font-medium">Anita S.</h4>
                <p className="text-sm text-stone-500">Marketing Executive</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="text-amber-500 flex">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            <p className="text-stone-600 mb-6">
              "I use the breathing stone during stressful meetings. It's
              discreet yet incredibly effective at helping me stay centered and
              calm under pressure."
            </p>
            <div className="flex items-center">
              <img
                src="/images/testimonials/michael.jpg"
                alt="Michael T."
                className="w-12 h-12 rounded-full object-cover mx-auto"
              />
              <div className="mt-4">
                <h4 className="font-medium">Michael T.</h4>
                <p className="text-sm text-stone-500">Marketing Executive</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="text-amber-500 flex">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            <p className="text-stone-600 mb-6">
              "The mindfulness journal has become an essential part of my
              morning ritual. The prompts are thoughtful and have helped me
              develop a more consistent practice."
            </p>
            <div className="flex items-center">
              <img
                src="/images/testimonials/helen.jpg"
                alt="Elena R."
                className="w-12 h-12 rounded-full object-cover mx-auto"
              />
              <div className="mt-4">
                <h4 className="font-medium">Helen A.</h4>
                <p className="text-sm text-stone-500">Yoga Instructor</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div className="bg-stone-100 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">
            Stay Connected
          </h2>
          <p className="text-lg text-stone-600 mb-8 max-w-2xl mx-auto">
            Join our community to receive mindfulness tips, product updates, and
            special offers.
          </p>
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-stone-400"
            />
            <button
              onClick={handleSubscribe}
              className="bg-stone-800 hover:bg-stone-900 text-white font-medium px-6 py-3 rounded-sm transition-colors"
            >
              Subscribe
            </button>
          </div>

          {/* Subscription success message */}
          {showSubscriptionSuccess && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 bg-green-100 text-green-800 px-4 py-2 rounded-md inline-block"
            >
              Thank you for subscribing! You'll receive our updates soon.
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Products;
