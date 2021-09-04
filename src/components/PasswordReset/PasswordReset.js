import style from "./PasswordReset.module.css";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {SignUpSchema} from "../../utils/validators/form-validators";
import {Input} from "../common/FormControl/FormControl";
import {NavLink, useHistory} from "react-router-dom";
import {useEffect} from "react";
import {SubmitErrorMessage} from "../common/SubmitErrorMessage/SubmitErrorMessage";




const PasswordReset = (props) => {

    const {submitError} = props;
    const history = useHistory();


    useEffect(() => {
        props.resetRequestErrors();
    }, [])

    // useEffect(() => {
    //     if(registrationSuccess) {
    //         props.resetAuthErrors();
    //         props.resetRegistrationSuccess();
    //         history.push('/auth')
    //     }
    // }, [registrationSuccess])


    return (
        <div className={style.form_container}>

            <h2>Восстановление пароля</h2>

            {submitError.message ? <SubmitErrorMessage error = {submitError}/> : null}

            <Formik
                initialValues={{
                    password: '',
                    password_confirmation: ''
                }}
                validationSchema = {SignUpSchema}
                onSubmit = {values => {
                    props.fetchSignUp(values);
                }}

            >
                {({errors, touched}) => (
                    <Form className={style.registration_form}>
                        <div className= {style.input_container}>
                            <label htmlFor="password">Password</label>
                            <Field name={"password"} type = "password" component = {Input} />
                            <ErrorMessage name={"password"} component={"div"}/>
                        </div>
                        <div className= {style.input_container}>
                            <label htmlFor="password_confirmation">Password confirmation</label>
                            <Field name={"password_confirmation"} type = "password" component = {Input} />
                            <ErrorMessage name={"password_confirmation"} component={"div"}/>
                        </div>

                        <button type={"submit"}>Восстановить пароль</button>
                    </Form>
                )}
            </Formik>

            <NavLink to={'/auth'}>Войти</NavLink>
            <NavLink to={'/registration'}>Регистрация</NavLink>
        </div>
    )
}

export default PasswordReset;