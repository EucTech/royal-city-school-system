import React from "react";
import { useState } from "react";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

interface PaginationProps {
  pagination: any[];
  currentPage: number;
  itemsPerPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  setNumberPerPage: React.Dispatch<React.SetStateAction<number>>;
}

const Pagination: React.FC<PaginationProps> = ({
  pagination,
  currentPage,
  itemsPerPage,
  setCurrentPage,
  setNumberPerPage,
}) => {
  const [isOpened, setIsOpened] = useState(false);

  const totalPages = Math.ceil(pagination.length / itemsPerPage);

  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const toggleshowMore = () => {
    setIsOpened((isOpened) => !isOpened);
  };

  const ShowMoreStyle = classNames(
    "absolute flex flex-col items-center gap-2 justify-between cursor-pointer font-medium py-1 px-2 rounded-md bg-white text-[#0F0F0F] text-[12px] border-solid border border-[#CCCCCC]",
    {
      hidden: !isOpened,
    }
  );

  const showMore = classNames("bg-[#F8F3F2] pt-[3px] px-[13px] rounded-sm");

  function generatePageNumbers(
    currentPage: number,
    totalPages: number,
    range: number
  ) {
    const numbers = [];

    // Always add the first page
    numbers.push(1);

    // If the current page is more than 2 away from the first page, add "..."
    if (currentPage > range + 1) {
      numbers.push("...");
    }

    // Add the pages in the range around the current page
    for (
      let i = Math.max(2, currentPage - range);
      i <= Math.min(totalPages - 1, currentPage + range);
      i++
    ) {
      numbers.push(i);
    }

    // If the current page is more than 2 away from the last page, add "..."
    if (currentPage < totalPages - range) {
      numbers.push("...");
    }

    // Always add the last page
    if (totalPages > 1) {
      numbers.push(totalPages);
    }

    return numbers;
  }

  const pageNumbers = generatePageNumbers(currentPage, totalPages, 1);
  
  return (
    <div className="w-[100%] flex flex-wrap items-center justify-between gap-6 py-7 sm:py-[6px] px-4 rounded-md bg-[#F8F8F8] border-solid border border-[#F2F2F2] ">
      <div className="flex items-center sm:mx-0 mx-auto  sm:gap-8 gap-[6px]">
        <button
          className="flex items-center justify-center  py-[6px] px-[10px] rounded-md border-solid border border-[#CCCCCC]"
          onClick={prevPage}
          disabled={currentPage === 1}
        >
          <FontAwesomeIcon
            className={`text-[10px] ${
              currentPage === 1 ? "text-[#B3B3B3]" : "text-[#0F0F0F]"
            }`}
            icon={faAngleLeft}
          />
        </button>

        <div className="flex items-center sm:gap-2 gap-1">
          {pageNumbers.map((number, index) => (
            <button
              key={index}
              onClick={() =>
                typeof number === "number" && setCurrentPage(number)
              }
              className={`flex items-center justify-center text-[12px] py-[3px] px-[11px] rounded-md ${
                number === currentPage
                  ? "text-[#FFFFFF] bg-[#430A5D]"
                  : "text-[#0F0F0F]"
              }`}
            >
              {number}
            </button>
          ))}
        </div>

        <button
          className="flex items-center justify-center py-[6px] px-[10px] rounded-md border-solid border border-[#CCCCCC]"
          onClick={nextPage}
          disabled={currentPage === totalPages}
        >
          <FontAwesomeIcon
            className={`text-[10px] ${
              currentPage === totalPages ? "text-[#B3B3B3]" : "text-[#0F0F0F]"
            }`}
            icon={faAngleRight}
          />
        </button>
      </div>

      <div className="flex flex-wrap sm:mx-0 mx-auto gap-4 items-center justify-center">
        <span className="font-normal text-[12px] text-[#666666]">
          Showing {currentPage} to {totalPages} of {pagination.length} entries
        </span>
      </div>

      <div className="relative sm:mx-0 mx-auto">
        <button
        
          onClick={toggleshowMore}
          className="flex items-center w-full gap-4 justify-between font-medium py-1 px-2 rounded-md bg-white text-[#888888] text-[12px] outline-none border-solid border border-[#CCCCCC]"
        >
          <p>Show {itemsPerPage}</p>{" "}
          <FontAwesomeIcon
            className={
              isOpened
                ? " rotate-180 transition-all duration-500"
                : "transition-all duration-500"
            }
            icon={faAngleDown}
          />
        </button>
        <div className={` bottom-7 ${ShowMoreStyle}`}>
          <span className="flex items-center gap-4">
            <p
              onClick={() => {
                setNumberPerPage(10);
                toggleshowMore();
              }}
              className={itemsPerPage === 10 ? showMore : ""}
            >
              Show 10
            </p>
          </span>
          <span className="flex items-center gap-4">
            <p
              onClick={() => {
                setNumberPerPage(20);
                toggleshowMore();
              }}
              className={itemsPerPage === 20 ? showMore : ""}
            >
              Show 20
            </p>
          </span>
          <span className="flex items-center gap-4">
            <p
              onClick={() => {
                setNumberPerPage(30);
                toggleshowMore();
              }}
              className={itemsPerPage === 30 ? showMore : ""}
            >
              Show 30
            </p>
          </span>
          <span className="flex items-center gap-4">
            <p
              onClick={() => {
                setNumberPerPage(40);
                toggleshowMore();
              }}
              className={itemsPerPage === 40 ? showMore : ""}
            >
              Show 40
            </p>
          </span>
        </div>
      </div>
    </div>
  );
};

export { Pagination };
