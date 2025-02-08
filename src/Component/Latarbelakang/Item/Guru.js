import style from "./Guru.module.css";
function Guru(props) {
    return (
        <div className={`${style.container_teacher}`}>
            <div className={style.card}>
                <div className={style.picture}></div>

                <div className={style.desc_teacher}>
                    <div className={style.name_teacher}>
                       <h1>Dr. Indra Martian</h1>
                       <h1>Mudir Ponpes</h1>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Guru;