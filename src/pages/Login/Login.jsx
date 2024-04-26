import React from "react";
import styles from './Login.module.css'
import LoginForm from "../../components/Login-components/Authorization/LoginForm";
import boldMan from '../../assets/bust_of_man_transparent_background.png'
import beardedMan from '../../assets/bust_of_bearded_man_transparent_background.png'

const Auth = () => {
    return <>
        <div className={styles.main}>
            <img className={styles.image7} src={boldMan} alt='Bold man' />
            <img className={styles.image8} src={beardedMan} alt='Bearded man' />
            <LoginForm className={styles.login_form} />
        </div>
    </>
}
export default  Auth;
