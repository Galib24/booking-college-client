import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ViewDetails = () => {
    const { detailsId } = useParams();
    const details = useLoaderData();
    const [top, setTop] = useState({})
    useEffect(() => {
        if (details) {
            const detailsData = details.find(dt => dt._id === detailsId);
            setTop(detailsData)
        }
    }, []);
    const { id, collegeImage, collegeName, eventsTime1,eventsTime2,eventsTime3,admissionProcess,researchWorks,SportsCategory1,SportsCategory2,SportsCategory3 } = top
    console.log(id);
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-col">
                <img src={collegeImage} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">{collegeName}</h1>
                    <p className="py-6"><strong>Admission Process: </strong> {admissionProcess}</p>
                    <p className="py-6"><strong>First Event: </strong> {eventsTime1}</p>
                    <p className="py-6"><strong>Second Event: </strong> {eventsTime2}</p>
                    <p className="py-6"><strong>Third Event: </strong> {eventsTime3}</p>
                    <p className="py-6"><strong>Research Works: </strong> {researchWorks}</p>
                    <p className="py-6"><strong>First Sport's Category: </strong> {SportsCategory1}</p>
                    <p className="py-6"><strong>Second Sport's Category: </strong> {SportsCategory2}</p>
                    <p className="py-6"><strong>Third Sport's Category: </strong> {SportsCategory3}</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;