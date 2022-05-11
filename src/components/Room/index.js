import React from 'react';

const Room = props => {
    const { category, name, description, link, available } = props;

    return (
        <article className="room">
            <div className="container">
                <div className="room_row">
                    <figure className="room_pic">
                        <img src="https://picsum.photos/768/576" alt={name} />
                    </figure>

                    <div className="room_copy">
                        <span className="subtitles">{ category ? category : 'room' }</span>
                        <h2 className="titles">{ name }</h2>

                        {description && (
                            <div className="text">
                                <p>{ description }</p>
                            </div>
                        )}

                        <div className="room_cta">
                            {(link && available) && (
                                <a className="btn" href="#" target="_blank" aria-label="Book now Double King room">Book Now</a>
                            )}

                            {(!link && available) && (
                                <span className="tag">Cooming soon</span>
                            )}

                            {!available && (
                                <span className="tag">No Vacancy</span>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
};

export { Room };
