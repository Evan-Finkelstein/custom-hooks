import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ListItem = ({ name, image, id }) => (
    <Link to={`./breed/${id}`}> <figure >
        <img style={{
            height: '50%',
            width: '50%',
        }} src={image.url} />
        <figcaption>{name}</figcaption>
    </figure></Link>
);

ListItem.propTypes = {
    name: PropTypes.string,
    image: PropTypes.string,
    id: PropTypes.string,
};

export default ListItem;
