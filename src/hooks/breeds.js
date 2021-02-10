import { useState, useEffect } from 'react';
import { fetchAllBreeds, fetchSingleBreed } from '../services/fetches';

export const useBreeds = () => {
    const [loading, setLoading] = useState(true);
    const [breeds, setBreeds] = useState([]);
    const [page, setPage] = useState(0);

    useEffect(() => {
        fetchAllBreeds(page)
            .then(breeds => {
                setBreeds(breeds);
                setLoading(false);
            });
    }, [page]);


    return {
        loading,
        breeds,
        page,
        setPage
    };
};

export const useSingleBreed = id => {
    const [loading, setLoading] = useState(true);
    const [breed, setBreed] = useState(null);

    useEffect(() => {
        fetchSingleBreed(id)
            .then(breed => {
                setBreed(breed);
                setLoading(false);
            });
    }, [id]);

    return {
        loading,
        breed
    };
};

