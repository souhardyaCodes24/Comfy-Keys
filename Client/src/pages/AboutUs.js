import React from "react";

const AboutUs = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-6">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-3xl w-full">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          About <span className="text-purple-600">Us</span>
        </h2>
        <p className="text-gray-600 mb-6">
          We are dedicated to helping you find your dream home. With our
          state-of-the-art technology and dedicated team, we provide the best
          services to make your home search easier and more efficient.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-200 rounded-lg p-4">
            <h3 className="text-xl font-semibold text-gray-800">Our Mission</h3>
            <p className="text-gray-600 mt-2">
              To connect people with their ideal homes through a seamless and
              transparent process.
            </p>
          </div>
          <div className="bg-gray-200 rounded-lg p-4">
            <h3 className="text-xl font-semibold text-gray-800">Our Vision</h3>
            <p className="text-gray-600 mt-2">
              To be the leading platform in real estate by leveraging
              technology, trust, and innovation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
