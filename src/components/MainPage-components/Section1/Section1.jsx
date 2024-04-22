import React from "react";
import styles from './Section1.module.scss'
import navbar from '../../../assets/audio_equipment_advertisement.png';
import boldMan from '../../../assets/bust_of_man_transparent_background.png';
import beardedMan from '../../../assets/bust_of_bearded_man_transparent_background.png'

const Section1 = (props) => {
    return(
        <section className={styles.section1}>
            <div className={styles.box}>
                <div className={styles.group}>
                    <img className={styles.image6} src={navbar} alt='Navigation bar' />
                    <img className={styles.image7} src={boldMan} alt='Bold man' />

                    <div className={styles.flex_col}>
                        <h1 className={styles.hero_title1}>КОНСТРУКТОР МУЗЕЙНЫХ ВЫСТАВОК</h1>
                        <h4 className={styles.highlight1}>
                        Музей – это место, где время застывает в красоте и истории, чтобы вдохновить нас и увлечь своим величием
                        </h4>
                    </div>

                    <img className={styles.image8} src={beardedMan} alt='Bearded man' />
                </div>
            </div>
        </section>
    )
}

export default Section1;
