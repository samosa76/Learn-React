import style from "./Unisza.module.css";
function Unisza() {

    return (
        <div className={style.container_Unisza}>
            <div className={style.content_Unisza}>
                <div className={style.title_Unisza}>
                    <h1>Universitas Sultan Zainal Abidin, Malaysia</h1>
                </div>
                <div className={style.desc_Unisza}>
                    <p>Alhamdulillah bertempat dikampus IBM Bekasi , Pondok Pesantren Modern (PPM) IT Multimedia Al Fatih
                        melakukan kerjasama dengan Universiti Sultan Zainal Abidin, Malaysia untuk alumninya agar bisa
                        kuliah di UniSZA Malaysia, Pengiriman Dosen UniSZA untuk pelatihan dan pengembangan guru dan
                        santri Al Fatih.</p>
                </div>
            </div>
            <div className={style.image_Unisza}>
                <img src="image/Unisza/kerjasama-1.jpeg"/> 
                <img src="image/Unisza/kerjasama-2.jpeg"/> 
                <img src="image/Unisza/kerjasama-3.jpeg"/> 
            </div>
        </div>
    )
}
export default Unisza;