import Chat from "./Chat/Chat";
import SideBar from "./SideBar/SideBar";
import UserInfo from "./UserInfo/UserInfo";
import style from "./CommunicationPage.module.css";
import {ToastContainer} from "react-toastify";


const CommunicationPage = (props) => {




    return (
        <div className={style.container}>
            <SideBar />
            <Chat fetchSignOut = {props.fetchSignOut}/>
            <UserInfo />
            <ToastContainer></ToastContainer>
        </div>

    )
}


export default  CommunicationPage;