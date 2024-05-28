import React, { useState } from "react";
import styles from './Register.module.css'
import exit from '../../../assets/exit.png'
import { signup } from "../../../api.auth";
import { useDispatch } from "react-redux";
import { setAuth } from "../../../redux/AuthSlice/AuthSlice";

const Register = () => {
    const [data, setData] = useState({
        surname: 'Holt',
        name: 'Eve',
        email: 'eve.holt@reqres.in',
        password: 'pistol',
        confirmPassword: 'pistol',
    })
    const [error, setError] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const dispatch = useDispatch()

    const handleChange = (evt) => {
        const {name, value} = evt.target
        setData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }))
    }

    const handleSubmit = async(evt) => {
        evt.preventDefault()
        try{
            if (data.password === data.confirmPassword) {
                const response = await signup(data.surname, data.name, data.email, data.password, data.confirmPassword)
                setSubmitted(true)
                setError(false)
                localStorage.setItem('token', response.data.token)
                dispatch(setAuth(localStorage.getItem('token')!==null))
            } else {
                setError(true)
                setSubmitted(false)
            }
        } catch (e){
            console.log("Error: " + e)
        } finally {
            setSubmitted(false)
            window.location.href = '/login'
        }
    }

    return <>
        <div className={styles.form_container}>
            <form className={styles.form} onSubmit={handleSubmit}>
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
                        onChange={handleChange}
                        value={data.surname}
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
                        onChange={handleChange}
                        value={data.name}
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
                        onChange={handleChange}
                        value={data.email}
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
                        onChange={handleChange}
                        value={data.password}
                    />
                </div>
                <div  className={styles.inputLabel}>
                    <label htmlFor='confirmPassword'>Повторите пароль</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        id="confirmPassword"
                        className={styles.input}
                        required
                        onChange={handleChange}
                        value={data.confirmPassword}
                    />
                    {error && <span className={styles.error}>Пароли отличаются!</span>}
                </div>
                <button className={styles.register} type="submit">Зарегистрироваться</button>
                {submitted && <span className={styles.success}>Вы успешно зарегистрировались!</span>}
            </form>
        </div>
    </>
}

export default Register;
