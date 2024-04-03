import React from "react";
import NavBar from "./components/header/NavBar";
import Banner from "./components/banner/Banner";
import Features from "./components/features/Features";
import Categories from "./components/categories/Categories";
import Products from "./components/products/Products";
import Reviews from "./components/reviews/Reviews";
import Footer from "./components/footer/Footer";

const Layout = () => {
  return (
    <div>
      <NavBar />
      {/* <Banner /> */}
      {/* <Features /> */}
      <Categories />
      <Products />
      {/* <Reviews /> */}
      <Footer />
    </div>
  );
};

export default Layout;
