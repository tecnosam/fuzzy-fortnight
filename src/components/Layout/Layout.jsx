import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import "./Layout.css";
import { images } from "../../assets/images";
import { useHistory } from "react-router-dom";
const Layout = ({
  heading,
  subheading,
  color,
  spantext,
  link,
  usertype,
  buttonText,
  linktext,
}) => {
  const { SmallaLogo } = images();
  const navigate = useHistory();

  return (
    <>
      <div>
        <div className="layout-top" onClick={() => navigate.push("/")}>
          <img src={SmallaLogo} alt="bucc-logo" />
        </div>
        <div className="layout-form">
          <form action="">
            <h1 style={{ color: color }}>{heading}</h1>
            <p style={{ color: color }}>{subheading}</p>
            <div className="form-group">
              <input
                type="text"
                placeholder={usertype}
                style={{ border: `3px solid ${color}` }}
              />
              <input
                type="text"
                placeholder="password"
                style={{ border: `3px solid ${color}` }}
              />
              <button type="submit" style={{ background: color }}>
                {buttonText}
              </button>
            </div>
          </form>
          <div className="reset">
            <span>{spantext}</span> &nbsp;
            <Link to={link} style={{ color: color }}>
              {" "}
              {linktext}{" "}
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
