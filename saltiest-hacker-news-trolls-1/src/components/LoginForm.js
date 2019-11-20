import React, { /*useState , useEffect*/ } from "react";
import { Card, CardBody, Button, Alert, Col } from 'reactstrap';
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useHistory } from "react-router-dom";

const LoginForm = ({ errors, touched, handleSubmit, handleChange, values }) => {

    // const [credentials, setCredentials] = useState({
    //     username: "",
    //     password: ""
    // })

    // const history = useHistory();


    // const handleChange = e => {
    //     setCredentials({
    //         ...credentials,
    //         [e.target.name]: e.target.value
    //     })
    // }

    // const handleLogin = e => {
    //     e.preventDefault();
    //     axiosWithAuth()
    //         .post("", credentials)
    //         .then(res => {
    //             console.log("login", res)
    //             // localStorage.setItem("token", res.data)
    //             // history.push("/protected")
    //         })
    //         .catch(err => console.log(err.response))
    // }

    return (
        <div className="login-form my-3">
            <Col xs="12" md="8" lg="4" className="mx-auto">
                <Card className="shadow-sm">
                    <CardBody>
                        <h1 className="text-center">Login</h1>
                        <Form className="d-flex flex-column justify-content-around" onSubmit={handleSubmit}>
                            <label className="text-left mt-2">Username:</label>
                            <Field type="text" name="username" placeholder="Username" onChange={handleChange} value={values.username} />
                            {touched.username && errors.username && (
                                <Alert color="danger">{errors.username}</Alert>
                            )}
                            <label className="text-left mt-2">Password:</label>
                            <Field type="password" name="password" placeholder="Password" onChange={handleChange} value={values.password} />
                            {touched.password && errors.password && (
                                <Alert color="danger">{errors.password}</Alert>
                            )}
                            <Button type="submit" className="col-xs-12 col-sm-12 col-md-8 col-lg-4 mx-md-auto ml-lg-auto mr-lg-0 mt-2">Log In</Button>
                        </Form>
                    </CardBody>
                </Card>
            </Col>
        </div>
    )
}

const FormikLoginForm = withFormik({
    mapPropsToValues({ username, password }) {
        return {
            username: username || "",
            password: password || ""
        };
    },
    validationSchema: Yup.object().shape({
        username: Yup.string().required(`Please enter a username.`),
        password: Yup.string().required(`Please enter your password.`)
    }),
    handleSubmit(values) {
        console.log(values)
        axiosWithAuth()
            .post("", values)
            .then(response => {
                console.log(response);
                // localStorage.setItem("token", response.data)
                //history.push("/protected")
            })
            .catch(error => {
                console.log(`Server responded with ${error.response}`);
            });
    },
    handleChange(values, setValues) {
        console.log(values)
        setValues({
            ...values,
            [values.target.name]: values.target.value
        })
    }
})(LoginForm)

export default FormikLoginForm