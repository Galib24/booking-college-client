import React from 'react';
import loginImg from '../../../src/assets/login_anime_up.png'
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';


const SignUp = () => {
    const { register, handleSubmit, watch,reset, formState: { errors } } = useForm();
  const onSubmit = data =>{
    console.log(data);
  }
  console.log(watch('example'));
    return (
        <>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col md:flex-row mt-28 mb-10 ">
                    <div className="">
                        <img style={{ borderRadius: '400px 400px 0 0' }} className='w-1/2 rounded-2xl' src={loginImg} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onsubmit)} className="card-body">
                            <h1 className="text-3xl text-center font-extrabold">Sign up now!</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} placeholder="name" className="input input-bordered" />
                                {errors.name && <p className="text-red-600">Name  is required</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type='password' placeholder="password" name='password' className="input input-bordered" />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input type="email" name='photo' placeholder="URl" className="input input-bordered" />
                            </div>
                            {/* {
                                error ? <p className='text-red-500'>Password or User Email not Matched</p> : ''
                            } */}
                            <div className="form-control mt-6">

                                <input className="btn btn-primary" type="submit" value="Sign Up" />
                            </div>
                        </form>
                        <p className='text-center mb-5'><small>Already have an account? Click here  <Link to={'/login'}>login</Link></small></p>
                        {/* <SocialLogin></SocialLogin> */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;