import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useForm } from "react-hook-form";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const userInfo = {
      fullName: data.fullname,
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:4000/user/signup", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Account Created Successfully!");
        }
        setTimeout(() => {
          window.location.href = "/";
        }, 2000);
      })
      .catch((error) => {
        if (error.response) {
          console.log(error);
          toast.error("ERROR: " + error.response.data);
        }
      });
  };

  return (
    <>
      <Navbar />
      <div className="flex h-screen item-center justify-center">
        <div className="h-[22rem] rounded-lg bg-slate-200 dark:text-white p-4 shadow-lg mt-52 text-black dark:bg-slate-700">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </Link>
            <h3 className="font-bold text-xl">Signup!</h3>
            <div className="mt-4 space-y-2">
              <span>Name</span>
              <br />
              <input
                type="name"
                placeholder="Enter your name"
                className="bg-white dark:bg-slate-600 w-80 px-3 py-1 border rounded-md outline-none"
                {...register("fullname", { required: true })}
              />{" "}
              <br />
              {errors.fullname && (
                <span className="text-sm text-red-600">
                  This field is required
                </span>
              )}
            </div>
            <div className="mt-3 space-y-2">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-white dark:bg-slate-600 w-80 px-3 py-1 border rounded-md outline-none"
                {...register("email", { required: true })}
              />{" "}
              <br />
              {errors.email && (
                <span className="text-sm text-red-600">
                  This field is required
                </span>
              )}
            </div>
            <div className="mt-2 space-y-2">
              <span>Password</span>
              <br />
              <input
                type="password"
                placeholder="Enter your password"
                className="bg-white dark:bg-slate-600 w-80 px-3 py-1 border rounded-md outline-none"
                {...register("password", { required: true })}
              />{" "}
              <br />
              {errors.password && (
                <span className="text-sm text-red-600">
                  This field is required
                </span>
              )}
            </div>
            <div className="flex justify-between mt-5">
              <button
                className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-300"
                onClick={() => chh()}
              >
                Signup
              </button>
              <p>
                Already have an account?
                <span
                  className="underline text-blue-500 cursor-pointer hover:text-blue-700 duration-300"
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                >
                  Login
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Signup;
