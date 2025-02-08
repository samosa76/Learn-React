import style from "./Item.module.css";
function Item(props) {
    const title = props.title;
    const desc = props.desc;
    return (
        <div className={style.conteiner_visi}>
            <div className={style.img_visi}>
                <img src="image/icon/visi.png"/>,

            </div>
            <div className={style.teks_visi}>
                <div className={style.title_visi}>
                    <h2>{title}</h2>
                </div>
                <div className={style.desc_visi}>
                  <p>{desc}</p>
                </div>
            </div>
        </div>
    )
}
export default Item;