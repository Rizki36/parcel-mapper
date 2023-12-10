import React from "react";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi2";

const Pagination = (props: {
  currentPage: number;
  totalPages: number;
  onPrevPage: () => void;
  onNextPage: () => void;
}) => {
  const { currentPage, totalPages, onPrevPage, onNextPage } = props;
  return (
    <div className="flex items-center mt-4 w-full justify-between border-t border-t-neutral-100 pt-4">
      <div className="flex items-center gap-1 text-neutral-400">
        <div>Page</div>
        {currentPage} of {totalPages}
      </div>
      <div className="flex gap-x-3 items-center">
        <button
          className="border text-neutral-200 border-neutral-200 disabled:cursor-not-allowed disabled:text-neutral-300 disabled:bg-neutral-100 hover:bg-primary hover:text-neutral-500 cursor-pointer flex items-center justify-center h-8 w-8 rounded-full"
          onClick={() => onPrevPage()}
          disabled={currentPage === 1}
        >
          <HiArrowLeft />
        </button>
        <button
          className="border text-neutral-200 border-neutral-200 disabled:cursor-not-allowed disabled:text-neutral-300 disabled:bg-neutral-100 hover:bg-primary hover:text-neutral-500 cursor-pointer flex items-center justify-center h-8 w-8 rounded-full"
          onClick={() => onNextPage()}
          disabled={currentPage === totalPages}
        >
          <HiArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
