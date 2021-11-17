import React from "react";
import Blog from "../Blogs/Blog";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";
import ServiceOfPackages from "../ServiceOfPackages/ServiceOfPackages";
import Slider from "../Slider/Slider";
import TopPlaces from "../TopPlaces/TopPlaces";

const Home = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Slider></Slider>
      <ServiceOfPackages></ServiceOfPackages>
      <Blog ShowNavAndFooter={false} shortDescription={true} colNum="6" />
      <TopPlaces></TopPlaces>
      <Footer></Footer>
    </div>
  );
};

export default Home;
