import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import { Link } from "react-router-dom";
import axios from "axios";

const Course = () => {
  const [book, setBook] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get(`http://localhost:4000/book`);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);

  return (
    <>
      <div className="max-w-screen-2xl dark:text-white text-black container mx-auto md:px-20 px-4">
        <div className="mt-20 items-center justify-center text-center">
          <h1 className="text-[30px] relative top-5 md:top-10 font-semibold md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500"> Here! :)</span>
          </h1>
          <p className="relative top-10 md:top-20 text-sm md:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            reiciendis quisquam quod non dignissimos pariatur, quo asperiores
            mollitia illum explicabo iusto porro recusandae facere ducimus est!
            Explicabo, id dignissimos! Blanditiis fugiat veniam commodi labore
            aut velit atque facilis vitae veritatis tenetur mollitia quaerat
            suscipit, nobis corporis voluptates.Blanditiis fugiat veniam commodi
            labore aut velit atque facilis vitae
          </p>
          <Link to="/">
            <button className="bg-pink-500 rounded-md hover:bg-pink-700 duration-300 px-4 py-2 font-bold text-white relative top-14 md:top-24">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-32 grid grid-cols-1 ml-[-20px] md:ml-0 md:grid-cols-4">
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Course;
