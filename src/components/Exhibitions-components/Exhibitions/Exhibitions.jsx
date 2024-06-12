import React, {useEffect, useState} from 'react';
import styles from './Exhibitions.module.scss';
import {getExhibitions} from "../../../api.auth";
import {useNavigate} from "react-router-dom";
import image from '../../../assets/cardImage.png'

const ExhibitionsList = () => {
    const [exhibitions, setExhibitions] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchExhibitions = async () => {
            try {
                const response = await getExhibitions().data
                setExhibitions(response);
            } catch (e) {
                console.log('Error: ', e)
            }
        }
        fetchExhibitions();
    }, []);

    const handleCardClick = (id) => {
        navigate(`/exhibitions/${id}`);
    }

    return (
        <main className={styles.main}>
            <section className={styles.section1}>
                <div className={styles.flex_col}>
                    <h1 className={styles.title}>Каталог выставок</h1>

                    <div className={styles.grid}>

                        {/*{exhibitions.map((item, index) => (*/}
                        {/*    <div className={styles.item} key={index} onClick={() => handleCardClick(item.id)}>*/}
                        {/*        <img*/}
                        {/*            className={styles.image2}*/}
                        {/*            src={item.image_url}*/}
                        {/*            alt={`Коллекция ${item.author}`}*/}
                        {/*        />*/}
                        {/*        <h4 className={styles.highlight}>{item.title}</h4>*/}
                        {/*    </div>*/}
                        {/*))}*/}


                        <div className={styles.item}>
                            <img
                                className={styles.image2}
                                src={image}
                                alt="alt text"
                            />
                            <h4 className={styles.highlight}>Описание фотографии</h4>
                        </div>

                        <div className={styles.item}>
                            <img
                                className={styles.image2}
                                src={image}
                                alt="alt text"
                            />
                            <h4 className={styles.highlight}>Описание фотографии</h4>
                        </div>

                        <div className={styles.item}>
                            <img
                                className={styles.image2}
                                src={image}
                                alt="alt text"
                            />
                            <h4 className={styles.highlight}>Описание фотографии</h4>
                        </div>

                        <div className={styles.item}>
                            <img
                                className={styles.image2}
                                src={image}
                                alt="alt text"
                            />
                            <h4 className={styles.highlight}>Описание фотографии</h4>
                        </div>

                        <div className={styles.item}>
                            <img
                                className={styles.image2}
                                src={image}
                                alt="alt text"
                            />
                            <h4 className={styles.highlight}>Описание фотографии</h4>
                        </div>

                        <div className={styles.item}>
                            <img
                                className={styles.image2}
                                src={image}
                                alt="alt text"
                            />
                            <h4 className={styles.highlight}>Описание фотографии</h4>
                        </div>

                        <div className={styles.item}>
                            <img
                                className={styles.image2}
                                src={image}
                                alt="alt text"
                            />
                            <h4 className={styles.highlight}>Описание фотографии</h4>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ExhibitionsList;