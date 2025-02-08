import style from './Hero.module.css'

function Hero() {



    return (
        <div>
            <div className={style.test}>
                <img src='image/Hero/home-1.jpg' />
                <div className={style.teks}>
                    <h3>PONPES MODERN IT MULTIMEDIA</h3>
                    <h1>AL FATIH</h1>
                </div>
                <div className={style.panahbawah}>
                    <img src='image/Hero/panah-bawah.png' />
                </div>
            </div>
        </div>
    )

}

export default Hero;

