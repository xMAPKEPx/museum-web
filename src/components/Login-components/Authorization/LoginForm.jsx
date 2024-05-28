import React, { useState } from "react";
import styles from './LoginForm.module.css'
import exit from '../../../assets/exit.png'
import { login } from "../../../api.auth";
import { useDispatch} from "react-redux";
import { setAuth } from "../../../redux/AuthSlice/AuthSlice";

const LoginForm = () => {
    const [email, setEmail] = useState('eve.holt@reqres.in')
    const [password, setPassword] = useState('qwerty123!')
    const [isLogin, setIsLogin] = useState(false)
    const [isError, setIsError] = useState(false)
    const dispatch = useDispatch()

    const handleSubmit = async(evt) => {
        evt.preventDefault()
        try {
            const response = await login(email, password)
            setIsLogin(true)
            setIsError(false)
            localStorage.setItem('access-token', response.data.access)
            localStorage.setItem('refresh-token', response.data.refresh)
            dispatch(setAuth(localStorage.getItem('access-token')!==null))
            window.location.href = '/'
        } catch (e) {
            setIsError(true)
            setIsLogin(false)
            console.log('Error: ' + e)
        } finally {
            setIsLogin(false)
        }

    }
    return <>
        <div className={styles.form_container}>
            <form className={styles.form} onSubmit={e => handleSubmit(e)}>
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
                        onChange={e => setEmail(e.target.value)}
                        value={email}
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
                        onChange={e => setPassword(e.target.value)}
                        value={password}
                    />
                </div>
                <button className={styles.login} type="submit">Войти</button>
                <a  href="/signup" className={styles.signup}>Регистрация</a>
                {isLogin && <span className={styles.success}>Вы успешно вошли в аккаунт</span>}
                {isError && <span className={styles.error}>Произошла ошибка</span>}
            </form>
        </div>
    </>
}

export default LoginForm;
