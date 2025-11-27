import React from "react";

function ReedsRoofContent() {
  return (
    <div className="max-w-7xl mx-auto p-4 text-xl">
      <div className="bg-gray-100 p-6 md:p-8 lg:p-10 rounded-lg shadow-lg">
        
        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-center mb-8 text-black">
          What We Do
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Card 1 */}
          <div className="bg-gray-50 p-6 md:p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <img
              src="/1.jpg" // ← Replace with your reed bundle image
              alt="Reeds Roofing Material"
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="font-semibold text-lg md:text-xl mb-4">
              Premium Reeds Preparation
            </h3>
            <p className="text-sm md:text-base text-gray-700">
              We source, sort, and prepare high-quality reeds ideal for roofing.
              Each reed is carefully treated to ensure durability, pest resistance,
              and long-lasting natural beauty.
            </p>
            <p className="text-sm md:text-base text-gray-700 mt-2">
              Our preparation process ensures strong, weather-resistant roofing
              that remains cool and elegant.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-50 p-6 md:p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <img
              src="/2.jpg" // ← Replace with roofing process image
              alt="Roof Construction"
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="font-semibold text-lg md:text-xl mb-4">
              Reeds Roof Construction
            </h3>
            <p className="text-sm md:text-base text-gray-700">
              Our skilled craftsmen construct eco-friendly, natural reed roofs with
              precision. We maintain structural integrity while achieving a beautiful,
              traditional, and modern finish.
            </p>
            <p className="text-sm md:text-base text-gray-700 mt-2">
              Whether its a cottage, resort, gazebo, or home, we deliver strong,
              leak-proof, and long-lasting roofing systems.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-50 p-6 md:p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <img
              src="/3.jpg" // ← Replace with your completed roof image
              alt="Completed Reed Roof"
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="font-semibold text-lg md:text-xl mb-4">
              Completed Projects
            </h3>
            <p className="text-sm md:text-base text-gray-700">
              We pride ourselves on successfully completed reed roofing projects
              that blend natural materials with modern structural standards.
            </p>
            <p className="text-sm md:text-base text-gray-700 mt-2">
              Explore our portfolio of stunning completed roofs crafted to withstand
              harsh climates while remaining beautiful for years.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default ReedsRoofContent;
