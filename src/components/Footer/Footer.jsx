import React from 'react';

import styles from './Footer.module.scss';

const Footer = (props) => {
  return (
    <section className={styles.section6}>
        <p className={styles.highlight_box}>
            <span className={styles.highlight}>
                <span className={styles.highlight_span0}>Cделано командой “</span>
                <span className={styles.highlight_span1}>Закодированные”</span>
                <span className={styles.highlight_span2}> для Проектного Практикума </span>
            </span>
        </p>
    </section>
  );
}

export default Footer;
