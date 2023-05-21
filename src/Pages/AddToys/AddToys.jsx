// import React from 'react';

import { useLoaderData } from "react-router-dom";

const AddToys = () => {
  const toys = useLoaderData();

  const {
    _id,
    picture_url,
    seller_name,
    sub_category,
    price,
    available_quantity,
    seller_email,
  } = toys;

  return (
    <div className="m-10">
      <form>
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Sub-category</span>
            </label>
            <input
              type="text"
              placeholder="Category"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="text"
              placeholder="Price"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <input
              type="text"
              placeholder="Rating"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Available quantity</span>
            </label>
            <input
              type="text"
              placeholder="Available quantity"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Detail description</span>
            </label>
            <input
              type="text"
              placeholder="Details"
              className="input input-bordered"
            />
          </div>
        </div>
        <div className="form-control mt-6">
          <input
            className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full"
            type="submit"
            value="Add toy "
          />
        </div>
      </form>
    </div>
  );
};

export default AddToys;
