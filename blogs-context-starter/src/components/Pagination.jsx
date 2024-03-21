import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Pagination = () => {
  const { page, handlePageChange, totalPages } = useContext(AppContext);

  return (
    <div className="w-full border text-center shadow-md py-2 fixed bottom-0 bg-white flex justify-center">
      <div className="flex w-11/12 max-w-[630px] justify-between">
        {page > 1 && (
          <button
            onClick={() => handlePageChange(page - 1)}
            className="rounded-md border px-4 py-1">
            Previous
          </button>
        )}
        {page !== totalPages && (
          <button
            onClick={() => handlePageChange(page + 1)}
            className="rounded-md border px-4 py-1">
            Next
          </button>
        )}

        <p className="ml-auto">
          {page} of Page {totalPages}
        </p>
      </div>
    </div>
  );
};

export default Pagination;
