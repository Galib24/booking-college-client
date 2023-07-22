import React from 'react';
import './GraduateCollections.css'
const GraduateCollections = () => {
    return (
        <>
        <h1 className='text-center font-bold text-4xl my-12'>Graduation Picture Gallery</h1>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-16 mx-24 '>
                <img className='img' style={{width: '500px', borderRadius: '100px 0 100px 0'}} src="https://media.istockphoto.com/id/1359164204/photo/cropped-portrait-of-two-attractive-young-female-students-celebrating-on-graduation-day.jpg?s=2048x2048&w=is&k=20&c=n-JKvvqbptjiid9tS35lbqOW7DDv6oHXYUeGXJh_eno=" alt="" />

                <img className='img' style={{width: '400px', borderRadius: '90px 0 90px 0'}} src="https://media.istockphoto.com/id/1307597085/photo/successful-five-students-with-congratulations-together-throwing-graduation-hats-in-the-air.jpg?s=2048x2048&w=is&k=20&c=B4C3s5di3FlBUMG67zbUZFdXh_KkIE2xNCKjUG19vt4=" alt="" />

                <img className='img' style={{width: '300px', borderRadius: '80px 0 80px 0'}} src="https://media.istockphoto.com/id/948575716/photo/a-group-of-graduates-celebrating.jpg?s=2048x2048&w=is&k=20&c=JPX68rREYd6J-Uwqir10kJLv1BrECSles8vOttonBno=" alt="" />
               
                <img className='img' style={{width: '260px',borderRadius: '70px 0 70px 0'}} src="https://media.istockphoto.com/id/1307600439/photo/successful-excited-five-graduates-in-robes-standing-in-row-and-showing-certificate.jpg?s=2048x2048&w=is&k=20&c=vYc5MNLzX75UXTHSuKyzG-Hn9vvF1FR4DgAQnxj65FQ=" alt="" />

                {/* <img style={{width: '200px'}} src="https://media.istockphoto.com/id/1159565458/photo/it-takes-hard-work-and-dedication-to-get-here.jpg?s=2048x2048&w=is&k=20&c=09D8Ng_iCvse9C5r2OSMJpx3NalfqQx-_wGl-64D3Po=" alt="" /> */}
            </div>
        </>
    );
};

export default GraduateCollections;