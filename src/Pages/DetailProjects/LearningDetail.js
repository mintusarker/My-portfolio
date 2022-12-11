import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import learn1 from '../../assets/learn1.PNG'
import learn2 from '../../assets/learn2.PNG'
import learn3 from '../../assets/learn3.PNG'

const LearningDetail = () => {
    return (
        <div className='my-10'>
            <h2 className='text-2xl text-rose-500 my-6'>Detail About Project</h2>
            <h2 className='text-2xl text-center font-semibold text-rose-500 my-6'>Project Name: Learning Point</h2>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                <div>
                    <img className='w-full h-96' src={learn1} alt="" />
                    <h4 className='text-center text-rose-500'>Login page</h4>
                </div>
                <div>
                    <img className='w-full h-96' src={learn2} alt="" />
                    <h4 className='text-center text-rose-500'>Courses page</h4>
                </div>
                <div>
                    <img className='w-full h-96' src={learn3} alt="" />
                    <h4 className='text-center text-rose-500'>Detail page</h4>
                </div>
            </div>
            <div className='border rounded border-lime-400 p-8 my-10'>
                <h2 className='text-xl mb-4 text-rose-500 font-semibold'>Project Description :</h2>
                <p className='text-lg'>
                    * Use three types of login methods email-password-based, Google, with Github. <br />
                    * This site is a learning programming website.  <br />
                    * This Project contains blogs and FAQ pages. <br />
                    * This project is also completed by bootstrap, react-bootstrap, react-router, react icon, vanilla CSS, and react. <br />
                    * This project has different pages like login, register, courses, details, etc <br />
                    * This project is responsive for mobile and desktop. <br />
                    * The project was completed by using the MongoDB database.<br />

                    * Technology: React.js, Node.js, Express.js, Firebase, Bootstraps, React Bootstrap. <br />

                </p>
                <div className='flex justify-center items-center mt-10 gap-5'>
                    <div className='flex justify-center items-center text-rose-500 gap-2'><p>Click Here</p><FaArrowRight></FaArrowRight></div>
                    <a href=" https://learning-platform-b21f0.web.app/"><button className='btn btn-primary'>Live Site Kink</button></a>
                    <a href="https://github.com/mintusarker/learning-platform-side-client"><button className='btn btn-primary'>Github Code Client</button></a>
                    <a href="https://github.com/mintusarker/learning-platform-side-server"><button className='btn btn-primary'>Github Code Server</button></a>
                </div>
            </div>
        </div>
    );
};

export default LearningDetail;