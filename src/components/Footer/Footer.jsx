import React from 'react';

import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <section className={styles.section6}>
        <p className={styles.highlight_box}>
            <span className={styles.highlight}>
                <span className={styles.highlight_span0}>Cделано командой “Закодированные” для Проектного Практикума </span>
            </span>
        </p>
    </section>
  );
}

export default Footer;
