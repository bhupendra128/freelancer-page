import React from 'react';
import './image.scss';

const Image = ({image}) => {
    return (
        <img src={image.src} alt={image.alt || 'alt'} className={`image ${image.className}`} />
    );
};

export default Image;