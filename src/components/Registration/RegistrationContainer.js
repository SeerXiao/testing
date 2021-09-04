import {connect} from "react-redux";
import Registration from "./Registration";
import {fetchSignUp, resetRequestErrors, resetRegistrationSuccess} from "../../redux/auth-reducer";




const mapStateToProps = (state) => {
    return {
        submitError: state.auth.errors,
        currentUser: state.auth.currentUser,
        registrationSuccess: state.auth.registrationSuccess,
        waitingForResponse: state.auth.waitingForResponse
    }
}

export default connect(mapStateToProps, {fetchSignUp, resetRequestErrors, resetRegistrationSuccess})(Registration);