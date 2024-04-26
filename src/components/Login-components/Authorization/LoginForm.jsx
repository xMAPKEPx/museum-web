import React from "react";
import styles from './LoginForm.module.css'

const LoginForm = () => {
    return <>
        <div className={styles.form_container}>
            <form className={styles.form}>
                <h1 className={styles.title}>Вход</h1>
                <div  className={styles.inputLabel}>
                    <label for='email'>E-mail</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        className={styles.input} 
                    />
                </div>
                <div  className={styles.inputLabel}>
                    <label for='password'>Пароль</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        className={styles.input}
                    />
                </div>

            </form>
        </div>
    </>
}

export default LoginForm;
