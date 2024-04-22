import React from 'react';

import styles from './Section4.module.scss';
import plus from '../../../assets/plus_sign.png'

const renderSection4 = (props) => {
  return (
    <section className={styles.section4}>
      <div className={styles.wrapper1}>
        <div className={styles.flex_col}>
            <div className={styles.flex_col1}>
                <h1 className={styles.hero_title}>Конструктор выставок</h1>
                <p className={styles.big_title}>
                Помимо наслаждения просмотром музейных экспозиций и семейных коллекций на нашем веб-ресурсе, вы имеете
                возможность воплотить свои творческие замыслы в создании собственной уникальной выставки или коллекции.{' '}
                </p>
            </div>

            <div className={styles.flex_col2}>
                <div className={styles.title}>Название </div>

                <div className={styles.flex_row}>
                    <div className={styles.content_box}>
                        <div className={styles.flex_col3}>
                            <img className={styles.image2} src={plus} alt="alt text" />
                            <p className={styles.highlight1}>описание / фотография </p>
                        </div>
                    </div>

                    <div className={styles.content_box}>
                        <div className={styles.flex_col4}>
                            <img className={styles.image2} src={plus} alt="alt text" />
                            <p className={styles.highlight1}>описание / фотография </p>
                        </div>
                    </div>
                </div>
            </div>

          <p className={styles.title1}>
            Поделитесь своим вдохновением и талантом с другими ценителями искусства, воплощая ваше собственное
            мироздание прямо здесь, на нашем виртуальном пространстве.{' '}
          </p>
        </div>
      </div>
    </section>
  );
}

export default renderSection4;
