
import style from "./SubmitErrorMessage.module.css";

export const SubmitErrorMessage = ({error}) => {
    return (
        <div className={style.error_message}>
            {error.message}
        </div>
    )
}
