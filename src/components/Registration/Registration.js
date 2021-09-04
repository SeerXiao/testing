import style from "./Registration.module.css";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {SignUpSchema} from "../../utils/validators/form-validators";
import {Input} from "../common/FormControl/FormControl";
import {NavLink, useHistory} from "react-router-dom";
import {useEffect, useState} from "react";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {SubmitErrorMessage} from "../common/SubmitErrorMessage/SubmitErrorMessage";


const Registration = (props) => {

    const {submitError, currentUser, registrationSuccess, waitingForResponse} = props;
    const history = useHistory();

    const [waiting, setWaiting] = useState(false);

    useEffect(() => {
        props.resetRequestErrors();
    }, [])

    useEffect(() => {
        if(currentUser) {
            setTimeout(() => {
                props.resetRequestErrors();
                props.resetRegistrationSuccess();
                history.push('/communication')
            }, 3000)

        }
    }, [currentUser])

    useEffect(() => {
        if(registrationSuccess) {
            toast.success('Your account was created', {
                autoClose: 3000
            });
        } else {
            setWaiting(false);
        }
    }, [registrationSuccess, submitError])



    return (
        <div className={style.form_container}>

            <h2>Регистрация</h2>

            {submitError.message ? <SubmitErrorMessage error = {submitError}/> : null}

            <Formik
                initialValues={{
                    email: '',
                    password: '',
                    password_confirmation: ''
                }}
                validationSchema = {SignUpSchema}
                onSubmit = {values => {
                    setWaiting(true);
                    props.fetchSignUp(values);
                }}
            >
                {({errors, touched}) => (
                    <Form className={style.registration_form}>
                        <div className= {style.input_container}>
                            <label htmlFor="email">Email</label>
                            <Field name={"email"} type = "email" component = {Input} readOnly={waiting}/>
                            <ErrorMessage name={"email"} component={"div"}/>
                        </div>
                        <div className= {style.input_container}>
                            <label htmlFor="password">Password</label>
                            <Field name={"password"} type = "password" component = {Input} readOnly={waiting}/>
                            <ErrorMessage name={"password"} component={"div"}/>
                        </div>
                        <div className= {style.input_container}>
                            <label htmlFor="password_confirmation">Password confirmation</label>
                            <Field name={"password_confirmation"} type = "password" component = {Input} readOnly={waiting}/>
                            <ErrorMessage name={"password_confirmation"} component={"div"}/>
                        </div>

                        <button type={"submit"} disabled={waiting}>Sign in</button>
                    </Form>
                )}
            </Formik>
            <ToastContainer></ToastContainer>

            <NavLink to={'/auth'}>Войти</NavLink>
            <NavLink to={'/reset_password'}>Забыли пароль?</NavLink>
        </div>
    )
}

export default Registration;