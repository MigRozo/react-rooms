import React from 'react';

const RoomsList = props => {
    const { children } = props;

    return (
        <div className="roomsList">{children}</div>
    );
};

export { RoomsList };
