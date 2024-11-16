import React from "react";
import Book from "../assets/Book.png";

const Cards = ({ item }) => {
  return (
    <>
      <div className="hover:scale-105  FREEBOOK duration-200 mt-4 my-3 p-3">
        <div className="card bg-base-100 w-[280px] ml-[30px] md:ml-0 md:w-109 shadow-xl">
          <figure>
            <img src={Book} alt="Shoes" />
          </figure>
          <div className="card-body dark:text-white dark:bg-slate-700 bg-white text-slate-800">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions flex justify-between">
              <div className="badge badge-outline">${item.price}</div>
              <div className="cursor-pointer px-2 py-1 rounded-lg border-[2px] hover:bg-pink-500 hover:text-white duration-500">
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
