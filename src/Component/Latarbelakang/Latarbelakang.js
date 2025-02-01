import Item from "./Item/Item";
import style from "./Latarbelakang.module.css";
function Latarbelakang() {
    return (
        <div className={style.conteiner_Latarbelakang}>
            <div className={style.content_Latarbelakang}>
                <div className={style.title_Latarbelakang}>
                    <h1>Latar Belakang</h1>
                </div>
                <div className={style.desc_Latarbelakang}>
                    <p>perkembangan teknologi di era generasi Gen Z begitu cepat mengalir dalam berbagai aspek kehidupan,
                        dan tidak ada yang lepas dari perkembangan teknologi seperti pekerjaan, pendidikan termasuk dalam dakwah.</p>
                    <p>Multimedia yang merupakan bagian teknologi modern menempati tempat khusus dalam mensupport berbagai profesi dan pekerjaan,
                        menjadi sarana dan wasilah untuk pembelajaran bahkan dakwah pun tidak lepas dari peranan dan hadirnya multimedia seperti
                        munculnya dakwah di berbagai platfotm youtube, dan medsos</p>
                    <p>Disisi lain kehadiran teknologi dan multimedia ini mengikis nilai-nilai keagamaan, moral dan akhlak sehingga menyebabkan
                        dekadensi moral dan perubahan perilaku generasi
                        remaja dan anak muda sehingga mereka hidup dengan kebodohan dalam agamanya,
                        emosi dan perilaku tidak stabil bahkan menjerumus kepada perbuatan buruk dan jauh dari koridor agama</p>
                    <p>Berdasarkan berbagai pertimbangan tersebut maka Pondok Pesantren Modern IT Multimedia Al Fatih hadir dan berusaha
                        menyeimbangkan antara kehidupan dunia dan akhirat, agama dan teknologi multimedia sehingga menyeimbangkan antara
                        kehidupan dunia dan akhirat, agama dan teknologi multimedia sehingga generasi remaja dan anak muda yang di-didik di
                        Pondok Pesantren Modern IT Multimedia Al Fatih akan memiliki kepahaman agama yang bagus, memiliki hafalan Al Qur'an,
                        memiliki akhlak dan moralitas yang baik dengan tidak mengesampingkan kemampuan dan keahlian teknologi IT Multimedia
                        yang akan menjadi bekal dalam menghadapi kehidupan di dunia, sehingga kehadiran Pondok Pesantren Modern IT Multimedia
                        Al Fatih dianggap penting, dan memiliki aspek strategis dalam menyiapkan kader dan generasi masa depan bangsa dan negara</p>
                </div>
            </div>
            <div className={style.content_info}>
                <div>
                    <Item title="Visi" desc="Terbentuknya kader muslim yang fakih agama, memiliki jiwa pemimpin dan ahli IT" />
                    <Item title="Ciri Khas" desc="1. Memiliki Hafalan Al Qur'an minimal 10 - 15 Juz 
                                                2. Pembiasaan dua bahasa yakni bahasa Arab dan Inggris
                                                3. Leadership Qur'ani
                                                4. IT Change Leader"/>
                </div>
                <div>
                    <Item title="Misi" desc="Membentuk santri menjadi generasi muslim yang memiliki karakter:
                                            \n 1. Memiliki kompetensi keilmuan agama dan umum.
                                            2. Istiqomah mengamalkan ajaran islam
                                            3. Memiliki Jiwa Qur'ani
                                            4. Memiliki aenerasi akhlak yang mulia
                                            5. Memiliki Jiwa Kepemimpinan
                                            6. Paham Ilmu Pengetahuan dan Teknologi Kekinian
                                            7. Memiliki Jiwa juang untuk Iqomatuddin" />
                    <Item title="Target" desc="1. Memiliki pemahaman agama yang lurus
                                                2. Hafal 10 - 15 Juz
                                                3. Aktif berbahasa Arab dan Inggris
                                                4. Memiliki 4 standar it multimedia
                                                (Office, Design Grafis, Video Editing, dan Movie Maker)"/>
                </div>
            </div>
            <div className={style.content_struktur}>
                <div className={style.content_struktur}>
                    <h1>STRUKTURAL</h1>
                </div>
                <div className={style.image_struktur}>
                </div>
                <div className={style.button_struktur}>
                   
                </div>
            </div>
        </div>
    )

}

export default Latarbelakang;