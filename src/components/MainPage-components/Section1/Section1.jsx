import React from "react";
import styles from './Section1.module.scss'
import mainPng from '../../../assets/main_image.png';
import NavBar from "../../NavigationBar/NavBar";

const Section1 = () => {
    return(
        <section className={styles.section1}>
            <div className={styles.box}>
                <NavBar />
                <div className={styles.group}>
                    <img className={styles.image7} src={mainPng} alt='Bold man' />

                    <div className={styles.flex_col}>
                        <h1 className={styles.hero_title1}>КОНСТРУКТОР МУЗЕЙНЫХ ВЫСТАВОК</h1>
                        <h4 className={styles.highlight1}>
                        Музей – это место, где время застывает в красоте и истории, чтобы вдохновить нас и увлечь своим величием
                        </h4>
                    </div>

                    {/*<img className={styles.image8} src={beardedMan} alt='Bearded man' />*/}
                </div>
            </div>
        </section>
    )
}

export default Section1;
