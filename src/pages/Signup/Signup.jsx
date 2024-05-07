import React from "react";
import styles from './Signup.module.css'
import boldMan from '../../assets/bust_of_man_transparent_background.png'
import beardedMan from '../../assets/bust_of_bearded_man_transparent_background.png'
import Register from "../../components/Signup-components/Register/Register";

const Signup = () => {
    return <>
        <div className={styles.main}>
            <img className={styles.image7} src={boldMan} alt='Bold man' />
            <img className={styles.image8} src={beardedMan} alt='Bearded man' />
            <Register className={styles.signup_form} />
        </div>
    </>
}
export default Signup;