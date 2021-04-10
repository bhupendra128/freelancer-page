import React from 'react';
import './modal.scss';

const Modal = (props) => {
    return (
        <div className={`modal-wrapper ${props.className || ''}`}>
        <div className="modal">
        <div className="separator" />
            {props.children}
        </div>
        </div>
    );
};

export default Modal;