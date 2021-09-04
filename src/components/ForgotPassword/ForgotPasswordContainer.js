import {connect} from "react-redux";
import ForgotPassword from "./ForgotPassword";
import {resetRequestErrors} from "../../redux/auth-reducer";




const mapStateToProps = (state) => {
    return {
        submitError: state.auth.errors,
        currentUser: state.auth.currentUser,
        registrationSuccess: state.auth.registrationSuccess
    }
}

export default connect(mapStateToProps, {resetRequestErrors})(ForgotPassword);