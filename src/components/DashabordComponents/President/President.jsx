import React from "react";
import Layout from "../Layout/Layout";
import Data from "../../../data/Data";
import "./President.css";
import { images } from "../../../assets/images";
const President = () => {
  const { people } = Data();
  const { bell, small } = images();

  return (
    <div>
      <Layout>
        <div className="president" style={{ width: "100%" }}>
          <div className="pre-nav">
            <img src={bell} alt="" />
            <p>|</p>
            <p>Jolomi Olajide</p>
            <img src={small} alt="" />
          </div>
          <div className="pre-body">
            <div className="pre-heading">
              Tap the picture to select the candidate
            </div>
            <div className="pre-list">
              {people.map((val, idx) => (
                <div className="pre-box" key={idx}>
                  <img src={val.picture} alt="" />
                  <p>{val.name}</p>
                  <span>{val.title}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="pre-nav">
            <p>Next | Previous</p>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default President;
