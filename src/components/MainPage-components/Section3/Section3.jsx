import React from "react";
import styles from './Section3.module.scss'
import leftArrow from '../../../assets/left_angle_bracket.png'
import carousel from '../../../assets/classical_art_miniatures.jpg'
import dots from '../../../assets/vertical_lines_pattern.png'
import rightArrow from '../../../assets/right_angle_bracket.png'

const Section3 = (props) => {
    return(
        <section className={styles.section3}>
            <div className={styles.wrapper2}>
                <div className={styles.flex_col}>
                    <div className={styles.flex_col1}>
                        <h1 className={styles.hero_title}>Хранилище коллекций</h1>
                        <p className={styles.big_title}>
                        В данном разделе представлены уникальные собрания искусства, собранные семьями или коллекционерами. Здесь
                        вы сможете ознакомиться с разнообразными индивидуальными коллекциями, которые отражают уникальный взгляд
                        на искусство и культуру.{' '}
                        </p>
                    </div>

                    <div className={styles.flex_row}>
                        <img className={styles.image4} src={leftArrow} alt='Previous' />
                        
                        <div className={styles.flex_col2}>
                            <img className={styles.image3} src={carousel} alt="Carousel" />
                            <img className={styles.image5} src={dots} alt="Dots" />
                            <hr className={styles.line} size={1} />
                            <p className={styles.highlight2}>Подпись под фотографией</p>
                        </div>

                        <img className={styles.image4} src={rightArrow} alt="Next" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section3
