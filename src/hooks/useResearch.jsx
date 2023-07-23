import React, { useEffect, useState } from 'react';

const useResearch = () => {
    const [allPaper, SetPaper] = useState();
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        fetch('http://localhost:5000/research')
        .then(res => res.json())
        .then(data => {
            SetPaper(data)
            setLoading(false)
        })
    }, [])
    return [allPaper,loading]
};

export default useResearch;