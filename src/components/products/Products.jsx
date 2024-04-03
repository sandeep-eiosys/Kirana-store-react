import React from "react";

const ProductCard = ({ name, image, price }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={image} alt={name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">Price: ₹{price}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <button className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

const Products = () => {
  return (
    <div className="container mx-auto py-10">
      <h2 className="text-3xl font-semibold mb-6">Best Seller 🎉</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        <ProductCard
          name="Fresh Oranges- 500 gm"
          image="../images/product-1.png"
          price="86.00"
        />
        <ProductCard
          name="Onions - 500 gm"
          image="../images/product-2.png"
          price="42.00"
        />
        <ProductCard
          name="Cabbage - 1kg"
          image="../images/product-4.png"
          price="50.00"
        />
        <ProductCard
          name="Potatoes - 500 gm"
          image="../images/product-5.png"
          price="30.00"
        />
      </div>
    </div>
  );
};

export default Products;
