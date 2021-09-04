import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

const ClosedForAuthUser = ({Component, currentUser, ...rest}) => {

    if (currentUser) {
        return <Component {...rest} />
    } else {
        return <Redirect to={'/communication'}/>
    }

};

const mapStateToProps = (state) => {
    return {
        currentUser: state.auth.currentUser
    };
};

export default connect(mapStateToProps,{})(ClosedForAuthUser);