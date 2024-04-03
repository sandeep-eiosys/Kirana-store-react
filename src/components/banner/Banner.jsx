import React from "react";

const Banner = () => {
  return (
    <div className="w-full my-1 shadow-lg">
      <section
        className="h-96 flex justify-center items-center bg-cover bg-center transform transition duration-300 hover:scale-105"
        style={{
          backgroundImage: 'url("../images/banner-bg.webp")',
        }}
      >
        <div className="text-gray-950 text-center">
          <h3 className="text-3xl font-bold mb-4">
            Fresh and <span className="font-bold">Affordable</span> products
          </h3>
          <p className="text-lg">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam
            vitae perspiciatis neque soluta.
          </p>
          <button className="btn btn-outline my-10">Register Here</button>
        </div>
      </section>
    </div>
  );
};

export default Banner;
