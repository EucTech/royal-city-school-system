// import React,{ useEffect, useState } from "react";
import { useEffect, useState } from "react";
import classNames from "classnames";
import { links } from "../ultils/ultils";
import { IoIosArrowBack } from "react-icons/io";
// import Logo from "../assets/react.svg";
// import Banner from "@/public/assets/images/dashboard/banner.png";
import { NavLink, useLocation } from "react-router-dom";

// import useLogout from "@/hooks/useLogout";

// interface UseLogoutReturn {
//   handleLogout: () => void;
// }

const Sidebar = () => {
  const [toggleCollapse, setToggleCollapse] = useState(false);
  const [isCollapsible, setIsCollapsible] = useState(false);
  const location = useLocation();
  const activePath = location.pathname;
  console.log("activePath", activePath);
  //   const { handleLogout } = useLogout() as UseLogoutReturn;

  useEffect(function mount() {
    const checkScreenSize = () => {
      const isSmallScreen = window.innerWidth < 768;
      setToggleCollapse(isSmallScreen);
    };

    checkScreenSize();

    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const wrapperClasses = classNames(
    "flex flex-col h-[100%]  md:overflow-auto pb-2 rounded-tr-[0] bg-[#430A5D]",
    {
      ["w-72"]: !toggleCollapse,
      ["w-14"]: toggleCollapse,
    }
  );

  const collapseIconClasses = classNames(
    "p-2 rounded bg-white text-[#FF6525] text-[16px] absolute right-3",
    {
      "rotate-180": toggleCollapse,
    }
  );

  const getNavItemClasses = (link: any) => {
    return classNames(
      "flex items-center cursor-pointer text-[15px] rounded w-full navitemclass",
      {
        "bg-[white] text-[#FF6525]":
          (activePath === link.link && !toggleCollapse) ||
          (toggleCollapse && activePath === link.link),
        " hover:text-[#FF6525] ": !toggleCollapse,
        "p-4": !toggleCollapse,
        "py-3 pl-4 pr-2": toggleCollapse,
        "mb-2": !toggleCollapse,
        "ml-6": !toggleCollapse,
        "bg-[white] ml-0  rounded-tl-[80px] rounded-bl-[80px]": activePath === link.link && link.link === '/dashboard',
      }
    );
  };

  const onMouseOver = () => {
    setIsCollapsible(!isCollapsible);
  };

  const handleSidebarToggle = () => {
    setToggleCollapse(!toggleCollapse);
  };

  return (
    <div
      className={`${wrapperClasses} hide-scrollbar`}
      onMouseEnter={onMouseOver}
      onMouseLeave={onMouseOver}
      style={{
        transition: "width 300ms cubic-bezier(0.2, 0, 0, 1) 0s",
        zIndex: 1000,
        height: "100vh",
        width: "",
      }}
    >
        <div className="flex items-center justify-around relative pt-7 w-full">
          <div className="flex flex-row  justify-start items-center  w-full ml-11">
            <div className="">
              {/* <img
                src={Logo}
                alt=""
                className={`${toggleCollapse && "hidden"}`}
              /> */}
            </div>
            <span
              className={classNames(
                "mt-2 text-[24] text-center font-bold  text-white py-2 px-6 rounded-md ",
                {
                  hidden: toggleCollapse,
                }
              )}
            >
              ROYAL CITY
            </span>
          </div>
          {isCollapsible && (
            <button
              className={collapseIconClasses}
              onClick={handleSidebarToggle}
            >
              <IoIosArrowBack />
            </button>
          )}
        </div>

        <div className="flex flex-col items-start mt-10 ">
          {links?.map(({ title, links: sublinks }) => (
            <div key={title} className="w-[100%]">
              {sublinks?.map((link:any) =>
                link.name === "Logout" ? (
                  <button
                    key={link.name}
                    className={getNavItemClasses(link)}
                    // onClick={handleLogout}
                  >
                    <div
                      style={{ width: "1.8rem" }}
                      className={` ${
                        activePath === link.link
                          ? "text-[#FF6525]"
                          : "text-[#8F8E94] hover:text-[#FF6525]"
                      }`}
                    >
                      <img
                        src={link.icon}
                        alt={link.name}
                        className="md:h-[22px] md:w-[22px] sm:h-[18px] sm:w-[18px]"
                      />
                    </div>
                    {!toggleCollapse && (
                      <span
                        className={classNames(
                          `text-md font-normal ${
                            activePath === link.link
                              ? "text-[#FF6525]"
                              : "text-white hover:text-[#FF6525]"
                          }`
                        )}
                      >
                        {link.name}
                      </span>
                    )}
                  </button>
                ) : (
                  <NavLink to={link?.link} key={link?.name}>
                    <span className={getNavItemClasses(link)}>
                      <div
                        style={{ width: "1.5rem" }}
                        className={` ${
                          activePath === link.link
                            ? "text-[#FF6525]"
                            : "text-white hover:text-[#FF6525] font-semibold"
                        }`}
                      >
                        <span className="text-[24px]">{link.icon}</span>
                      </div> &nbsp;&nbsp;
                      {!toggleCollapse && (
                        <span
                          className={classNames(
                            `text-md font-medium ${
                              activePath === link.link
                                ? "text-[#FF6525]"
                                : "text-white hover:text-[#FF6525]"
                            }`
                          )}
                        >
                          {link?.name}
                        </span>
                      )}
                    </span>
                  </NavLink>
                )
              )}
            </div>
          ))}
        </div>
        {/* <div className={`w-full  ${toggleCollapse ? "hidden" : "block"}`}>
          <Image src={Banner} alt="banner" className="px-3" />
        </div> */}
    </div>
  );
};

export default Sidebar;