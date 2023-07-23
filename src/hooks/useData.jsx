import React, { useEffect, useState } from 'react';

const useData = () => {
    const [allData, SetAllData] = useState();
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        fetch('http://localhost:5000/collegeData')
        .then(res => res.json())
        .then(data => {
            SetAllData(data)
            setLoading(false)
        })
    }, [])
// console.log(allData);
    return [allData,loading]
};

export default useData;