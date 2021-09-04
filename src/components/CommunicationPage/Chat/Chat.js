import style from "./Chat.module.css";


const Chat = ({fetchSignOut}) => {
    return (
        <div className={style.container}>
            <button onClick={fetchSignOut}>out</button>
            Chat
        </div>
    )
}


export default  Chat;