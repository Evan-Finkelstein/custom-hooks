import React from 'react';
import PropTypes from 'prop-types';

const DetailItem = ({ name, image, temperament, bred_for, }) => (
    <figure >
        <img style={{
            height: '50%',
            width: '50%',
        }} src={image} />
        <figcaption>{name}</figcaption>
        <figcaption>Temperament: {temperament}</figcaption>
        {/* <figcaption>Origin:{origin}</figcaption> */}
        <figcaption>Bred For:{bred_for}</figcaption>

    </figure>
);

DetailItem.propTypes = {
    name: PropTypes.string,
    url: PropTypes.string,
};

export default DetailItem;
