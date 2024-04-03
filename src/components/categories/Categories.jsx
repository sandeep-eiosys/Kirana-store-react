import React from "react";

const Categories = () => {
  return (
    <div className="py-10 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold mb-6">Shop by Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {/* Category Card 1 */}
          <div className="flex flex-col items-center justify-center bg-white rounded-full p-4 shadow-md">
            <img
              src="../images/cat-1.png"
              alt="Vegetables"
              className="w-16 h-16 object-cover mb-2 rounded-full"
            />
            <span className="text-lg font-semibold">Vegetables</span>
          </div>
          {/* Category Card 2 */}
          <div className="flex flex-col items-center justify-center bg-white rounded-full p-4 shadow-md">
            <img
              src="../images/cat-2.png"
              alt="Dal"
              className="w-16 h-16 object-cover mb-2 rounded-full"
            />
            <span className="text-lg font-semibold">Fruits</span>
          </div>
          {/* Category Card 3 */}
          <div className="flex flex-col items-center justify-center bg-white rounded-full p-4 shadow-md">
            <img
              src="../images/cat-3.png"
              alt="Atta"
              className="w-16 h-16 object-cover mb-2 rounded-full"
            />
            <span className="text-lg font-semibold">Dairy</span>
          </div>
          {/* Category Card 4 */}
          <div className="flex flex-col items-center justify-center bg-white rounded-full p-4 shadow-md">
            <img
              src="../images/cat-4.png"
              alt="Dry fruits"
              className="w-16 h-16 object-cover mb-2 rounded-full"
            />
            <span className="text-lg font-semibold">Meats </span>
          </div>
          {/* Add more category cards here */}
        </div>
      </div>
    </div>
  );
};

export default Categories;
