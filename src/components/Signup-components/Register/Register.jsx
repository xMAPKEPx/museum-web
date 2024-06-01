import React, {useState} from "react";
import styles from './Register.module.css'
import exit from '../../../assets/exit.png'
import {signup} from "../../../api.auth";
import {useNavigate} from "react-router-dom";

const Register = () => {
    const [data, setData] = useState({
        last_name: 'Holt',
        first_name: 'Eve',
        email: 'eve.holt@reqres.in',
        password: 'qwerty123!',
        re_password: 'qwerty123!',
    })
    const [error, setError] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const navigate = useNavigate()

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
            if (data.password === data.re_password) {
                await signup(data.last_name, data.first_name, data.email, data.password, data.re_password)
                setSubmitted(true)
                setError(false)
                navigate('/login')
            } else {
                setError(true)
                setSubmitted(false)
            }
        } catch (e){
            console.log("Error: " + e)
        } finally {
            setSubmitted(false)
        }
    }

    return <>
        <div className={styles.form_container}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <a href="/login" className={styles.exit}><img src={exit} alt="Exit icon" width={16} height={16} /></a>
                <h1 className={styles.title}>Регистрация</h1>
                <div  className={styles.inputLabel}>
                    <label htmlFor='last_name'>Фамилия</label>
                    <input
                        type="text"
                        name="last_name"
                        id="last_name"
                        className={styles.input}
                        required 
                        onChange={handleChange}
                        value={data.last_name}
                    />

                </div>
                <div  className={styles.inputLabel}>
                    <label htmlFor='first_name'>Имя</label>
                    <input
                        type="text"
                        name="first_name"
                        id="first_name"
                        className={styles.input} 
                        required
                        onChange={handleChange}
                        value={data.first_name}
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
                    <label htmlFor='re_password'>Повторите пароль</label>
                    <input
                        type="password"
                        name="re_password"
                        id="re_password"
                        className={styles.input}
                        required
                        onChange={handleChange}
                        value={data.re_password}
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
