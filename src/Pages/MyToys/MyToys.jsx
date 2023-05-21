// import React from 'react';

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const MyToys = () => {
    const { user } =useContext(AuthContext);

    const [myToy,setMyToys] =useState([]);

    const url =`http://localhost:5000/addToys?email=${user?.email}`;
    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setMyToys(data);
        })
    },[])
    return (
        <div>
         <h3 className="text-3xl text-center font-bold m-5">My toys here:{myToy.length}</h3>
        </div>
    );
};

export default MyToys;