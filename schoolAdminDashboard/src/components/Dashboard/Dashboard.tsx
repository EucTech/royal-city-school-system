// import React from 'react'
// import { useState } from "react";
// import { IoIosNotifications } from "react-icons/io";
import GreetingSection from "./GreetingSection";
// import { Link } from "react-router-dom";
import { School }from "../../ultils/school";
import Overview from "./Overview";


const Dashboard = () => {
  // const [notification, setNotification] = useState(true);

  return (
    <div className="flex flex-col gap-5 mt-6 px-6">
      <div className="flex  gap-16 w-full justify-start md:justify-end pr-10">
        <div className="flex items-center gap-4">
            <img className="w-[40px] sm:w-[50px]" src={School.image} alt="" />
          <span className="flex flex-col ">
              <h2 className="text-[15px] font-semibold">{School.firstName}</h2>
              <p className="text-[13px] font-medium">{School.rank}</p>

          </span>
        </div>

        {/* <Link to="dashboard/notice">
          <div className="relative">
            <IoIosNotifications className="w-[25px] h-[25px]" />

            {notification && (
              <span className=" absolute top-0  right-0 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className=" inline-flex rounded-full h-3 w-3 bg-red-600"></span>
              </span>
            )}
          </div>
        </Link> */}
      </div>

      <GreetingSection />
      <Overview/>
    </div>
  );
};

export default Dashboard;
