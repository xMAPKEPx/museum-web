import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "./CollectionsList.module.scss";

const CollectionsList = ({ collections }) => {
    const navigate = useNavigate();
    return (
        <div className={styles.grid}>
            {collections.map((item, index) => (
                <div className={styles.item} key={index} onClick={() => navigate(`collections/${item.id}/`)}>
                    <img
                        className={styles.image2}
                        src={item.image_url}
                        alt={`Коллекция пользователя`}
                    />
                    <h4 className={styles.highlight}>{item.description}</h4>
                </div>
            ))}
        </div>
    );
};

export default CollectionsList;
