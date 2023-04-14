import React from "react";
import Layout from "../../components/Layout/Layout";

const Register = () => {
  return (
    <div>
      <Layout
        heading={"Voter Registration"}
        subheading={"Please provide us with your email and password"}
        spantext={"Already registered"}
        link={"/login"}
        usertype={"Personal e-mail"}
        buttonText={"Sign up"}
        linktext={"Click here to login"}
        color={"#AE8D2F"}
        redirect={"/login"}
      />
    </div>
  );
};

export default Register;
