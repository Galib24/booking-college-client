import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';


const AllDetails = () => {
    const { collegeID } = useParams();
    const detail = useLoaderData();
    const [data, setData] = useState({});
    useEffect(() => {
        if (detail) {
            const detailsData = detail.find(dt => dt._id == collegeID);
            setData(detailsData)
        }
    }, []);
    // const { id, collegeImage, collegeName, eventsTime1,eventsTime2,eventsTime3,admissionProcess,researchWorks,SportsCategory1,SportsCategory2,SportsCategory3 } = data
    console.log(data);
    return (
        <div>
            <h2>this is all details</h2>
        </div>
    );
};

export default AllDetails;