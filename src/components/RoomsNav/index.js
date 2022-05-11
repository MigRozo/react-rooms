import React from 'react';

const RoomsNav = props => {
    const { children } = props;

    return (
        <div className="roomsNav">{children}</div>
    );
};

export { RoomsNav };
