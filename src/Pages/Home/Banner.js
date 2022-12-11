import React from 'react';
import Typical from 'react-typical';
import image2 from '../../assets/image2.jpeg'

const Banner = () => {

    const steps = [
        "Web Developer",
        2000,
        "Frontend Developer",
        2000,
        "Backend Developer",
        2000,
        "MERN Stack Developer",
        2000,
    ];
    return (
        <div className="my-10" style={{ background: '' }}>
            <div className="hero-content flex-col lg:flex-row">
                <div className='text-center w-1/2'>
                    <h4 className="text-xl mb-3 text-rose-500 font-semibold">Hello, I am Minto<br />Web Developer</h4>
                    <div className='text-2xl my-5'>
                        <Typical wrapper="span" steps={steps} loop={Infinity} />
                    </div>
                    <a href="Resume.pdf" download='Resume.pdf'><button className='btn btn-primary rounded'>Download Resume</button></a>
                </div>
                <img src={image2} alt='' className="lg:w-1/2 rounded-lg shadow-2xl" />
            </div>
        </div>
    );
};

export default Banner;