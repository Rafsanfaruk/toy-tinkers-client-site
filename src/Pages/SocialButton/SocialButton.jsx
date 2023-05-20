// import React from 'react';

import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SocialButton = () => {

    const { googleSignIn } =useContext(AuthContext);

    const handleGoogleSignIn = () => {
        googleSignIn()
          .then((result) => {
            console.log(result.user);
            toast.success('Google Login successful!', {
                position: toast.POSITION.TOP_RIGHT,
              });
          })
          .catch((error) => {
            console.log(error);
            toast.error('An error occurred. Please try again.', {
                position: toast.POSITION.TOP_RIGHT,
              });
          });
      };

    return (
         <div>
        <div className="divider">OR</div>
        <div className="text-center">
          <button onClick={handleGoogleSignIn}>
            <img src="https://i.ibb.co/gSTHXZJ/google-btn.png" alt="" />
          </button>
        </div>
        <ToastContainer />
      </div>
    );
};

export default SocialButton;