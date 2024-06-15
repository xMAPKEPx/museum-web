import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {getCollectionDetails} from "../../../api.auth";
import styles from "./CollectionCard.module.css";
import NavBar from "../../NavigationBar/NavBar";
import Footer from "../../Footer/Footer";

const CollectionCard = () => {
    const { id } = useParams();
    const [collection, setCollection] = useState(null);

    useEffect(() => {
        const fetchCollection = async () => {
            try {
                const response = await getCollectionDetails(id)
                setCollection(response.data[0]);
                console.log(response.data[0])
            } catch (e) {
                console.log('Error fetching collection details: ', e)
            }
        }
        fetchCollection()
    }, [id]);

    if (!collection) {
        return <div>Loading...</div>;
    }

    return <>
        <NavBar />
        <div className={styles.main}>
            <br/><br/>
            <h2>{collection.name}</h2>
            <p>{collection.description}</p>
            <div>
                <img src={collection.image_url} alt={collection.description} />
            </div>
        </div>
        <Footer />
    </>
};

export default CollectionCard;
