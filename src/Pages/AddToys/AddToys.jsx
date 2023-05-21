// import React from 'react';

import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddToys = () => {
  const toys = useLoaderData();
  const { user } = useContext(AuthContext);

  const {
    name,
    _id,
    picture_url,
    seller_name,
    sub_category,
    price,
    available_quantity,
    seller_email,
  } = toys;

  const handleAddToy = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = user?.email;
    const price = form.price.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;

    const addedToys = {
      name,
      email,
      price,
      quantity,
      rating,
      sub_category,
      picture_url,
    };
    console.log(addedToys);
    fetch("http://localhost:5000/addToys", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addedToys),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.message) {
          toast.success("Toy added successfully!", {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
      });
  };

  return (
    <div className="m-10">
      <h2 className="text-center text-3xl font-bold">Add Toys:{name}</h2>

      <form onSubmit={handleAddToy}>
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              defaultValue={user?.name}
              placeholder="name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              defaultValue={user?.seller_name}
              placeholder="email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Sub-category</span>
            </label>
            <input
              type="text"
              name="category"
              defaultValue={sub_category}
              placeholder="Category"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price </span>
            </label>
            <input
              type="text"
              name="price"
              defaultValue={"$" + price}
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
              name="rating"
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
              name="quantity"
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
              name="details"
              placeholder="Details"
              className="input input-bordered h-20"
            />
          </div>
        </div>
        <div className="form-control mt-6">
          <input
            className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full"
            type="submit"
            value="Add Toy "
          />
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default AddToys;

// toast.success('Toy added successfully!', {
//     position: toast.POSITION.BOTTOM_RIGHT
//   });
