import style from './ItemPendidikan.module.css'
function ItemPendidikan(props) {
    const title = props.title;
    const desc = props.desc
    return (

        <div className={style.ItemPendidikan}>
            <div className={style.isian}>
                <div className={style.R}>
                    <h2>{title}</h2>
                    <p>{desc}</p>
                </div>
            </div>
            <div className={style.isian2}>

            </div>
        </div>
    )
}

export default ItemPendidikan;