import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import classname from "classnames";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { setAccessToken } from "../ultils/tokenData";


const StudentSignUp: React.FC = () => {
  const [titleDropDown, setTitleDropDown] = useState(false);
  const [genderDropDown, setGenderDropDown] = useState(false);
  const [gender, setGender] = useState("Select");
  const [studentClass, setStudentClass]: any = useState(false);
  const [selectedClass, setSelectedClass] = useState("Select");
  const [isLoading, setIsLoading] = useState(false);
  
  const [payload, setPayload] = useState({} as any);
  const [error, setError] = useState({} as any);

  const navigate = useNavigate();

  const genderArray = ["Male", "Female"];
  const classArray = ["JSS 1", "JSS 2", "JSS 3", "SSS 1", "SSS 2", "SSS 3"];

  const titleIcon = classname(
    "text-[14px] transition-all duration-300 ease-in-out",
    {
      "rotate-360": !titleDropDown,
      "rotate-180": titleDropDown,
    }
  );

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const payload = {
      firstname: formData.get("firstName") as string,
      middlename: formData.get("middleName") as string,
      lastname: formData.get("lastName") as string,
      email: formData.get("email") as string,
      password: formData.get("password") as string,
      gender: gender,
      location: formData.get("location") as string,
      student_class: selectedClass,
    };

    try {
      setIsLoading(true);
      const response = await fetch(
        `${import.meta.env.VITE_BASE_URL}/auth/student-signup`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );
      const data = await response.json();
      console.log("This is the data",data);
      setIsLoading(false);
      if (response.ok) {
        toast.success(data.message);
        setPayload("");
        setGender("Select");
        setSelectedClass("Select");
        setIsLoading(false);
        // setAccessToken(data.data.token);
        navigate("/student-login");

      } else if (response.status === 400) {
        toast.error(data.errors || "Bad Request");
      } else {
        toast.error(data.message || "An unexpected error occurred");
      }
    } catch (error: any) {
      console.error("An error occurred: ", error.message);
      setIsLoading(false);
      toast.error(`${error.message}`);
    }
  };

  // if (isLoading) {
  //   return <h1>Loading...</h1>;
  // }

  return (
    <div className="flex flex-col gap-8 w-full p-10">
      <h1 className=" text-center text-[20px] font-medium">
        STUDENT INFORMATION
      </h1>
      <form
        onSubmit={handleSignup}
        className="flex flex-col gap-3 w-[90%] md:w-[60%] lg:w-[50%] items-center mx-auto"
      >
        <div className="flex flex-col w-full">
          <label
            htmlFor="firstName"
            className="text-[14px] font-medium flex items-center gap-1 text-[#333333] mb-2"
          >
            First Name <span className="text-[red]">*</span>
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            required
            className="text-[#999999] py-[7px] px-[10px] border border-solid border-[#E6E6E6] focus:outline-none focus:ring-2 focus:ring-[#430A5D] focus:border-transparent rounded-lg"
          />
        </div>
        <div className="flex flex-col w-full">
          <label
            htmlFor="middleName"
            className="text-[14px] font-medium flex items-center gap-1 text-[#333333] mb-2"
          >
            Middle Name <span className="text-[red]">*</span>
          </label>
          <input
            type="text"
            id="middleName"
            name="middleName"
            required
            className="text-[#999999] py-[7px] px-[10px] border border-solid border-[#E6E6E6] focus:outline-none focus:ring-2 focus:ring-[#430A5D] focus:border-transparent rounded-lg"
          />
        </div>
        <div className="flex flex-col w-full">
          <label
            htmlFor="lastName"
            className="text-[14px] font-medium flex items-center gap-1 text-[#333333] mb-2"
          >
            Last Name <span className="text-[red]">*</span>
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            required
            className="text-[#999999] py-[7px] px-[10px] border border-solid border-[#E6E6E6] focus:outline-none focus:ring-2 focus:ring-[#430A5D] focus:border-transparent rounded-lg"
          />
        </div>
        <div className="flex flex-col w-full">
          <label
            htmlFor="email"
            className="text-[14px] font-medium flex items-center gap-1 text-[#333333] mb-2"
          >
            Email <span className="text-[red]">*</span>
          </label>
          <input
            type="text"
            id="email"
            name="email"
            required
            className="text-[#999999] py-[7px] px-[10px] border border-solid border-[#E6E6E6] focus:outline-none focus:ring-2 focus:ring-[#430A5D] focus:border-transparent rounded-lg"
          />
        </div>
        <div className="flex flex-col w-full">
          <label
            htmlFor="password"
            className="text-[14px] font-medium flex items-center gap-1 text-[#333333] mb-2"
          >
            Password <span className="text-[red]">*</span>
          </label>
          <input
            type="password"
            id="password"
            name="password"
            required
            className="text-[#999999] py-[7px] px-[10px] border border-solid border-[#E6E6E6] focus:outline-none focus:ring-2 focus:ring-[#430A5D] focus:border-transparent rounded-lg"
          />
        </div>

        <div className="flex flex-col w-full">
          <label
            htmlFor="text"
            className="text-[14px] font-medium flex items-center gap-1 text-[#333333] mb-2"
          >
            Gender <span className="text-[red]">*</span>
          </label>

          <div className=" relative">
            <div
              onClick={() => {
                setGenderDropDown(!genderDropDown);
                setTitleDropDown(!titleDropDown);
              }}
              className="flex items-center cursor-pointer justify-between border border-solid border-[#E6E6E6] rounded-lg py-[7px] px-[10px] text-[#999999]"
            >
              <p className="text-[14px] ">{gender}</p>
              <FaAngleDown className={titleIcon} />
            </div>
            {genderDropDown && (
              <div className="absolute z-10 bg-white mb-2 border border-solid w-full mt-1 py-3 px-2 rounded-[4px]">
                {genderArray.map((gender, index) => (
                  <p
                    key={index}
                    className="hover:text-white hover:bg-[#ED6810] text-[14px] rounded pl-2 py-[2px] cursor-pointer"
                    onClick={() => {
                      setGenderDropDown(false);
                      setGender(gender);
                      setTitleDropDown(false);
                    }}
                  >
                    {gender}
                  </p>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col w-full">
          <label
            htmlFor="text"
            className="text-[14px] font-medium flex items-center gap-1 text-[#333333] mb-2"
          >
            Student Class <span className="text-[red]">*</span>
          </label>

          <div className=" relative">
            <div
              onClick={() => {
                setStudentClass(!studentClass);
                setTitleDropDown(!titleDropDown);
              }}
              className="flex items-center cursor-pointer justify-between border border-solid border-[#E6E6E6] rounded-lg py-[7px] px-[10px] text-[#999999]"
            >
              <p className="text-[14px] ">{selectedClass}</p>
              <FaAngleDown className={titleIcon} />
            </div>
            {studentClass && (
              <div className="absolute z-10 bg-white mb-2 border border-solid w-full mt-1 py-3 px-2 rounded-[4px]">
                {classArray.map((stuclass, index) => (
                  <p
                    key={index}
                    className="hover:text-white hover:bg-[#ED6810] text-[14px] rounded pl-2 py-[2px] cursor-pointer"
                    onClick={() => {
                      setStudentClass(false);
                      setSelectedClass(stuclass);
                      setTitleDropDown(false);
                    }}
                  >
                    {stuclass}
                  </p>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col w-full">
          <label
            htmlFor="location"
            className="text-[14px] font-medium flex items-center gap-1 text-[#333333] mb-2"
          >
            Location <span className="text-[red]">*</span>
          </label>
          <input
            type="text"
            id="location"
            name="location"
            required
            className="text-[#999999] py-[7px] px-[10px] border border-solid border-[#E6E6E6] focus:outline-none focus:ring-2 focus:ring-[#430A5D] focus:border-transparent rounded-lg"
          />
        </div>

        <button
          className="flex items-center justify-center w-full md:w-[60%] text-white font-medium text-[15px] mt-10 bg-[#430A5D] rounded py-2 mx-auto active:scale-95 hover:opacity-90"
          type="submit"
        >
          {isLoading ? "Loading..." : "Sign Up"}
        </button>
        <p className="mt-3 text-sm text-center text-[#666666]">
            Already have an account <Link to="/student-login" className="text-[#430A5D]">LogIn</Link>
          </p>
      </form>
    </div>
  );
};

export default StudentSignUp;
