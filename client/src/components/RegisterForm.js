import React from "react";
import { Card, CardBody, Button, Alert, Col } from 'reactstrap';
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const RegisterForm = ({ errors, touched, handleSubmit, handleChange, status }) => {

    return (
        <div className="login-form my-3">
            <Col xs="12" md="8" lg="4" className="mx-auto">
                <Card className="shadow-sm">
                    <CardBody>
                        <h1 className="text-center">Register</h1>
                        <Form className="d-flex flex-column justify-content-around" onSubmit={handleSubmit}>
                            <label className="text-left mt-2">Username:</label>
                            <Field type="text" name="username" placeholder="Username" onChange={handleChange} />
                            {touched.username && errors.username && (
                                <Alert color="danger">{errors.username}</Alert>
                            )}
                            <label className="text-left mt-2">Password:</label>
                            <Field type="password" name="password" placeholder="Password" onChange={handleChange} />
                            {touched.password && errors.password && (
                                <Alert color="danger">{errors.password}</Alert>
                            )}
                            <label className="text-left mt-2">Re-Enter Password:</label>
                            <Field type="password" name="matchPass" placeholder="Password" onChange={handleChange} />
                            {touched.matchPass && errors.matchPass && (
                                <Alert color="danger">{errors.matchPass}</Alert>
                            )}
                            <Button type="submit" className="col-xs-12 col-sm-12 col-md-8 col-lg-4 mx-md-auto ml-lg-auto mr-lg-0 mt-2">Register</Button>
                        </Form>
                    </CardBody>
                </Card>
                {!!status && <Alert color="danger" className="my-3">{`${status}`}</Alert>}
            </Col>
        </div>
    )
}

const FormikRegisterForm = withFormik({

    mapPropsToValues({ username, password }) {
        return {
            username: username || "",
            password: password || ""
        };
    },
    validationSchema: Yup.object().shape({
        username: Yup.string().required(`Please enter a username.`),
        password: Yup.string().required(`Please enter your password.`),
        matchPass: Yup.string().oneOf([Yup.ref('password'), null], "Passwords do not match.").required(`Password verification is required.`)
    }),
    handleSubmit(values, { props, setStatus }) {
        const { history } = props;
        console.log('submitted register');

        axiosWithAuth()
            .post("/user/register", values)
            .then(response => {
                console.log(response);
                history.push("/login")

            })
            .catch(error => {
                console.log(`Server responded with ${error.response.data.msg}`);
                setStatus(error);
            });
    },
    handleChange(values, setValues) {
        setValues({
            ...values,
            [values.target.name]: values.target.value
        })
    }
})(RegisterForm)

export default FormikRegisterForm