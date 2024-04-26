import React from "react";
import styles from './NavBar.module.css';
import logo from  '../../assets/logo.png'

const NavBar = () => {
    return  (
        <header>
            <nav className={styles.navbar}>
                <a className={styles.home} href="/"><img src={logo} width="100" height="100" alt='Home' /> </a>
                <ul className={styles.navigation}>
                    <li><a className={styles.navButtons} href="/">КАТАЛОГ ВЫСТАВОК</a></li>
                    <li><a className={styles.navButtons} href="/">ХРАНИЛИЩЕ КОЛЛЕКЦИЙ</a></li>
                    <li><a className={styles.navButtons} href="/">КОНСТРУКТОР ВЫСТАВОК</a></li>
                    <li><a className={styles.navButtons} href="/">СОЦИАЛЬНЫЕ СЕТИ</a></li>
                </ul>
                <div className={styles.loginBox}>
                    <a className={styles.loginButton} href="/login">ВХОД</a>
                </div>
            </nav>
            <div className={styles.line}></div>
        </header>
    )
}

export default NavBar;
