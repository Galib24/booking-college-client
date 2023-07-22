import React from 'react';
import useData from '../../../hooks/useData';
import AllCollegesCard from '../AllCollegesCard/AllCollegesCard';

const AllColleges = () => {
    const [allData] = useData();
    return (
        <div>
            <h1 className='text-4xl font-bold my-6 text-center'>All Colleges And Details</h1>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12  lg:ml-20'>
                {
                    allData?.map(items => <AllCollegesCard

                        key={items.id}
                        items={items}
                    ></AllCollegesCard>)
                }
            </div>
        </div>
    );
};

export default AllColleges;