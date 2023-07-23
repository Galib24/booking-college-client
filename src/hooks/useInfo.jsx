import React, { useEffect, useState } from 'react';

const useInfo = () => {
    const [userInfo, SetUserInfo] = useState();
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        fetch('http://localhost:5000/userInfo')
        .then(res => res.json())
        .then(data => {
            SetUserInfo(data)
            setLoading(false)
        })
    }, [])
// console.log(allData);
    return [userInfo,loading]
};

export default useInfo;