import React, {useEffect, useState} from "react";
import styles from "./Profile.module.scss";
import image from '../../../assets/profileImg.svg'
import eye from '../../../assets/showPassword.png'
import {changeMyPhoto, changeProfileInfo, getMyInfo} from "../../../api.auth";
import {useDispatch, useSelector} from "react-redux";
import {setChange} from '../../../redux/UserSlice/UserSlice'
import {useNavigate} from "react-router-dom";

function Profile() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const isChanging = useSelector(state => state.user.isChanging)
    const [user, setUser] = useState({
        id: NaN,
        email: "",
        first_name: "",
        last_name: "",
        image_url: "",
        password: "",
        phone: "",
    })
    const [photo, setPhoto] = useState()
    const [isShown, setIsShown] = useState(false)
    const [isSending, setIsSending] = useState(false)

    useEffect(()=>{
        const fetchData = async() =>{
            const response = await getMyInfo();
            setUser(response.data)
        }
        fetchData()
    }, [])

    const handleClick = (evt) => {
        evt.preventDefault()
        dispatch(setChange())
    }
    const handleLogOut = (e) => {
        e.preventDefault();
        localStorage.removeItem('access-token');
        localStorage.removeItem('refresh-token');
        navigate('/login')
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
        const formData = new FormData();
        formData.append('img', photo)
        try {
            const response = await changeMyPhoto(formData)
            console.log(response)
        } catch (e) {
            console.log('Error: ', e)
        }
    }

    function showPassword() {
        setIsShown(!isShown)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            dispatch(setChange())
            setIsSending(true)
            await changeProfileInfo(user.id, user.last_name, user.first_name, user.image_url, user.phone)
        } catch (e) {
            console.log(e)
        } finally {
            setIsSending(false)
        }
    }

    return <>
        <div className={styles.profileSection}>
            <div className={styles.profileSectionFlexCol}>
                <h1 className={styles.profileTitle}>Профиль</h1>

                <form onSubmit={handleSubmit} className={styles.profileContentBox}>
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
                                <hr className={styles.profileLine1} size={1}/>
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
                                <hr className={styles.profileLine1} size={1}/>
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
                                <hr className={styles.profileLine1} size={1}/>
                            </div>

                            <div className={styles.profileFlexCol4}>
                                <label htmlFor='password' className={styles.inputLabel}>Пароль</label>

                                <div className={styles.profilePasswordFlexRow}>
                                    <input
                                        type={isShown ? 'text' : 'password'}
                                        name="password"
                                        id="password"
                                        className={styles.input}
                                        disabled={!isChanging}
                                        onChange={handleChange}
                                        value={user.password}/>
                                    <img onClick={showPassword}
                                         className={styles.profilePasswordImage}
                                         src={eye}
                                         alt="alt text"
                                    />
                                </div>

                                <hr className={styles.profileLine1} size={1}/>
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
                                <hr className={styles.profileLine1} size={1}/>
                            </div>
                        </div>
                        <div className={styles.profileFlexCol5}>
                            {photo ? <img
                                    className={styles.profileImage}
                                    src={URL.createObjectURL(photo)}
                                    alt="alt text"
                                /> :
                                <img
                                    className={styles.profileImage}
                                    src={user.image_url ? user.image_url : image}
                                    alt="alt text"
                                />}
                            <button className={styles.profileChangeButton} onClick={() => setPhoto(null)}>Очистить
                            </button>
                            <label className={styles.selectButton} htmlFor='myImage'>Выбрать фото</label>
                            <input
                                className={styles.hidden}
                                type="file"
                                name="myImage"
                                id="myImage"
                                // Event handler to capture file selection and update the state
                                onChange={(event) => {
                                    setPhoto(event.target.files[0])
                                }}
                            />
                            <button onClick={handleImgChange} className={styles.profileChangeButton}>Изменить</button>
                        </div>
                    </div>
                    <button className={styles.navButton} onClick={() => navigate('/me/collections')}>К моим коллекциям</button>
                    {isChanging ? <button type="submit"
                                          className={styles.profileEditButton}>Сохранить</button> :
                        <button onClick={handleClick} className={styles.profileEditButton}
                                disabled={isSending}>Редактировать</button>}
                    <button className={styles.profileEditButton} onClick={e => handleLogOut(e)}>Выйти</button>
                </div>
            </form>
            </div>
        </div>
    </>
}

export default Profile;
  