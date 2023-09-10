import React from "react";
import { usePagination } from "../../../hooks/usePagination";

const Pagination = ({ totalPages, page, changePage }) => {
  let pagesArray = usePagination(totalPages);

  return (
    <div className="page_wrapper">
      {pagesArray.map((p) => (
        <span
          onClick={() => changePage(p)}
          className={page === p ? "page page_current" : "page"}
          key={p}
        >
          {p}
        </span>
      ))}
    </div>
  );
};

export default Pagination;
