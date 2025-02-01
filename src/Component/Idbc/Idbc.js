import style from "./Idbc.module.css";
function Idbc() {

    return (
        <div className={style.conteiner_Idbc}>
           <hr />
            <div className={style.content_Idbc}>
                <div className={style.title_Idbc}>
                    <h1>IDBC Internasional</h1>
                </div>
                <div className={style.desc_Idbc}>
                    <p>Di Bulan Ramadhan 1444 H PPM IT Multimedia Al Fatih mendapat kesempatan untuk bekerja sama dengan
                        IDBC Internasional untuk program Kuliah, Dakwah dan Kerja di Jerman yang berkolaborasi dengan
                        Global Katalys dan Pemerintahan Jerman .  Melalui Pimpinan IDBC Internasional Junaidi Alfan beliau
                        mengajak PPM IT Multimedia Al Fatih menjadi bagian dalam program ini.</p>
                </div>
            </div>
            <div className={style.image_Idbc}>
                <img src="image/Idbc/kerjasama-4.jpeg" />
            </div>
        </div>

    )
}


export default Idbc;