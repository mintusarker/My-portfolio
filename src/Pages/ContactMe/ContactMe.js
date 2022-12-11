import React from 'react';

const ContactMe = () => {


    return (
        <div className='my-10'>
            <h2 className='text-2xl text-center text-rose-600'>Contact With Me</h2>
            <div className='grid lg:grid-cols-2 sm:grid-cols-1'>
                <div>

                </div>
                <div>
                    <form className=''>

                        <div className="form-control">
                            <label className="label"><span className="label-text">Your Name <span className='text-red-500'>*</span></span></label>
                            <input name='name' type="text" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label"><span className="label-text">Your Email</span></label>
                            <input name='email' type="email" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label"><span className="label-text">Phone Number</span></label>
                            <input name='number' type="text" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">About your project</span>
                            </label>
                            <textarea className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                        </div>

                        <input className='btn my-3 w-full' value='Submit' type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactMe;