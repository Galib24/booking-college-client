import React, { useEffect, useState } from 'react';

const useResearch = () => {
    const [allPaper, SetPaper] = useState();
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        fetch('research.json')
        .then(res => res.json())
        .then(data => {
            SetPaper(data)
            setLoading(false)
        })
    }, [])
    return [allPaper,loading]
};

export default useResearch;