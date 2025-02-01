import data from '../../Utils/data-pendidikan';
import ItemPendidikan from './ItemPendidikan/ItemPendidikan';
import style from './Pendidikankonten.module.css'

function ContentPendidikan() {

    return (
        <div>
            <div className={style.title}>
                <h1>UNIT PENDIDIKAN</h1>
            </div>
            <div className={style.isi}>
                <div className={style.kiri}>
                    {data?.map((res, index)=>{
                        return <ItemPendidikan title={res.title} desc={res.desc}/>
                    })}
                    {/* <ItemPendidikan title="SMP IT Multimedia" desc="SMP IT Multimedia fokus pada penguasaan keahlian di bidang teknologi multimedia dan konten multimedia dalam sistem terdistribusi"/>
                    <ItemPendidikan title="SMK IT Multimedia" desc="SMK IT Multimedia fokus pada penguasaan keahlian di bidang teknologi multimedia dan konten multimedia dalam sistem terdistribusi"/>
                    <ItemPendidikan title="Training Pemrograman" desc="Training pemrograman adalah unit pendidikan non formal yang diselenggarakan oleh PPM IT Multimedia AL Fatih untuk membekali masyarakat agar lebih familiar dengan Information Teknologi (IT)"/>
                    <ItemPendidikan title="Aktivitas Santri" desc="Dalam memenuhi pendidikan di PPM IT Multimedia Al Fatih santri akan memepelajari materi umum kedinasan, Tahfidzul Quran, Praktek IT Mutimedia dan Materi Diniyah / Agama yang kami bagi pembelajarannya "/> */}

                </div>
                <div>
                    <img />

                </div>
            </div>
        </div>
    );

}

export default ContentPendidikan;