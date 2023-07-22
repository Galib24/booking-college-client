import React from 'react';

const FirstSectionCard = ({ item }) => {
    const { id, collegeName,admissionDates,collegeImage } = item;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={collegeImage} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{collegeName}</h2>
                <p>{admissionDates}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default FirstSectionCard;