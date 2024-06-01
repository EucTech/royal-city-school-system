import { MdSpaceDashboard } from "react-icons/md"
import { PiStudentLight } from "react-icons/pi";
import { MdLibraryBooks } from "react-icons/md";
import { TfiAnnouncement } from "react-icons/tfi";
// import { FaBookOpenReader } from "react-icons/fa6";
// import { MdPayments } from "react-icons/md";
// import { RiCalendarScheduleLine } from "react-icons/ri";


import logout from "/src/assets/icons/logout.png";

interface LinkType {
  title: string;
  links: {
    name: string;
    icon: any;
    link: string;
  }[];

}

export const links: LinkType[] = [
  {
    title: "Main Pages",
    links: [
      {
        name: "Dashboard",
        icon: <MdSpaceDashboard />,
        link: "/dashboard",
      },
      {
        name: "Student Info",
        icon: <PiStudentLight />,
        link: "/dashboard/student-info",
      },
      {
        name: "Courses",
        icon: <MdLibraryBooks />,
        link: "/dashboard/courses",
      },
      {
        name: "Notice",
        icon: <TfiAnnouncement />,
        link: "/dashboard/notice",
      },
      // {
      //   name: "Result",
      //   icon: <FaBookOpenReader />,
      //   link: "/dashboard/result",
      // },
      // {
      //   name: "Payment Info",
      //   icon: <MdPayments />,
      //   link: "/dashboard/payment-info",
      // },
      // {
      //   name: "Schedule",
      //   icon: <RiCalendarScheduleLine />,
      //   link: "/dashboard/schedule",
      // },
    ],
  },
  {
    title: "Management",
    links: [
    
      {
        name: "Logout",
        icon: logout,
        link: "",
      },
    ],
  },
];

type infoType = {
  name: string;
  email: string;
  status: string;
};

export const Info: infoType[] = [
  {
    name: "Make Prince",
    email: "makeprince@gmail.com",
    status: "Admin",
  },
  {
    name: "Jone Priase",
    email: "jonepriase@gmail.com",
    status: "Client",
  },
  {
    name: "Great Prince",
    email: "greatprince@gmail.com",
    status: "Admin",
  },
  {
    name: "Make Benjamin",
    email: "makebenjamin@gmail.com",
    status: "Admin",
  },
  {
    name: "Make Prince",
    email: "makeprince@gmail.com",
    status: "Client",
  },
  {
    name: "Godswill Prince",
    email: "godswillprince@gmail.com",
    status: "Admin",
  },
  {
    name: "Make Prince",
    email: "makeprince@gmail.com",
    status: "Admin",
  },
  {
    name: "Make Prince",
    email: "makeprince@gmail.com",
    status: "Admin",
  }
]