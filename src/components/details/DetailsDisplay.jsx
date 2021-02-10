import React from 'react';
import PropTypes from 'prop-types';
import { useSingleBreed } from '../../hooks/breeds';
import DetailItem from './DetailItem';

const DetailsDisplay = ({ match }) => {
    const { loading, breed } = useSingleBreed(match.params.id);
    console.log(breed)
    if (loading) return <div>Loading...</div>;
    return <DetailItem {...breed} />;
};

DetailsDisplay.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            id: PropTypes.string.isRequired
        }).isRequired
    }).isRequired
};

export default DetailsDisplay;






