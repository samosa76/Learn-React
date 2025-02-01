import style from './Ekskul.module.css'
function Ekskul() {
    return (
        <div className="container">
            <div>
                <h1 className={style.Title}>Ekstrakulikuler</h1>
                <div>
                    <p className={style.p1}>Untuk menciptakan santri yang aktif dalam kegiatan diluar jam pembelajaran maka dibentuk Ekstrakurikuler di PPM IT<br></br> Multimedia AL Fatih</p>
                </div>
                <div className={style.p2}>
                    <div className={style.b1}>
                        <div className={style.Ekskul_item}>
                        <img src='image/pramuka.png'/>
                            <h2>Pramuka</h2>
                            <p>Untuk melatih santri agar bisa disiplin, bisa baris berbaris dan tali menali maka santri wajib mengikuti ekstrakurikuler pramuka</p>
                        </div>
                        <div className={style.Ekskul_item}>
                        <img src='image/silat.png'/>
                            <h2>Pencak silat</h2>
                            <p>Untuk santri yang senang dengan bela diri dan ingin membekali dirinya dengan ilmu dan kemampuan bela diri santri bisa memilih ektrakurikuler pencak silat dari Tapak suci putra muhammadiyah</p>
                        </div>
                        <div className={style.Ekskul_item}>
                        <img src='image/memanah.png'/>
                            <h2>Memanah</h2>
                            <p>Salah satu olah raga sunnah yang hari ini digemari adalah memanah, maka santri bisa memilih ektrakurikuler ini untuk melatih fokus dan ketangkasan</p>
                        </div>
                    </div>
                    <div className={style.b2}>
                        <div className={style.Ekskul_item}>
                        <img src='image/language-club.png'/>
                            <h2>English & Arabic Club</h2>
                            <p>Ektrakurikuler ini diperuntukkan untuk santri yang senang denga bahasa dan ingin memperdalam bahasa Inggris dan Arab atau keduanya</p>
                        </div>
                        <div className={style.Ekskul_item}>
                        <img src='image/agriculture.png'/>
                            <h2>Agriculture Club</h2>
                            <p>PPM IT Multimedia Al Fatih yang terletak diatas lahan 3 Hektar perkebunan membuka peluang santri untuk mengambil ekstrakurikuler berkebun</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );

}

export default Ekskul;