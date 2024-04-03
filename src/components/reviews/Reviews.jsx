import React from "react";

const Reviews = () => {
  return (
    <div className="container mx-auto py-12">
      <h2 className="text-3xl font-bold text-center mb-12">
        Customer's Review
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Review 1 */}
        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white transform transition duration-300 hover:scale-105">
          <img
            src="../images/pic-1.png"
            alt="Customer 1"
            className="w-full h-64 object-cover"
          />
          <div className="px-6 py-4">
            <h3 className="text-xl font-bold mb-2">John Deo</h3>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Omnis
              maxime inventore illo nemo cupiditate quam eligendi nihil sunt
              ullam, laudantium, earum in nam provident quaerat exercitationem?
            </p>
          </div>
        </div>

        {/* Review 2 */}
        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white transform transition duration-300 hover:scale-105">
          <img
            src="../images/pic-2.png"
            alt="Customer 2"
            className="w-full h-64 object-cover"
          />
          <div className="px-6 py-4">
            <h3 className="text-xl font-bold mb-2">John Deo</h3>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Omnis
              maxime inventore illo nemo cupiditate quam eligendi nihil sunt
              ullam, laudantium, earum in nam provident quaerat exercitationem?
            </p>
          </div>
        </div>

        {/* Review 3 */}
        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white transform transition duration-300 hover:scale-105">
          <img
            src="../images/pic-3.png"
            alt="Customer 3"
            className="w-full h-64 object-cover"
          />
          <div className="px-6 py-4">
            <h3 className="text-xl font-bold mb-2">John Deo</h3>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Omnis
              maxime inventore illo nemo cupiditate quam eligendi nihil sunt
              ullam, laudantium, earum in nam provident quaerat exercitationem?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
