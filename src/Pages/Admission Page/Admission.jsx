import React from 'react';
import useData from '../../hooks/useData';
import { useNavigate } from 'react-router-dom';

const Admission = () => {
    const [allData] = useData();
    const navigate = useNavigate();

    return (
        <>
            <h2 className='font-bold text-4xl text-center'>This is Admission Site</h2>

            <div className="overflow-x-auto mt-20 mb-16">
                <table className="table">
                    {/* head */}
                    <thead className="text-center">
                        <tr>
                            <th>
                               No
                            </th>
                            <th>College Name</th>
                            <th>Action</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allData?.map((admission, i)=>    <tr
                            key={admission.id}
                            className="text-center"

                            >
                            <th>
                                {i+1}
                            </th>
                            <td>
                                <div className="text-center">
                                 
                                    <div className=' '>
                                        <div className="font-bold ">{admission.collegeName}</div>
                                    </div>
                                </div>
                            </td>
                            <th>
                                <button onClick={()=>navigate(`/sumbitform/${admission.id}`) } className="btn btn-ghost btn-xs bg-violet-400 text-white">Apply</button>
                            </th>
                        </tr> )
                        }
                     
                    
                     
                    </tbody>
         

                </table>
            </div>
        </>
    );
};

export default Admission;