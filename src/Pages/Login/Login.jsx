// import React from 'react';

import { Link } from "react-router-dom";
import pic from "../../assets/Login/Login.jpg";
import SocialButton from "../SocialButton/SocialButton";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Login = () => {
  const { SignIn } = useContext(AuthContext);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    SignIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success('Login successful!', {
            position: toast.POSITION.TOP_RIGHT,
          });
      })
      .catch((err) => {
        console.log(err);
        toast.error('An error occurred. Please try again.', {
            position: toast.POSITION.TOP_RIGHT,
          });
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className=" w-1/2 mr-12">
          <img src={pic} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-3xl text-center font-bold">Login</h1>
            <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
            <p className="my-4 text-center">
              New to Toy Tinkerers{" "}
              <Link className="text-rose-600 font-bold" to="/singup">
                Sign Up
              </Link>
            </p>
            <SocialButton></SocialButton>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
