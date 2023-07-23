import React, { useEffect, useState } from 'react';

const useInfo = () => {
    const [userInfo, SetUserInfo] = useState();
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        fetch('https://booking-college-server.vercel.app/userInfo')
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