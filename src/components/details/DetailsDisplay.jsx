import React from 'react';
import PropTypes from 'prop-types';
import { useSingleBreed } from '../../hooks/breeds';
import DetailItem from './DetailItem';
import styles from './Details.css'
import { useTheme } from '../../context/themeContext';


const DetailsDisplay = ({ match }) => {
    const { theme } = useTheme()

    const { loading, breed } = useSingleBreed(match.params.id);
    console.log(breed)
    if (loading) return <div>Loading...</div>;
    return <div className={`${styles[theme]}`}><DetailItem {...breed} /></div>;
};

DetailsDisplay.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            id: PropTypes.string.isRequired
        }).isRequired
    }).isRequired
};

export default DetailsDisplay;






