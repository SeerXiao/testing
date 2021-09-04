import {Route, Redirect} from "react-router-dom";
import {connect} from "react-redux";




const PrivateRoute = ({Component, currentUser, ...rest}) => {

    if (!!currentUser) {
        return <Component {...rest} />
    } else {
        return <Redirect to={'/auth'}/>
    }

};

const mapStateToProps = (state) => {
    return {
        currentUser: state.auth.currentUser
    };
};

export default connect(mapStateToProps,{})(PrivateRoute);