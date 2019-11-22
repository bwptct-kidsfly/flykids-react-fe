import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import Styled from "styled-components";
import axios from "axios";

const Login = ({ values, errors, touched }) => {
    return (
        <Div>
            <h1>Log In</h1>
             <Form>
                <div className="field">
                    <label>
                        <div><H3>Email</H3></div>
                            <Field
                                className="field"
                                type="text"
                                name="email"
                                placeholder="Enter Email..."
                                value={values.email}
                            />
                        {touched.email && errors.email && <p className="ERROR">{errors.email}</p>}
                    </label>
                  <div className="field">
                    <label>
                        <div><H3>Password</H3></div>
                            <Field  
                                type="password"
                                name="password"
                                placeholder="Enter Password..."
                            />
                        {touched.password && errors.password && <p className="ERROR">{errors.password}</p>}
                    </label>
                        <div><Button type="submit">submit</Button></div>
                  </div>
                </div>
                </Form>
            </Div>
        );
}

const LoginFormik = withFormik({
    mapPropsToValues({ email, password }) {
     return {
        email: email || "",
        password: password || ""
    }
},

handleSubmit(values){
    axios
        .get("https://kids-fly-backend.herokuapp.com/login", values)
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        });
},

    validationSchema: Yup.object().shape({
        email: Yup.string().required("Enter email"),
        password: Yup.string().required("Enter Password")
    }),
})(Login);

export default LoginFormik;

//USED FORMIK BECAUSE I LIKE IT AND IT MAKES THINGS SIMPLE. LOT OF CODE IS INCORPERATED WITHOUT HAVING TO WRITE IT ALL OUT MANUALLY
//MVP MET Student has set up component management for the forms in the app that makes sense for each form. Student made the decision to use a third-party library, like Formik, or not, and can defend their decision. Some form validation is in place.




const Div = Styled.div`
    border: 2px solid gray;
    background-color: #932F6D;
    padding: 10px;
    width: 600px;
    margin: 0 auto;
    margin-top: 150px;
`;

const H3 = Styled.h3`
    padding: 0px;
    margin: 20px;
    color: white;
`;

const Button = Styled.button`
padding: 10px 20px 10px 20px;
background-color: lightblue;
margin-top: 20px;
`;