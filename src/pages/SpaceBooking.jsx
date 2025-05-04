import { useParams, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-hot-toast";

const SpaceBooking = () => {
  const { spaceId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { title, image, description } = location.state || {};

  const [loading, setLoading] = useState(false);

  const spaceDetails = {
    title:
      title ||
      spaceId.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()),
    image: image || `/images/${spaceId}.jpg`,
    description:
      description ||
      "This is a peaceful space perfect for your creativity, focus, or relaxation.",
    durationOptions: ["30 minutes", "1 hour", "2 hours"],
  };

  const handleConfirm = (e) => {
    e.preventDefault();
    setLoading(true);

    toast.success("✅ Your booking was successful!");

    setTimeout(() => {
      setLoading(false);
      navigate("/");
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-light py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
        <img
          src={spaceDetails.image}
          alt={spaceDetails.title}
          className="w-full h-64 object-cover rounded mb-6"
        />

        <h1 className="text-3xl font-serif mb-4">{spaceDetails.title}</h1>
        <p className="text-gray-700 mb-6">{spaceDetails.description}</p>

        <form className="space-y-4" onSubmit={handleConfirm}>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Choose Duration
            </label>
            <select
              className="w-full border border-gray-300 rounded px-3 py-2"
              disabled={loading} // Optional: disable when loading
            >
              {spaceDetails.durationOptions.map((option, idx) => (
                <option key={idx}>{option}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Preferred Date
            </label>
            <input
              type="date"
              className="w-full border border-gray-300 rounded px-3 py-2"
              disabled={loading}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Additional Notes
            </label>
            <textarea
              className="w-full border border-gray-300 rounded px-3 py-2"
              rows="4"
              placeholder="Anything specific you'd like?"
              disabled={loading}
            />
          </div>

          <button
            type="submit"
            className={`bg-dark text-white py-2 px-6 rounded transition flex items-center justify-center ${
              loading ? "opacity-75 cursor-not-allowed" : "hover:bg-opacity-90"
            }`}
            disabled={loading}
          >
            {loading ? (
              <div className="flex items-center space-x-2">
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  ></path>
                </svg>
                <span></span>
              </div>
            ) : (
              "Confirm Booking"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SpaceBooking;
