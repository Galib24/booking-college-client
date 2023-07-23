import React, { useEffect, useState } from 'react';

const useReview = () => {
    const [allReview, SetReview] = useState();
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        fetch('https://booking-college-server.vercel.app/reviews')
        .then(res => res.json())
        .then(data => {
            SetReview(data)
            setLoading(false)
        })
    }, [])
    return [allReview,loading]
};


export default useReview;