import React, { useState } from 'react';

const RateMovieButton = () => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState (0);

    return (
        <div>
            {[...Array(5)].map((star,index) => {
                index +=1;
                return (
                    <button
                    type="button"
                    key={index}
                    className={index <= (hover || rating) ? "on" : "off"}
                    onClick={() => setRating(index)}
                    onMouseEnter={() => setHover(index)}
                    onMouseLeave={() => setHover(rating)}
                    >
                        <span className="star">&#9733;</span>
                    </button>
                );
            })}
            <p>Rating : {rating}</p>
        </div>
    );
};

export default RateMovieButton;