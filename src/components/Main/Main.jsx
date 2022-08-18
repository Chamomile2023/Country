import React from "react";
import axios from 'axios'
import "./Main.scss";

const Main = ({ data, setData }) => {
    return (
        <div className="main">
            <div className="container">
                <div className="main__hero">
                    <div className="main__cards">
                        <div className="main__card">
                            <img src={response.data.flags.svg} alt="" className="main--flag" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
