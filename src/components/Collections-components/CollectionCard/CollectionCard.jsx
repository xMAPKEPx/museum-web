import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {getCollectionDetails} from "../../../api.auth";

const CollectionCard = () => {
    const { id } = useParams();
    const [collection, setCollection] = useState(null);

    useEffect(() => {
        const fetchCollection = async () => {
            try {
                const response = await getCollectionDetails(id)
                setCollection(response.data);
            } catch (e) {
                console.log('Error fetching collection details: ', e)
            }
        }
        fetchCollection()
    }, [id]);

    if (!collection) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>{collection.name}</h2>
            {/*<p>{collection.description}</p>*/}
            <div>
                <img src={collection.image_url} alt={collection.description} />
            </div>
        </div>
    );
};

export default CollectionCard;
