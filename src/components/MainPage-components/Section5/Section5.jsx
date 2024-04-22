import React from 'react';

import styles from './Section5.module.scss';
import socialLogos from '../../../assets/social_media_logos.png'

const Section5 = (props) => {
  return (
    <section className={styles.section5}>
        <div className={styles.wrapper}>
            <div className={styles.flex_col}>
                <h1 className={styles.hero_title}>Социальные сети</h1>
                <img className={styles.image1} src={socialLogos} alt="Social" />
            </div>

            <p className={styles.big_title_box}>
                <span className={styles.big_title}>
                    <span className={styles.big_title_span0}>
                        Здесь вы сможете найти все необходимые контактные данные для связи с представителями музея, задать им
                        вопросы, узнать о предстоящих мероприятиях и экспозициях. Благодаря социальным сетям, вы можете быть в
                        курсе всех новостей и событий, происходящих в музее, и быть в курсе самых актуальных сведений.
                        <br />
                        <br />
                        Для того чтобы установить контакт с интересующими вас музеями, вы можете воспользоваться разделом{' '}
                    </span>
                    <span className={styles.big_title_span1}>
                        социальные сети <br />
                    </span>
                    <span className={styles.big_title_span2}>
                        Не стесняйтесь обращаться к музеям через социальные сети – это{' '}
                    </span>
                    <span className={styles.big_title_span3}>удобный</span>
                    <span className={styles.big_title_span4}> и </span>
                    <span className={styles.big_title_span5}>быстрый</span>
                    <span className={styles.big_title_span6}>
                        {' '}
                        способ получить нужную информацию и оставаться на связи с интересующими вас учреждениями культуры.
                    </span>
                </span>
            </p>
        </div>
    </section>
  );
}

export default Section5;
