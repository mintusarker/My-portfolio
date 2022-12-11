import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import tourist1 from '../../assets/tourist1.PNG'
import tourist2 from '../../assets/tourist2.PNG'
import tourist3 from '../../assets/tourist3.PNG'

const TouristDetail = () => {
    return (
        <div className='my-10'>
            <h2 className='text-2xl text-rose-500 my-6'>Detail About Project</h2>
            <h2 className='text-2xl text-center font-semibold text-rose-500 my-6'>Project Name: My Tourist Guide</h2>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                <div>
                    <img className='w-full h-96' src={tourist2} alt="" />
                    <h4 className='text-center text-rose-500'>Login page</h4>
                </div>
                <div>
                    <img className='w-full h-96' src={tourist1} alt="" />
                    <h4 className='text-center text-rose-500'>Detail page</h4>
                </div>
                <div>
                    <img className='w-full h-96' src={tourist3} alt="" />
                    <h4 className='text-center text-rose-500'>Services page</h4>
                </div>
            </div>
            <div className='border rounded border-lime-400 p-8 my-10'>
                <h2 className='text-xl mb-4 text-rose-500 font-semibold'>Project Description :</h2>
                <p className='text-lg'>

                    * This website create base on personal tourist guide service. <br />

                    * This projects are also completed by tailwind, daisy ui, react router, react hot toast, vanilla Css, react etc. <br />

                    * The projects also completed by using mongodb database which is special. <br />

                    * This project has different pages like login, Sign Up, Services, review details etc. <br />

                    * Using two types of login method like email-password based and with Google. <br />

                    * This project responsive for mobile and desktop. <br />

                    * Create Private route <br />

                    * Technology: React.js, Node.js, Express.js, Firebase, Tailwind, Daisy UI, React hot toast.
                </p>
                <div className='flex justify-center items-center mt-10 gap-5'>
                    <div className='flex justify-center items-center text-rose-500 gap-2'><p>Click Here</p><FaArrowRight></FaArrowRight></div>
                    <a href="https://tourist-guide-61781.web.app/"><button className='btn btn-primary'>Live Site Kink</button></a>
                    <a href="https://github.com/mintusarker/my-tourist-guide-client"><button className='btn btn-primary'>Github Code Client</button></a>
                    <a href="https://github.com/mintusarker/my-tourist-guide-server"><button className='btn btn-primary'>Github Code Server</button></a>
                </div>
            </div>
        </div>
    );
};

export default TouristDetail;