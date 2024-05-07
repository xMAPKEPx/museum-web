import React from "react";
import styles from './LoginForm.module.css'
import exit from '../../../assets/exit.png'

const LoginForm = () => {
    return <>
        <div className={styles.form_container}>
            <form className={styles.form}>
                <a href="/" className={styles.exit}><img src={exit} alt="user" width={16} height={16} /></a>
                <h1 className={styles.title}>Вход</h1>
                <div  className={styles.inputLabel}>
                    <label htmlFor='email'>E-mail</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        className={styles.input} 
                        required
                    />
                </div>
                <div  className={styles.inputLabel}>
                    <label htmlFor='password'>Пароль</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        className={styles.input}
                        required
                    />
                </div>
                <button className={styles.login} type="submit">Войти</button>
                <a  href="/signup" className={styles.signup}>Регистрация</a>
            </form>
        </div>
    </>
}

export default LoginForm;
