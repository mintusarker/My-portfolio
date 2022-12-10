import React from 'react';

const ContactMe = () => {

   
    return (
        <div className='mt-10'>
            <h2 className='text-2xl text-center text-rose-600'>Contact With Me</h2>

            <form action='' className='grid grid-cols-1 mx-auto w-1/2'>

                <div className="form-control">
                    <label className="label"><span className="label-text">Your Name</span></label>
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

                <div className='w-full mx-auto grid grid-cols-1'>
                    <textarea name='message' className="textarea textarea-accent my-5" placeholder="Your text put here" required></textarea>
                </div>

                <input className='btn btn-accent my-3 w-full' value='Submit' type="submit" />
            </form>
        </div>
    );
};

export default ContactMe;