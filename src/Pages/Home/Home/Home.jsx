import React from 'react';
import Banner from '../Bannaer/Banner';
import TopCollege from '../top College/TopCollege';
import GraduateCollections from '../graduateCollections/GraduateCollections';
import Research from '../Research Section/Research';
import Review from '../../review section/Review';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TopCollege></TopCollege>
            <GraduateCollections></GraduateCollections>
            <Research></Research>
           <Review></Review>
        </div>
    );
};

export default Home;