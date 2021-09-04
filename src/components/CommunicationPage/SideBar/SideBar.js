import style from "./SideBar.module.css";


const SideBar = (props) => {
    return (
        <div className={style.container}>
            <div className={style.search}>
                <input type="text"/>
            </div>
            <div className={style.tab_list}>
                <i className="fas fa-history"></i>
                <i className="fas fa-user-friends"></i>
                <i className="far fa-address-book"></i>
                <i className="fas fa-archive"></i>
            </div>
            <div className={style.list}>

            </div>

        </div>
    )
}


export default  SideBar;