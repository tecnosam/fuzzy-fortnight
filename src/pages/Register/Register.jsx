import React from "react";
import Layout from "../../components/Layout/Layout";

const Register = () => {
  return <div>
    <Layout
        heading={'Voter Registration'}
        subheading={'Please provide us with your email and password'}
        spantext={'Already registered'}
        link={'/login'}
        usertype={'Personal e-mail'}
        buttonText={'Sign in'}
        linktext={'Click here to login'}
        color={'#AE8D2F'}
    />
  </div>;
};

export default Register;