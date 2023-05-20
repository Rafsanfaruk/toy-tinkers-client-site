// import React from 'react';

import { useEffect, useState } from "react";
import ToyCard from "../ToyCard/ToyCard";

const AllToys = () => {
  const [allToys, setToys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/allToys")
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, []);
  return (
    <div>
      <div className="text-center mt-10">
        <h2 className="text-4xl  font-bold">All Toys here</h2>
        <p className="font-semibold">
          Toys play a crucial role in a child development and provide them with{" "}
          <br />
          endless hours of fun and learning.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
       {
        allToys.map(allToy => <ToyCard
        key={allToy._id}
        allToy={allToy}
        ></ToyCard>)
       }
      </div>
    </div>
  );
};

export default AllToys;
