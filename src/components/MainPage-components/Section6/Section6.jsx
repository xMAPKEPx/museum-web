import React from 'react';

import styles from './Section6.module.scss';

const Section6 = (props) => {
  return (
    <section className={styles.section6}>
        <p className={styles.highlight_box}>
            <span className={styles.highlight}>
                <span className={styles.highlight_span0}>сделано командой “</span>
                <span className={styles.highlight_span1}>Закодированные”</span>
                <span className={styles.highlight_span2}> для Проектного Практикума </span>
            </span>
        </p>
    </section>
  );
}

export default Section6;
