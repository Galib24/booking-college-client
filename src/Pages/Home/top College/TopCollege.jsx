import { data } from 'autoprefixer';
import useData from '../../../hooks/useData';
import { useEffect, useState } from 'react';
import FirstSectionCard from '../../First section Card/FirstSectionCard';

const TopCollege = () => {
    const [allData] = useData();
    console.log(allData);
    const topData = allData?.filter(item => item.ranking >= 5);
    console.log(topData);

    // const [top, setTop] = useState();
    // useEffect(() => {
    //     fetch('topcollege.json')
    //         .then(res => res.json())
    //         .then(data => setTop(data))
    // }, [])
    // console.log(top);
    return (
        <div>
            <h1 className='text-4xl font-bold my-6 text-center'>The Top College By Ranking</h1>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-4 mx-20'>
                {
                    topData?.map(item => <FirstSectionCard

                        key={item.id}
                        item={item}
                    ></FirstSectionCard>)
                }
            </div>
        </div>
    );
};

export default TopCollege;