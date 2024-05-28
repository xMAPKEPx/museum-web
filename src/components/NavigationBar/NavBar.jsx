import React from "react";
import styles from './NavBar.module.css';
import logo from  '../../assets/logo.png'
import miniProfile from '../../assets/mini-profile.png'
import { useSelector } from "react-redux";

const NavBar = () => {
    const isAuth = useSelector(state => state.auth.isAuth)
    return  (
        <header>
            <nav className={styles.navbar}>
                <a className={styles.home} href="/"><img src={logo} width="100" alt='Home' /> </a>
                <ul className={styles.navigation}>
                    <li><a className={styles.navButtons} href="/exhibitions">КАТАЛОГ ВЫСТАВОК</a></li>
                    <li><a className={styles.navButtons} href="/archives">ХРАНИЛИЩЕ КОЛЛЕКЦИЙ</a></li>
                    <li><a className={styles.navButtons} href="/">КОНСТРУКТОР ВЫСТАВОК</a></li>
                    <li><a className={styles.navButtons} href="/">СОЦИАЛЬНЫЕ СЕТИ</a></li>
                </ul>
                {isAuth ?
                    <a className={styles.profile} href="/profile"><img src={miniProfile} alt='Home' /> </a> :
                    <div className={styles.loginBox}>
                        <a className={styles.loginButton} href="/login">ВХОД</a>
                    </div>
                }
            </nav>
            <div className={styles.line}></div>
        </header>
    )
}

export default NavBar;
