import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav class="bg-white text-blue-900 py-4">
        <div class="container mx-auto flex justify-between items-center">
          <div class="flex flex-col">
            <div class="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 mr-4 cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
              <h1 class="text-lg font-semibold">Gupta Kirana Bhandar</h1>
            </div>
            <span class="ml-10 text-sm">Patna, Bihar</span>
          </div>
          <div class="flex items-center space-x-4">
            <input
              type="text"
              placeholder='Search "Dal"'
              class="px-4 py-2 bg-white rounded-md border-none text-blue-900 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button class="bg-blue-900 text-white px-4 py-2 rounded-md font-semibold hover:bg-gray-900 transition duration-300">
              Login / Register
            </button>
            <button class="relative group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8 rounded-full p-2 bg-gray-100"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 2a4 4 0 00-4 4v1a4 4 0 014-4zM5 7a1 1 0 112 0v1a1 1 0 11-2 0V7zm10 0a1 1 0 112 0v1a1 1 0 11-2 0V7zM5 10a1 1 0 100 2h10a1 1 0 100-2H5zm-2 3a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 011-1z"
                  clip-rule="evenodd"
                />
              </svg>
              <span class="absolute top-0 right-0 h-4 w-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center group-hover:bg-red-600">
                3
              </span>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
