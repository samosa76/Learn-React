import style from './ItemPendidikan.module.css'
function ItemPendidikan(props) {
    const title = props.title;
    const desc = props.desc
    return (
        <div className={style.isian}>
            <div className={style.R}>
                <h2>{title}</h2>
                <p>{desc}</p>
            </div>
        </div>
    )
}

export default ItemPendidikan;