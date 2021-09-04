import {ErrorMessage, Field, Form, Formik} from "formik";
import style from "./AuthPage.module.css";
import {SignInSchema} from "../../utils/validators/form-validators";
import {NavLink, useHistory} from "react-router-dom";
import {useEffect} from "react";
import {Input} from "../common/FormControl/FormControl";
import {ToastContainer} from "react-toastify";
import {SubmitErrorMessage} from "../common/SubmitErrorMessage/SubmitErrorMessage";






const AuthPage = (props) => {
    const {submitError, currentUser} = props;
    const history = useHistory();

    const redirectForAuthUser = (currentUser) => {
        if(currentUser) {
            history.push('/communication');
        }
    }

    useEffect(() => {
        props.resetRequestErrors();
        if(currentUser) {
            history.push('/communication');
        }
    }, [])

    useEffect(() => {

        if(currentUser) {
            history.push('/communication');
        }
    }, [currentUser])


    return (
        <div className={style.form_container}>

            <h2>Авторизация</h2>

            {submitError.message ? <SubmitErrorMessage error = {submitError}/> : null}

            <Formik
                initialValues={{
                    email: '',
                    password: '',
                }}
                validationSchema = {SignInSchema}
                onSubmit = {values => {
                    props.fetchSignIn(values);
                }}

            >
                {({errors, touched}) => (
                    <Form className={style.auth_form}>
                        <div className= {style.input_container}>
                            <label htmlFor="email">Email</label>
                            <Field name={"email"} type = "email" component = {Input}/>
                            <ErrorMessage name={"email"} component={"div"}/>
                        </div>
                        <div className= {style.input_container}>
                            <label htmlFor="password">Password</label>
                            <Field name={"password"} type = "password" component = {Input} />
                            <ErrorMessage name={"password"} component={"div"}/>
                        </div>

                        <button type={"submit"}>Sign in</button>
                    </Form>
                )}
            </Formik>
            <ToastContainer></ToastContainer>

            <NavLink to={'/registration'}>Регистрация</NavLink>
            <NavLink to={'/reset_password'}>Забыли пароль?</NavLink>
        </div>


    )
}


export default AuthPage;