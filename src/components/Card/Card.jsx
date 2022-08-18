import React from "react";
import { useState, useEffect } from "react";
import "./Card.scss";
import Pagination from "../Pagination/Pagination";
import { Link } from "react-router-dom";
import InnerCard from "../InnerCard/InnerCard";

const Card = ({
  dark,
  total,
  current,
  paginationPage,
  setCurrent,
  dataSlice,
}) => {
  const [data, setData] = useState([]);
  const URL = `https://restcountries.com/v2/all`;

  const getData = async () => {
    const request = await fetch(URL);
    const response = await request.json();
    setData(response);
  };

  useEffect(() => {
    getData();
  }, []);
  //Pagination
  let dot = [];
  for (let i = 0; i <= Math.ceil(data.length / 6); i++) {
    dot.push(i);
  }
  return (
    <div className={`card ${dark ? "card_white" : "card_black"}`}>
      <div className="container">
        <ul className="card__hero">
          {dataSlice.map((item) => {
            return (
              <li
                id={item.name}
                key={item.name.official}
                className={`card__main ${dark ? "card_whites" : "card_blacks"}`}
              >
                <img src={item.flags.png} alt="" className="card--img" />
                <h3 className="card--name">
                  <Link
                    className={`Link ${dark ? "card_w" : "card_b"}`}
                    to={`/${item.name}`}
                  >
                    {item.name}
                  </Link>
                </h3>
              </li>
            );
          })}
        </ul>
        <Pagination
          dark={dark}
          data={data}
          total={total}
          current={current}
          setCurrent={setCurrent}
          paginationPage={paginationPage}
        />
      </div>
    </div>
  );
};

export default Card;
