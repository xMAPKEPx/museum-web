import React, {useState} from "react";
import styles from './Register.module.css'
import exit from '../../../assets/exit.png'
import {signup} from "../../../api.auth";
import {useNavigate} from "react-router-dom";

const Register = () => {
    const [data, setData] = useState({
        last_name: '',
        first_name: '',
        email: '',
        password: '',
        re_password: '',
    })
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('')
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

        const commonPasswords = ['password', '12345678', 'qwerty', 'abc123', 'password1']; // список распространенных паролей
        const passwordContainsUserInfo = (password, lastName, firstName, email) => {
            const lowerPassword = password.toLowerCase();
            return (
                lowerPassword.includes(lastName.toLowerCase()) ||
                lowerPassword.includes(firstName.toLowerCase()) ||
                lowerPassword.includes(email.split('@')[0].toLowerCase())
            );
        };

        const isPasswordValid = (password, lastName, firstName, email) => {
            if (password.length < 8) {
                return {valid: false, error: 'Пароль должен быть длиннее или равен 8 символам'};
            }
            if (commonPasswords.includes(password)) {
                return {valid: false, error: 'Пароль слишком часто используется'};
            }
            if (/^\d+$/.test(password)) {
                return {valid: false, error: 'Пароль не может состоять только из цифр'};
            }
            if (passwordContainsUserInfo(password, lastName, firstName, email)) {
                return {valid: false, error: 'Пароль не должен содержать ваши данные'};
            }
            return {valid: true};
        };

        try {
            const {last_name, first_name, email, password, re_password} = data;

            if (password !== re_password) {
                setError(true);
                setSubmitted(false);
                setErrorMessage('Пароли не совпадают');
                return;
            }

            const validation = isPasswordValid(password, last_name, first_name, email);
            if (!validation.valid) {
                setError(true);
                setSubmitted(false);
                setErrorMessage(validation.error);
                return;
            }

            await signup(last_name, first_name, email, password, re_password);
            setSubmitted(true);
            setError(false);
            navigate('/login');
        } catch (e) {
            if (e.response && (e.response.status === 401 || e.response.status === 400)) {
                setError(true);
                setErrorMessage(e.response.data.detail || "Пользователь с таким email уже существует");
            } else {
                console.log('Error: ' + e);
            }
            setSubmitted(false);
        } finally {
            setSubmitted(false);
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
                        autoComplete='additional-name'
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
                        autoComplete='name'
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
                        autoComplete='email'
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
                        autoComplete='off'
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
                        autoComplete='off'
                        className={styles.input}
                        required
                        onChange={handleChange}
                        value={data.re_password}
                    />
                    {error && <span className={styles.error}>{errorMessage}</span>}
                </div>
                <button className={styles.register} type="submit">Зарегистрироваться</button>
                {submitted && <span className={styles.success}>Вы успешно зарегистрировались!</span>}
            </form>
        </div>
    </>
}

export default Register;
