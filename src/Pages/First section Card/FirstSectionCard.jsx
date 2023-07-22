import React from 'react';
import './FirstSectionCard.css'
import { useNavigate } from 'react-router-dom';

const FirstSectionCard = ({ item }) => {
    const navigate = useNavigate();
    const { id, collegeName, admissionDates, collegeImage, events, researchHistory, sports } = item;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img className='img'  style={{borderRadius: '200px 0 200px 0 '}} src={collegeImage} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{collegeName}</h2>
                <p><strong>Last Date for Apply: </strong> {admissionDates}</p>
                <p><strong>Research History: </strong> {researchHistory}</p>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-5'>
                    <span>
                        <p><strong>Events: </strong> </p>
                        {
                            events.map(e => <p>{e}</p>)
                        }
                    </span>

                    <span>
                        <p><strong>sports: </strong> </p>
                        {
                            sports.map(s => <p>{s}</p>)
                        }
                    </span>
                </div>
                <div className="card-actions justify-end mt-5">
                    <button onClick={()=>navigate(`viewDetails/${id}`) } className="btn btn-primary text-white">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default FirstSectionCard;