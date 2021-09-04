import CommunicationPage from "./CommunicationPage";
import {connect} from "react-redux";
import {fetchSignOut} from "../../redux/auth-reducer";



const CommunicationPageContainer = CommunicationPage;

const mapStateToProps = (state) => {
    return {

    }
}

export default connect(mapStateToProps, {fetchSignOut})(CommunicationPageContainer);