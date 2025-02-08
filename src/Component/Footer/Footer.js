import style from './Footer.module.css'

function Footer() {
    return (
        <div className={style.footer}>
            <div className={style.text}>
                <p>Pondok Pesantren Modern IT Multimedia Al Fatih</p>
                <div className={style.img}>
                    <div className={style.images}></div>
                    <div className={style.images}></div>
                    <div className={style.images}></div>
                    <div className={style.images}></div>
                </div>
            </div>
            <div className={style.name}>
                <p>SCHOOL OF MULTIMEDIA</p>
            </div>
        </div>
    )
}

export default Footer;