import React from "react";
import { Link } from "react-router-dom";

const Project_Card = ({ item }) => {
  return (
    <Link to={item.link} target="_blank" rel="noopener noreferrer">
      <div>
        <div className="card bg-transparent border-slate-300 dark:border-slate-700 border shadow-md shadow-fuchsia-300 hover:scale-105 transition-all duration-300">
          <div className="card-body pb-1">
            <div className="flex items-center">
              <img
                className="h-[15px] inline-block mr-3"
                src="./icons/ss.png"
                alt=""
              />
              <h2 className="card-title inline-block text-rose-500 dark:text-pink-400 font-normal text-2xl">
                {item.title}
              </h2>
            </div>

            <p className="text-lg font-light line-clamp-2 ">
              {item.description}
            </p>
            <h3 className="text-gray-500">{item.created}</h3>
            <div className="card-actions justify-end min-h-10">
              {item.tech.map((i) => {
                return (
                  <div
                    className="badge bg-transparent border border-pink-400"
                    key={Math.random()}
                  >
                    {i}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Project_Card;
