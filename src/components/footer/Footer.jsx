import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Left Section */}
          <div className="col-span-2 lg:col-span-1">
            <h2 className="text-xl font-bold mb-4">Gupta Kirana Bhandar.</h2>
            <p className="text-sm mb-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus,
              Laudantium?
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-500 hover:text-blue-400">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-blue-500 hover:text-blue-400">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-blue-500 hover:text-blue-400">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-blue-500 hover:text-blue-400">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>

          {/* Right Section */}
          <div className="col-span-1 lg:col-span-3">
            <div className="grid grid-cols-2 gap-4">
              {/* Contact Info */}
              <div>
                <h3 className="text-lg font-bold mb-4">Contact Info</h3>
                <p className="text-sm mb-2">+123 456 7890</p>
                <p className="text-sm mb-2">+111 222 3333</p>
                <p className="text-sm mb-2">name@email.com</p>
                <p className="text-sm">Patna, Bihar</p>
              </div>

              {/* Quick Info */}
              <div>
                <h3 className="text-lg font-bold mb-4">Quick Info</h3>
                <ul className="text-sm">
                  <li className="mb-2">Home</li>
                  <li className="mb-2">Features</li>
                  <li className="mb-2">Products</li>
                  <li className="mb-2">Categories</li>
                  <li>Reviews</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-8">
          <p className="text-sm">Created By Eiosys | All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
