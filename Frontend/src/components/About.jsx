import React from "react";
import SpiderMan from "../assets/SpiderMan.webp";
import Navbar from "./Navbar";
import Footer from "./Footer";

const About = () => {
  return (
    <>
      <Navbar />
      <div>
        <section className="bg-white dark:bg-gray-900">
          <div className="hero bg:white text-black dark:text-white dark:bg-gray-900 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <img src={SpiderMan} className="max-w-sm rounded-lg shadow-2xl" />
              <div>
                <h1 className="text-5xl font-bold">Box Office News!</h1>
                <p className="py-6">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi. Lorem ipsum dolor sit amet
                  consectetur, adipisicing elit.Corporis molestiae nulla,
                  quibusdam labore autem nam quae? Porro temporibus consequatur
                  ducimus pariatur assumenda animi, saepe ratione. Tempore
                  soluta et, dicta voluptas vero illo a illum, ipsum dolor
                  placeat culpa iure voluptatum nesciunt ipsam maiores fuga
                  explicabo ut excepturi eveniet consequuntur quasi!
                </p>
                <button className="btn btn-primary">Get Started</button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default About;
