import React from "react";
import { Card, CardBody, Button, Alert, Col } from 'reactstrap';
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import { Redirect } from "react-router-dom";


const ChangePassForm = ({ errors, touched, handleSubmit, handleChange, status }) => {

    return (
        <div className="login-form my-3">
            <Col xs="12" md="8" lg="4" className="mx-auto">
                <Card className="shadow-sm">
                    <CardBody>
                        <h1 className="text-center">Change Password</h1>
                        <Form className="d-flex flex-column justify-content-around" onSubmit={handleSubmit}>
                          
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
                            <Button type="submit" className="col-xs-12 col-sm-12 col-md-8 col-lg-4 mx-md-auto ml-lg-auto mr-lg-0 mt-2" onClick={()=><Redirect to="/profile" />}>Change</Button>
                        </Form>
                    </CardBody>
                </Card>
                {!!status && <Alert color="danger" className="my-3">{`${status}`}</Alert>}
            </Col>
        </div>
    )
}

const FormikChangePassForm = withFormik({

    mapPropsToValues({ password }) {
        return {
            password: password || ""
        };
    },
    validationSchema: Yup.object().shape({
        password: Yup.string().required(`Please enter your password.`),
        matchPass: Yup.string().oneOf([Yup.ref('password'), null], "Passwords do not match.").required(`Password verification is required.`)
    }),
    handleSubmit(values, { props, setStatus }) {
        const { history } = props;
        console.log(props);

        axiosWithAuth()
            .put(`/user/changePass/${props.match.params.id}`, values)
            .then(response => {
                console.log(response);
                history.push(`/changePass/${props.match.params.id}`)
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
})(ChangePassForm)

export default FormikChangePassForm;
