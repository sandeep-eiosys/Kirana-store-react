import React from "react";

const Features = () => {
  return (
    <div className="container mx-auto py-12">
      <h2 className="text-3xl font-bold text-center mb-12">Our Features</h2>
      <div className="flex flex-wrap justify-center">
        {/* Feature 1 */}
        <div className="max-w-xs rounded-lg overflow-hidden shadow-lg bg-white mx-4 mb-8 transform transition duration-300 hover:scale-105">
          <img
            src="../images/feature-img-1.png"
            alt="Fresh And Organic"
            className="w-full h-46 object-cover"
          />
          <div className="px-6 py-4">
            <h3 className="text-xl font-bold mb-2">Fresh And Organic</h3>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
              impedit earum!
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Read More
            </button>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="max-w-xs rounded-lg overflow-hidden shadow-lg bg-white mx-4 mb-8 transform transition duration-300 hover:scale-105">
          <img
            src="../images/feature-img-2.png"
            alt="Fast Delivery"
            className="w-full h-46 object-cover"
          />
          <div className="px-6 py-4">
            <h3 className="text-xl font-bold mb-2">Fast Delivery</h3>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
              impedit earum!
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-8">
              Read More
            </button>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="max-w-xs rounded-lg overflow-hidden shadow-lg bg-white mx-4 mb-8 transform transition duration-300 hover:scale-105">
          <img
            src="../images/feature-img-3.png"
            alt="Easy Payment"
            className="w-full h-46 object-cover"
          />
          <div className="px-6 py-4">
            <h3 className="text-xl font-bold mb-2">Easy Payment</h3>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
              impedit earum!
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
