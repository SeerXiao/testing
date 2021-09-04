import AuthPage from "./AuthPage";
import {fetchSignIn, resetRequestErrors} from "../../redux/auth-reducer";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        submitError: state.auth.errors,
        currentUser: state.auth.currentUser,
    }
};

export default connect(mapStateToProps, {fetchSignIn, resetRequestErrors})(AuthPage);