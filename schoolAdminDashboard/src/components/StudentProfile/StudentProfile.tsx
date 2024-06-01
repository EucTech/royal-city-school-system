import React from 'react'
import classNames from "classnames";
import { Table } from "flowbite-react";
import { useEffect, useState } from "react";
import { PiStudentFill } from "react-icons/pi";
// import { AllStudent } from "../../ultils/students";
import { Pagination } from "../Pagination";
import { AppDispatch } from "../../store/store";
import { RootState } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllStudents, fetchTotalStudents } from "../../store/actions/analyticesActions";


const StudentProfile = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {totalStudents, allStudents, isLoading} = useSelector((state: RootState) => state.analytices);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);

  // state for filter
  const [filterByClass, setFilterByClass] = useState<any[]>([]);
  const [classboader, setClassboader] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [numberofStudentsInClass, setNumberofStudentInClass]: any = useState({});

  console.log("allStudents", allStudents);
 
    useEffect(() => {
      dispatch(fetchTotalStudents());
      dispatch(fetchAllStudents());
    },[dispatch])

  // const totalStudents = AllStudent.length;
 
  const Classes = ["All", "JSS 1", "JSS 2", "JSS 3", "SSS 1", "SSS 2", "SSS 3"];

  
  useEffect(() => {
    let filteredStudents = Array.isArray(allStudents) ? [...allStudents] : [];
  
    if (classboader !== 0) {
      filteredStudents = filteredStudents.filter(
        (student: any) => student.student_class === Classes[classboader]
      );
    }
  
    if (searchQuery) {
      filteredStudents = filteredStudents.filter(
        (student: any) =>
          student.firstname.toLowerCase().includes(searchQuery.toLowerCase()) ||
          student.lastname.toLowerCase().includes(searchQuery.toLowerCase()) ||
          student.email.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
  
    setFilterByClass(filteredStudents);
    setCurrentPage(1);
  }, [classboader, searchQuery, allStudents]);

  useEffect(() => {
    const classCounts = Classes.reduce((counts: any, currentClass: any) => {
      counts[currentClass] = allStudents.filter((student: any) => student.student_class === currentClass).length;
      return counts;
    }, {});

    classCounts["All"] = allStudents.length;
    setNumberofStudentInClass(classCounts);
  
  }, [allStudents]);

   // const totalPages = Math.ceil(User.length / itemsPerPage);
   const indexOfLastItem = currentPage * itemsPerPage;
   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
   const currentItems = filterByClass.slice(indexOfFirstItem, indexOfLastItem);
 

  const handleClick = (index: number) => {
    // console.log("clicked");
    setClassboader(index);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const overviewsClass = classNames(
    "flex flex-col items-center justify-center gap-3 w-[18em] h-[10em] sm:h-[12em] p-3 border-[3px] border-[#430A5D] bg-white border-solid rounded-[30px]"
  );

  // if(isLoading){
  //   return <div>Loading...</div>
  // }

  return (
    <div
      className="flex flex-col gap-10 px-6 mt-10 pb-5"
    >
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearch}
        placeholder="Search for student"
        className="w-[80%] sm:w-[40%] h-[40px] text-[12px] border-2 border-solid border-[#bebdbd] focus:outline-none focus:ring-2 focus:ring-[#430A5D] focus:border-transparent py-2 pl-3 rounded-lg"
      />
      <div className="flex flex-wrap  items-center gap-4 justify-between">
        <div className={` ${overviewsClass}`}>
          <PiStudentFill className="text-[50px] sm:text-[80px] text-[#430A5D]" />
          <h1 className="text-[17px] sm:text-[20px] text-[#322C2B] font-semibold">
            Total Students
          </h1>
          <p className="text-[15px] text-[#000] font-medium">{isLoading ? "Loading..." : totalStudents.data}</p>
        </div>
        <div className="flex justify-items-center flex-wrap gap-4 mr-14" >
          {Classes.map((item: any, index: any) => (
            <div key={index} onClick={() => handleClick(index)} className={`cursor-pointer flex flex-col gap-1 items-center py-1 px-3 rounded-lg border-2 border-solid  ${classboader === index? "border-[#430A5D]": ""}`}>
              <h1 className=" text-[15px] sm:text-[18px] text-[#430A5D] font-semibold">
                {item}
              </h1>
              <p className="text-[14px] text-[#000] font-medium">{numberofStudentsInClass[item]}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="overflow-x-auto hide-scrollbar pt-3 lg:px-4 mr-2 rounded-lg" style={{ border: "1px #F2F2F2 solid" }}>
        <Table striped className="my-4 text-left bg-transparent">
          <Table.Head className="bg-[#F8F8F8]">
          <Table.HeadCell className="text-[#1A1313]">
              STUDENT ID
            </Table.HeadCell>
            <Table.HeadCell className="text-[#1A1313]">
              FIRST NAME
            </Table.HeadCell>
            <Table.HeadCell className="text-[#1A1313]">
              LAST NAME
            </Table.HeadCell>
            <Table.HeadCell className="text-[#1A1313]">
              EMAIL
            </Table.HeadCell>
            <Table.HeadCell className="text-[#1A1313]">CLASS</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y ">
            {isLoading ? (
              <Table.Row>
                <Table.Cell colSpan={5} className="text-center py-3">
                  Loading...
                </Table.Cell>
              </Table.Row>
            )  : currentItems?.map((info: any, index: number) => (
              <Table.Row
                key={index}
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
              >
                <Table.Cell className=" py-3 whitespace-nowrap font-medium text-[#5e5b5b] dark:text-white">
                  {info?._id}
                </Table.Cell>
                <Table.Cell className=" py-3 whitespace-nowrap font-medium text-[#5e5b5b] dark:text-white">
                  {info?.firstname}
                </Table.Cell>
                <Table.Cell className="py-3 whitespace-nowrap font-medium text-[#5e5b5b] dark:text-white">
                  {info?.lastname}
                </Table.Cell>
                <Table.Cell className="py-3 whitespace-nowrap font-medium text-[#5e5b5b] dark:text-white">
                  {info?.email}
                </Table.Cell>
                <Table.Cell className="py-3 whitespace-nowrap font-medium text-[#5e5b5b] dark:text-white">
                  {info?.student_class}
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
      <Pagination
        pagination={filterByClass}
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        setCurrentPage={setCurrentPage}
        setNumberPerPage={(value:any) => {
          setItemsPerPage(value);
          setCurrentPage(1);
        }}
      />
    </div>
  );
};

export default StudentProfile;
