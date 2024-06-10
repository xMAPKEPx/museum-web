// ExhibitionDetail.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {getExhibitionDetails } from "../../../api.auth";

const ExhibitionDetail = () => {
    const { id } = useParams();
    const [exhibition, setExhibition] = useState(null);

    useEffect(() => {
        const fetchExhibitionDetails = async () => {
            try {
                const response = await getExhibitionDetails(id).data
                setExhibition(response);
            } catch (e) {
                console.log('Error: ', e)
            }
        }
        fetchExhibitionDetails();
    }, [id]);

    if (!exhibition) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>{exhibition.title}</h2>
            <p>{exhibition.description}</p>
            <div>
                {exhibition.images.map(image => (
                    <img key={image.id} src={image.url} alt={image.title} />
                ))}
            </div>
        </div>
    );
};

export default ExhibitionDetail;
