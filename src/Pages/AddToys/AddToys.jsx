// import React from 'react';

import { useLoaderData } from "react-router-dom";

const AddToys = () => {

    const toys =useLoaderData();
    const {_id, picture_url, seller_name, sub_category, price, available_quantity,seller_email } =
    toys;

    return (
        <div>
            <h2>Added Toy here:{toys.picture_url}</h2>
        </div>
    );
};

export default AddToys;