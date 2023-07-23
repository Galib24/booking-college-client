import React from 'react';
import Swal from 'sweetalert2';

const UserReviews = () => {
    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;

        const name = form.name.value;
        const rating = form.rating.value;
        const details = form.details.value;

        const reviews = {name,rating, details};
        console.log(reviews);

         // send data to server
         fetch('https://booking-college-server.vercel.app/reviews',{
            method:'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviews)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Reviews Submit successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
            console.log(data);
        })

   
    }
    return (
        <div className="bg-[#F4F3F0] p-24">
        <h1 className="text-3xl font-extrabold text-center mt-8">Review Section</h1>
        <form onSubmit={handleSubmit}>
            {/* form name and quantity  row */}
            <div className="md:flex mb-8">
               
                
            </div>
            {/* form supplier row */}
            
            {/* form category and details row */}
            <div className="md:flex mb-8">
             
             
            </div>
            {/* form photo URL row */}
            <div className="mb-8">
                <div className="form-control  w-full">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <label className="input-group">

                        <input type="text" name="name" placeholder='name' className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control  w-full">
                    <label className="label">
                        <span className="label-text">Given Rating</span>
                    </label>
                    <label className="input-group">

                        <input type="number" name="rating" placeholder='rating' className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            <div className="mb-8">
                <div className="form-control  w-full">
                    <label className="label">
                        <span className="label-text">Comment Line</span>
                    </label>
                    <label className="input-group">

                        <textarea type="text" name="details" placeholder="comment" className="textarea input-bordered w-full" />
                    </label>
                </div>
            </div>
            <input type="submit" value='Submit' className="btn btn-block bg-violet-400 text-white" />
        </form>
    </div>
    );
};

export default UserReviews;