import React from 'react';
import useReview from '../../hooks/useReview';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Rating } from '@smastrom/react-rating';



import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';


const Review = () => {
    const [allReview] = useReview();
    console.log(allReview);
    return (
        <>
        {/* <h1 className='text-center font-bold text-4xl my-12'>Graduation Picture Gallery</h1> */}
            <Swiper
              cssMode={true}
              navigation={true}
              pagination={true}
              mousewheel={true}
              keyboard={true}
              modules={[Navigation, Pagination, Mousewheel, Keyboard]}
              className="mySwiper"
            >
               {
                    allReview?.map(review => <SwiperSlide
                        key={review._id}
                    >
                        <div className="flex flex-col items-center mx-24 my-24">
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review?.rating}
                                readOnly
                            />
                            <img style={{ borderRadius: '50px 50px 50px 50px', width: '120px' }} src={review.img} alt="" />
                            <h3 className="text-2xl text-green-500 py-8">{review.name}</h3>
                            <p>{review.details}</p>
                        </div>


                    </SwiperSlide>)
                }
            
            </Swiper>
          </>
    );
};

export default Review;