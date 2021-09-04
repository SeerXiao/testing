import style from "./ForgotPassword.module.css";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {SignUpSchema} from "../../utils/validators/form-validators";
import {Input} from "../common/FormControl/FormControl";
import {NavLink, useHistory} from "react-router-dom";
import {useEffect} from "react";
import {SubmitErrorMessage} from "../common/SubmitErrorMessage/SubmitErrorMessage";




const ForgotPassword = (props) => {

    const {submitError} = props;
    const history = useHistory();


    useEffect(() => {
        props.resetRequestErrors();
    }, [])


    return (
        <div className={style.form_container}>

            <h2>Забыли пароль</h2>

            {submitError.message ? <SubmitErrorMessage error = {submitError}/> : null}

            <Formik
                initialValues={{
                    email: '',
                }}
                validationSchema = {SignUpSchema}
                onSubmit = {values => {
                    // props.fetchSignUp(values);
                }}

            >
                {({errors, touched}) => (
                    <Form className={style.registration_form}>
                        <div className= {style.input_container}>
                            <label htmlFor="email">Email</label>
                            <Field name={"email"} type = "email" component = {Input} />
                            <ErrorMessage name={"email"} component={"div"}/>
                        </div>


                        <button type={"submit"}>Получить ссылку на восстановление пароля</button>
                    </Form>
                )}
            </Formik>

            <NavLink to={'/auth'}>Войти</NavLink>
            <NavLink to={'/registration'}>Регистрация</NavLink>
        </div>
    )
}

export default ForgotPassword;