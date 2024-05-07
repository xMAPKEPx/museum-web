import React from "react";
import styles from './Register.module.css'
import exit from '../../../assets/exit.png'

const Register = () => {
    return <>
        <div className={styles.form_container}>
            <form className={styles.form}>
                <a href="/" className={styles.exit}><img src={exit} alt="Exit icon" width={16} height={16} /></a>
                <h1 className={styles.title}>Регистрация</h1>
                <div  className={styles.inputLabel}>
                    <label htmlFor='surname'>Фамилия</label>
                    <input
                        type="text"
                        name="surname"
                        id="surname"
                        className={styles.input}
                        required 
                    />
                </div>
                <div  className={styles.inputLabel}>
                    <label htmlFor='name'>Имя</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        className={styles.input} 
                        required
                    />
                </div>
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
                <div  className={styles.inputLabel}>
                    <label htmlFor='check-password'>Повторите пароль</label>
                    <input
                        type="password"
                        name="check-password"
                        id="check-password"
                        className={styles.input}
                        required
                    />
                </div>
                <button className={styles.register} type="submit">Зарегистрироваться</button>
            </form>
        </div>
    </>
}

export default Register;
