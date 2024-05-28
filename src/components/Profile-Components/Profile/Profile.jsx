import React, { useEffect, useState } from "react";
import styles from "./Profile.module.scss";
import image from '../../../assets/profileImg.svg'
import eye from '../../../assets/showPassword.png'
import NavBar from "../../NavigationBar/NavBar";
import { changeMyPhoto, getMyInfo } from "../../../api.auth";
import { useDispatch, useSelector } from "react-redux";
import {setChange} from '../../../redux/UserSlice/UserSlice'

function Profile(props) {
    const dispatch = useDispatch()
    const isChanging = useSelector(state => state.user.isChanging)
    const [user, setUser] = useState({})
    const [photo, setPhoto] = useState(null)

    useEffect(()=>{
        const fetchData = async() =>{
            const response = await getMyInfo();
            setUser(response.data)
            // console.log("Response: ", response.data)
        }
        fetchData()
    }, [])

    const handleClick = (evt) => {
        evt.preventDefault()
        dispatch(setChange())
    }

    const handleChange = (evt) => {
        const {name, value} = evt.target
        setUser(prevFormData => ({
            ...prevFormData,
            [name]: value
        }))
    }

    const handleImgChange = async(evt) => {
        evt.preventDefault()
        try {
            const response = await changeMyPhoto(user.id, photo)
            console.log(response)
        } catch (e) {
            console.log('Error: ', e)
        }
    }

    return <>
        <div className={styles.profileSection}>
        <NavBar />
            <div className={styles.profileSectionFlexCol}>
            <h1 className={styles.profileTitle}>Профиль</h1>
    
            <form className={styles.profileContentBox}>
                <div className={styles.profileFlexCol1}>
                    <div className={styles.profileFlexRow}>
                        <div className={styles.profileFlexCol2}>
                            <div className={styles.profileFlexCol3}>
                                <label htmlFor='last_name' className={styles.inputLabel}>Фамилия</label>
                                <input 
                                name="last_name"
                                id="last_name"
                                className={styles.input} 
                                disabled={!isChanging} 
                                onChange={handleChange} 
                                value={user.last_name}/>
                                <hr className={styles.profileLine1} size={1} />
                            </div>

                            <div className={styles.profileFlexCol3}>
                                <label htmlFor='first_name' className={styles.inputLabel}>Имя</label>
                                <input 
                                name="first_name"
                                id="first_name"
                                className={styles.input} 
                                disabled={!isChanging} 
                                onChange={handleChange} 
                                value={user.first_name}/>
                                <hr className={styles.profileLine1} size={1} />
                            </div>
    
                            <div className={styles.profileFlexCol3}>
                                <label htmlFor='email' className={styles.inputLabel}>E-mail</label>
                                <input 
                                type="email"
                                name="email"
                                id="email"
                                className={styles.input} 
                                disabled={!isChanging} 
                                onChange={handleChange} 
                                value={user.email}/>
                                <hr className={styles.profileLine1} size={1} />
                            </div>
    
                            <div className={styles.profileFlexCol4}>
                                <label htmlFor='password' className={styles.inputLabel}>Пароль</label>
            
                                <div className={styles.profilePasswordFlexRow}>
                                    <input 
                                    type='password'
                                    name="password"
                                    id="password" 
                                    className={styles.input} 
                                    disabled={!isChanging} 
                                    onChange={handleChange} 
                                    value={user.password}/>
                                    <img
                                        className={styles.profilePasswordImage}
                                        src={eye}
                                        alt="alt text"
                                    />
                                </div>
            
                                <hr className={styles.profileLine1} size={1} />
                            </div>
    
                            <div className={styles.profileFlexCol3}>
                                <label htmlFor='phone' className={styles.inputLabel}>Контактный номер</label>
                                <input 
                                type="tel"
                                name="phone"
                                id="phone"
                                className={styles.input} 
                                disabled={!isChanging} 
                                onChange={handleChange} 
                                value={user.phone}/>
                                <hr className={styles.profileLine1} size={1} />
                            </div>
                        </div>
                        <div className={styles.profileFlexCol5}>
                            {photo ? <img
                                className={styles.profileImage}
                                src={URL.createObjectURL(photo)}
                                alt="alt text"
                                />: 
                                <img
                                className={styles.profileImage}
                                src={image}
                                alt="alt text"
                                />}
                                <button onClick={() => setPhoto(null)}>Очистить</button>
                                <input
                                    type="file"
                                    name="myImage"
                                    // Event handler to capture file selection and update the state
                                    onChange={(event) => {
                                    console.log(event.target.files[0]); // Log the selected file
                                    setPhoto(event.target.files[0]); // Update the state with the selected file
                                    }}
                                />
                            <button onClick={handleImgChange} className={styles.profileChangeButton}>Изменить</button>
                        </div>
                    </div>
                    {isChanging ? <button type="submit" onClick={handleClick} className={styles.profileEditButton}>Сохранить</button> : <button onClick={handleClick} className={styles.profileEditButton}>Редактировать</button>}
                </div>
            </form>
            </div>
        </div>
    </>
}
  
  export default Profile;
  