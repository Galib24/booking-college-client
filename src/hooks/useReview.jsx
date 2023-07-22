import React, { useEffect, useState } from 'react';

const useReview = () => {
    const [allReview, SetReview] = useState();
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        fetch('review.json')
        .then(res => res.json())
        .then(data => {
            SetReview(data)
            setLoading(false)
        })
    }, [])
    return [allReview,loading]
};


export default useReview;