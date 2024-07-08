import React from "react";
import styles from './Section2.module.scss'
import image1 from '../../../assets/art_gallery_exhibit.png'
import image2 from '../../../assets/antique_silver_plate.png'
import image3 from '../../../assets/green_ceramic_urn_museum.png'
import image4 from '../../../assets/bronze_bird_sculpture.png'

function Section2() {
    return (
      <div className={styles.section}>
        <div className={styles.flex_row}>
          <div className={styles.flex_col}>
            <h1 className={styles.hero_title}>Каталог выставок</h1>
            <p className={styles.big_title}>
              На нашем сайте представлен раздел, где вы сможете ознакомиться с актуальными выставками из различных музеев
              и галерей. Здесь вы найдете информацию о произведениях искусства, их авторах.
            </p>
            <p className={styles.big_title1}>
              Погрузитесь в мир искусства и культуры, и насладитесь уникальными экспонатами, представленными в музейных
              коллекциях.
            </p>
          </div>
  
          <div className={styles.grid}>
            <div className={styles.item}>
              <img className={styles.image1} src={image1} alt="alt text" />
              <h4 className={styles.highlight}>Описание фотографии</h4>
            </div>
  
            <div className={styles.item}>
              <img className={styles.image1} src={image2} alt="alt text" />
              <h4 className={styles.highlight}>Описание фотографии </h4>
            </div>
  
            <div className={styles.item}>
              <img className={styles.image1} src={image3} alt="alt text" />
              <h4 className={styles.highlight}>Описание фотографии </h4>
            </div>
  
            <div className={styles.item}>
              <img className={styles.image1} src={image4} alt="alt text" />
              <h4 className={styles.highlight}>Описание фотографии </h4>
            </div>
          </div>
        </div>
      </div>
    );
  }

export default Section2;