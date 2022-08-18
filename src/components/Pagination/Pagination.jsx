import React from "react";
import { useRef } from "react";
import "./Pagination.scss";

const Pagination = ({
  dark,
  total,
  data,
  current,
  setCurrent,
  paginationPage,
}) => {
  let dot = [];
  let count = 0;
  for (let i = 1; i < Math.ceil(data.length / total); i++) {
    dot.push(i);
    count++;
  }
  console.log(dot);
  console.log(count);
  return (
    <>
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li
            onClick={() => setCurrent(current - 1)}
            className={`page-item} ${dark ? "pagination_w" : "pagination_b"} `}
          >
            <button className="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">Prev</span>
            </button>
          </li>
          {dot.map((item, index) => {
            return (
              <li
                className={`page-item ${
                  dark ? "pagination_w" : "pagination_b"
                }`}
                ket={index}
                onClick={() => paginationPage(item)}
              >
                <a className="page-link" href="#">
                  {item}
                </a>
              </li>
            );
          })}
          <li
            onClick={() => setCurrent(current + 1)}
            className={`page-item ${current >= 16 ? "disabled" : ""} ${
              dark ? "pagination_w" : "pagination_b"
            }`}
          >
            <a className="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">Next</span>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Pagination;
