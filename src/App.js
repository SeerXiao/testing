import './App.css';
import CommunicationPageContainer from "./components/CommunicationPage/CommunicationPageContainer";
import AuthPageContainer from "./components/AuthPage/AuthPageContainer";
import {Route, Switch} from "react-router-dom";
import PrivateRoute from "./hoc/PrivateRoute";
import {useEffect} from "react";
import {connect} from "react-redux";
import {fetchSignOut} from "./redux/auth-reducer";
import {initializedSuccess} from "./redux/app-reducer";
import RegistrationContainer from "./components/Registration/RegistrationContainer";
import app from "./base";
import PasswordResetContainer from "./components/PasswordReset/PasswordResetContainer";
import ForgotPasswordContainer from "./components/ForgotPassword/ForgotPasswordContainer";

function App(props) {
    const signOut = () => {
        props.fetchSignOut();
    }

    useEffect(() => {
        props.initializedSuccess();

    },[])

    if (!props.initialized) {
        return <div>Preloader</div>
    }

  return (
    <div className="App">
            <Switch>
               <Route exact path={'/'}>
                   <PrivateRoute Component={CommunicationPageContainer}/>
                </Route>
                <Route path={'/auth'}>
                    <AuthPageContainer />
                </Route>
                <Route path={'/registration'}>
                    <RegistrationContainer />
                </Route>
                <Route path={'/communication'}>
                    <PrivateRoute Component={CommunicationPageContainer}/>
                </Route>
                <Route path={'/reset_password'}>
                    <ForgotPasswordContainer />
                    <PasswordResetContainer />
                </Route>
            </Switch>
        <button onClick={signOut}>out</button>

    </div>
  );
};


const mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized
    };
};

export default connect(mapStateToProps, {initializedSuccess, fetchSignOut})(App);
