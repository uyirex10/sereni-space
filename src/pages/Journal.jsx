import React from "react";
import { Link } from "react-router-dom";

const journalPosts = [
  {
    id: 1,
    title: "The Science of Stillness",
    excerpt:
      "Recent research reveals how brief moments of stillness can reshape neural pathways and reduce stress hormones.",
    date: "April 26, 2025",
    category: "Research",
    imageSrc: "/images/stillness-science.jpg",
    authorName: "Dr. Emma Rivers",
    authorRole: "Neuroscience Researcher",
    authorImage: "/images/author-emma.jpg",
  },
  {
    id: 2,
    title: "Morning Rituals for Centered Days",
    excerpt:
      "Five simple practices that take less than 15 minutes but transform how you move through your day.",
    date: "April 19, 2025",
    category: "Practices",
    imageSrc: "/images/morning-rituals.jpg",
    authorName: "Michael Chen",
    authorRole: "Mindfulness Coach",
    authorImage: "/images/author-michael.jpg",
  },
  {
    id: 3,
    title: "Creating Your Home Sanctuary",
    excerpt:
      "How thoughtful design choices can transform any corner of your home into a space that nurtures calm.",
    date: "April 12, 2025",
    category: "Spaces",
    imageSrc: "/images/home-sanctuary.jpg",
    authorName: "Sofia Mendez",
    authorRole: "Interior Designer",
    authorImage: "/images/author-sofia.jpg",
  },
];

const Journal = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-amber-400 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl font-serif tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              The Journal
            </h1>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-600 sm:mt-4">
              Thoughts, research, and guidance for your journey into mindful
              living
            </p>
          </div>
        </div>
      </div>

      {/* Featured Post */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:flex items-center gap-12">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <img
              src="/images/featured-post.jpg"
              alt="Featured post"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>
          <div className="lg:w-1/2">
            <div className="text-sm font-medium text-amber-400 mb-2">
              Featured Article
            </div>
            <h2 className="text-3xl font-serif font-medium text-gray-900 mb-4">
              Breathing Techniques from Around the World
            </h2>
            <p className="text-gray-600 mb-6 text-lg">
              From pranayama to the Wim Hof method, explore how different
              cultures have developed breathing techniques to access deeper
              states of awareness and wellbeing.
            </p>
            <div className="flex items-center mb-6">
              <img
                src="/images/author-wong.jpg"
                alt="Author"
                className="w-10 h-10 rounded-full mr-4"
              />
              <div>
                <p className="text-sm font-medium text-gray-900">
                  Dr. James Wong
                </p>
                <p className="text-sm text-gray-500">
                  Respiratory Specialist • April 28, 2025
                </p>
              </div>
            </div>
            <Link
              to="/journal/breathing-techniques"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-amber-400 hover:bg-amber-500"
            >
              Read Article
            </Link>
          </div>
        </div>
      </div>

      {/* Recent Posts */}
      <div className="bg-stone-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif tracking-tight text-gray-900 sm:text-4xl">
              Recent Articles
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-600">
              Insights and inspiration to support your practice
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {journalPosts.map((post) => (
              <div
                key={post.id}
                className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="flex-shrink-0">
                  <img
                    className="h-48 w-full object-cover"
                    src={post.imageSrc}
                    alt={post.title}
                  />
                </div>
                <div className="flex-1 p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-amber-400">
                      {post.category}
                    </p>
                    <Link to={`/journal/${post.id}`} className="block mt-2">
                      <p className="text-xl font-semibold font-serif text-gray-900">
                        {post.title}
                      </p>
                      <p className="mt-3 text-base text-gray-600">
                        {post.excerpt}
                      </p>
                    </Link>
                  </div>
                  <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        className="h-10 w-10 rounded-full"
                        src={post.authorImage}
                        alt={post.authorName}
                      />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">
                        {post.authorName}
                      </p>
                      <div className="flex space-x-1 text-sm text-gray-500">
                        <p>{post.date}</p>
                        <span aria-hidden="true">&middot;</span>
                        <p>{post.authorRole}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/journal/archive"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-amber-400 bg-white hover:bg-gray-50 border-amber-400"
            >
              View All Articles
            </Link>
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-amber-400 rounded-lg shadow-xl overflow-hidden">
          <div className="px-6 py-12 sm:px-12 lg:flex lg:items-center lg:py-16">
            <div className="lg:w-0 lg:flex-1">
              <h2 className="text-3xl font-serif text-white tracking-tight">
                Subscribe to our newsletter
              </h2>
              <p className="mt-3 max-w-3xl text-lg text-amber-100">
                Receive our latest articles, practice guides, and event
                announcements directly to your inbox.
              </p>
            </div>
            <div className="mt-8 lg:mt-0 lg:ml-8">
              <form className="sm:flex">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="w-full px-5 py-3 border-white focus:ring-white focus:border-white sm:max-w-xs rounded-md"
                  placeholder="Enter your email"
                />
                <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-amber-400 bg-white hover:bg-amber-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-700 focus:ring-white"
                  >
                    Notify me
                  </button>
                </div>
              </form>
              <p className="mt-3 text-sm text-amber-100">
                We care about your data. Read our{" "}
                <Link
                  to="/privacy-policy"
                  className="text-white font-medium underline"
                >
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journal;
