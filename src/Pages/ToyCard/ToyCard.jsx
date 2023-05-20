// import React from 'react';

import { Link } from "react-router-dom";

const ToyCard = ({ allToy }) => {
  const {_id, picture_url, seller_name, sub_category, price, available_quantity } =
    allToy;

  return (
    <div className="card w-full md:w-96 bg-base-100 shadow-xl mx-2 md:mx-5 my-4">
      <figure className="w-full h-48 md:h-64 overflow-hidden">
        <img
          src={picture_url}
          alt="Shoes"
          className="w-full h-full object-cover"
        />
      </figure>
      <div className="card-body p-4">
        <h2 className="card-title text-lg font-semibold">{sub_category}</h2>
        <p className="mb-2">Seller: {seller_name}</p>
        <p className="mb-2">Price: ${price}</p>
        <p className="mb-2">Available Quantity: {available_quantity}</p>
        <div className="card-actions flex justify-end">
          <Link to={`/addToy/${_id}`}>
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ToyCard;
