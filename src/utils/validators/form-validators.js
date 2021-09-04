import * as Yup from "yup";

export const authFormValidate = (values) => {
    const errors = {};
    if(!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    if(!values.password) {
        errors.password = 'Required';
    }
    return errors;
}


export const SignInSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
    password: Yup.string()
        .min(2, 'Too Short!')
        .max(70, 'Too Long!')
        .required('Required'),
});

export const SignUpSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
    password: Yup.string()
        .min(2, 'Too Short!')
        .max(70, 'Too Long!')
        .required("Please enter your password")
        .matches(
            /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
            "Password must contain at least 8 characters, one uppercase, one number and one special case character"
        ),
    password_confirmation: Yup.string()
        .required("Please confirm your password")
        .oneOf([Yup.ref('password'), null], "Passwords don't match.")
});