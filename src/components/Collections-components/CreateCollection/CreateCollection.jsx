import React, {useRef, useState} from 'react';
import styles from './CreateCollections.module.css';
import NavBar from "../../NavigationBar/NavBar";
import Footer from "../../Footer/Footer";
import {createCollection, updateCollection} from "../../../api.auth";
import {useNavigate} from "react-router-dom";

const CreateCollectionPage = () => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [photo, setPhoto] = useState();
    const id = useRef('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData();
        formData.append('img', photo)
        try {
            const response = await createCollection(name)
            id.current = response.data.id
            navigate(-1)
        } catch (e) {
            console.log(e)
        } finally {
            await update();
        }
    }

    const update = async () => {
        const formData = new FormData();
        formData.append('img', photo)
        formData.append('description', description)
        formData.append('collection', id.current)
        try {
            await updateCollection(id.current, formData);
            window.location.reload();
        } catch (e) {
            console.log(e)
        }
    }

    return <>
        <NavBar />
        <div className={styles.main}>
            <section className={styles.SectionFlexCol}>
                <form className={styles.contentBox} onSubmit={handleSubmit}>
                    <div className={styles.flexCol1}>
                        <div className={styles.flexRow}>
                            <div className={styles.flexCol2}>
                                <div className={styles.flexCol3}>
                                    <label htmlFor='name' className={styles.inputLabel}>Название коллекции</label>
                                    <input
                                        name="name"
                                        id="name"
                                        className={styles.input}
                                        onChange={e => setName(e.target.value)}
                                        value={name}
                                        required
                                    />
                                    <hr className={styles.line} size={1}/>
                                </div>
                                <div className={styles.flexCol3}>
                                    <label htmlFor='description' className={styles.inputLabel}>Описание коллекции</label>
                                    <input
                                        name="description"
                                        id="description"
                                        className={styles.input}
                                        onChange={event => setDescription(event.target.value)}
                                        value={description}
                                    />
                                    <hr className={styles.line} size={1}/>
                                </div>
                            </div>
                            <div className={styles.flexCol4}>
                                {photo ? <img
                                        className={styles.profileImage}
                                        src={URL.createObjectURL(photo)}
                                        alt="alt text"
                                    />
                                    : null}
                                {photo ? <button className={styles.changeButton}
                                                 onClick={() => setPhoto(null)}>Очистить
                                </button> : null}
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
                                    required
                                />
                            </div>
                        </div>
                        <button type="submit" className={styles.submitButton}>
                            Загрузить на сервер
                        </button>
                    </div>

                </form>
            </section>
        </div>
        <Footer/>
    </>
};

export default CreateCollectionPage;