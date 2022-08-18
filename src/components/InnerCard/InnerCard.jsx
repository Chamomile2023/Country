import React from "react";
import { useState, useEffect } from "react";
import "./InnerCard.scss";
import "../Card/Card";
import { useNavigate, useParams } from "react-router-dom";

const InnerCard = ({ dark }) => {
  const [data, setData] = useState([]);
  const { name } = useParams();
  const navigate = useNavigate();
  const URL = `https://restcountries.com/v2/name/${name}`;
  const getData = async () => {
    const request = await fetch(URL);
    const response = await request.json();
    setData(response);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <ul className={`inner ${dark ? "inner_w" : "inner_b"}`}>
      <div className="container">
        <div className="inner_card">
          {data.map((item) => {
            return (
              <li
                id={item.name}
                className={`card__main inner--main ${
                  dark ? "inner_w" : "inner_bs"
                }`}
              >
                <img src={item.flags.png} alt="" className="card--img" />
                <h3 className="card--name">{item.name}</h3>
                <p className="inner--item">
                  {`Population:`} {item.population}
                </p>
                <p className="inner--item">
                  {`Region: `} {item.region}
                </p>
                <p className="inner--item">
                  {`Capital:`} {item.capital}
                </p>
                <p className="inner--item">
                  {`Language:`} {item.name}
                </p>
                <button className="inner--btn" onClick={() => navigate(-1)}>
                  <a href="#" className="inner--link">
                    Back
                  </a>
                </button>
              </li>
            );
          })}
        </div>
      </div>
    </ul>
  );
};

export default InnerCard;
