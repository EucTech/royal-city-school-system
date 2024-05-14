// import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
// import moment from "moment";

const AdminLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = () => {
    navigate("/dashboard");
  };

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center gap-40">
      <div className=" w-[80%] sm:w-[70%] md:w-[50%] lg:w-[40%] xl:w-[30%] flex flex-col p-2 ">
        <h1 className="text-[#430A5D] text-2xl font-semibold">
          Welcome Back 🥰
        </h1>
        <p className="pt-1 pb-10 text-[#666666]">Sign in to your account</p>

        <div className="w-[100%] border-none">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <div className="mb-2 block">
                <label htmlFor="email" className="text-[#333333] text-sm">
                  Email Address
                </label>
              </div>
              <input
                id="email"
                type="email"
                placeholder="Your email"
                required
                className="w-full pt-[11px] pb-[11px] text-[#666666] pl-3 text-[16px] border-2 border-solid border-[#E6E6E6] focus:outline-none focus:ring-2 focus:ring-[#430A5D] focus:border-transparent rounded-lg"
              />
            </div>
            <div>
              <div className="mb-2 block">
                <label htmlFor="password" className="text-[#333333] text-sm">
                  Password
                </label>
              </div>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Your Password"
                  required
                  className="w-full pt-[11px] pb-[11px] text-[#666666] pl-3 text-[16px] border-2 border-solid border-[#E6E6E6] focus:outline-none focus:ring-2 focus:ring-[#430A5D] focus:border-transparent rounded-lg"
                />
                {showPassword ? (
                  <FontAwesomeIcon
                    onClick={toggleShowPassword}
                    className="absolute top-4 right-4 cursor-pointer"
                    icon={faEye}
                  />
                ) : (
                  <FontAwesomeIcon
                    onClick={toggleShowPassword}
                    className="absolute top-4 right-4 cursor-pointer"
                    icon={faEyeSlash}
                  />
                )}
              </div>
              <Link to="#">
                <p className="text-right pt-2 text-[14px] text-[#430A5D]">
                  Forgot Password?
                </p>
              </Link>
            </div>
            <button
              className="text-white bg-[#430A5D] rounded-lg p-3 mt-8 hover:bg-opacity-90 active:scale-95"
              type="submit"
            >
              Log in
            </button>
          </form>
          {/* <p className="mt-3 text-sm text-center text-[#666666]">
            Don't have an account? <Link to="#" className="text-[#430A5D]">Sign up</Link>
          </p> */}
        </div>
      </div>

      <p className="text-sm text-[#333333]">
        Copyright &#169; 2024 Royal City School.
      </p>
    </div>
  );
};

export default AdminLogin;
