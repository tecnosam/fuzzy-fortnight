import React from "react";
import { Link } from 'react-router-dom';

import Layout from "../../components/Layout/Layout";

const Login = () => {
  return <div>
   <Layout
        heading={'Voter Login'}
        subheading={'Please enter your matric number and password:'}
        spantext={'Reset Password'}
        link={'/register'}
        usertype={'Matric no'}
        buttonText={'Sign in'}
        linktext={'Click here to register'}
        color={'#20448f'}
        redirect={'/dashboard'}
    />
  </div>;
};

export default Login;
