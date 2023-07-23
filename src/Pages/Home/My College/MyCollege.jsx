import React from 'react';
import useInfo from '../../../hooks/useInfo';

const MyCollege = () => {
    const [userInfo] = useInfo();
    console.log(userInfo);
    return (
        <>




            <div className="overflow-x-auto mb-12">
                <h1 className='text-center font-bold text-4xl my-12 mt-28'>Submitted College</h1>
                <table className="table mt-8">
                    {/* head */}
                    <thead className='text-center'>
                        <tr>
                            <th>No</th>
                            <th>Photo</th>
                            <th>Name</th>
                            <th>Selected College Name</th>
                            <th>Email</th>
                            <th>College Details</th>
                        </tr>
                    </thead>
                    <tbody className='text-center'>
                        {
                            userInfo?.map((user, i) => <tr
                                key={user._id}
                                className="bg-base-200">
                                <th>{i + 1}</th>
                                <td>
                                    <div className="text-center">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={user.photo} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>{user.name}</td>
                                <td>{user.CollegeName}</td>
                                <td>{user.email}</td>
                                <td><button>Details</button> </td>
                            </tr>
                            )
                        }


                    </tbody>
                </table>
            </div>


        </>
    );
};

export default MyCollege;