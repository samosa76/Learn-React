import style from './ContentPendaftaran.module.css'

function ContentPendaftaran() {
    return (
        <div className={style.semua}>

            <div className={style.brosur}>
                <img src="image/pendaftaran/psb-2025.jpg" />
            </div>

            <div className={style.Pendaftaran}>

                <div className={style.info}>
                    <h1>Pendaftaran</h1>
                    <p>Pendaftaran Santri Tahun 2025</p>
                    <p>Telah di buka PSB (Penerimaan Santri Baru) tahun ajaran 2025/2026 Ponpes Modern IT Multimedia Al Fatih</p>
                    <p>Kuota hanya untuk :
                        <br />- SMP : 25 santri
                        <br />- SMK : 25 santri</p>
                </div>

                <div className={style.daftar}>

                    <div className={style.daftarsekarang}>
                        <div>
                            <h2>Daftar Sekarang</h2>
                        </div>
                        <div className={style.linkdaftar}>
                            <p>Daftar</p>
                        </div>
                    </div>

                    <div className={style.downloadbrosur}>
                        <div>
                            <h2>Download Brosur</h2>
                        </div>
                        <div className={style.linkbrosur}>
                            <p>Download</p>
                        </div>
                    </div>

                </div>


            </div>
        </div>

    )
}

export default ContentPendaftaran