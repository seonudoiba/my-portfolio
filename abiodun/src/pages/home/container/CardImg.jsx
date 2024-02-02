import React from 'react'
import "../../../components/Project/Project.css";
import { Link } from 'react-router-dom';

const CardImg = ({toImg, toLink, toText}) => {
  return (
    <div className="w-full rounded-xl bg-white p-3 z-[1] relative">
      <img
        src={toImg}
        alt="title"
        className="w-full object-cover object-center h-auto md:h-52 lg:h-48 xl:h-60"
      />
      <div className="py-5">
        <h2 className="font-roboto font-bold text-xl text-yellow-700 md:text-2xl lg:text-[21px]">
          {toText}
        </h2>
      </div>
      <Link
        to={toLink}
        className=" mt-4 bg-transparent hover:bg-yellow-700 text-yellow-700 font-semibold hover:text-white py-2 px-4 border border-yellow-700 hover:border-transparent rounded"
      >
        View here
      </Link>
    </div>
  );
}

export default CardImg