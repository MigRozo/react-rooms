import React from 'react';

const RoomsNavItem = props => {
    const { value, label, currentCategory, setCurrentCategory } = props;

    return (
        <button
            className="roomsNav_item"
            disabled={ currentCategory === value }
            onClick={ () => setCurrentCategory(value) }
        >
            { label ? label : value }
        </button>
    );
};

export { RoomsNavItem };
