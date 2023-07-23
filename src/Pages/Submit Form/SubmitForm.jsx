import React from 'react';
import Swal from 'sweetalert2';


const SubmitForm = () => {
    const handleSubmit = e => {
      
        
        e.preventDefault();

        const form = e.target;

        const name = form.name.value;
        const subject = form.subject.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const address = form.address.value;
        const birth = form.birth.value;
        const CollegeName = form.CollegeName.value;
        const photo = form.photo.value;

        const formate = { name, subject, email, phone, address, birth, photo,CollegeName }
        console.log(formate);

        // send data to server
        fetch('http://localhost:5000/userInfo',{
            method:'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(formate)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Request Submit successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
            console.log(data);
        })

    }
    return (
        <div className="bg-[#F4F3F0] p-24">
            <h1 className="text-3xl font-extrabold text-center mt-8">Candidate Information</h1>
            <form onSubmit={handleSubmit}>
                {/* form name and quantity  row */}
                <div className="md:flex mb-8">
                    <div className="form-control md: w-1/2">
                        <label className="label">
                            <span className="label-text">Candidate Name</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="name" placeholder="Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Candidate Subject</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="subject" placeholder="Subject" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form supplier row */}
                <div className="md:flex mb-8">
                    <div className="form-control md: w-1/2">
                        <label className="label">
                            <span className="label-text">Candidate Email</span>
                        </label>
                        <label className="input-group">

                            <input type="email" name="email" placeholder="Email" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Candidate Phone No</span>
                        </label>
                        <label className="input-group">

                            <input type="number" name="phone" placeholder="phone No" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form category and details row */}
                <div className="md:flex mb-8">
                    <div className="form-control md: w-1/2">
                        <label className="label">
                            <span className="label-text">Candidate Address</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="address" placeholder="Address" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Candidate Birth of Date</span>
                        </label>
                        <label className="input-group">

                            <input type="date" name="birth" placeholder="Birth Date" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form photo URL row */}
                <div className="mb-8">
                    <div className="form-control  w-full">
                        <label className="label">
                            <span className="label-text">Selected College Name</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="CollegeName" placeholder='College Name' className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="mb-8">
                    <div className="form-control  w-full">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <input type="submit" value='Submit' className="btn btn-block bg-violet-400 text-white" />
            </form>
        </div>
    );
};

export default SubmitForm;