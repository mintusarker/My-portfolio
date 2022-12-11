import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import used1 from '../../assets/used1.PNG'
import used2 from '../../assets/used2.PNG'
import used3 from '../../assets/used3.PNG'

const ResellDetail = () => {
    return (
        <div className='my-10'>
            <h2 className='text-2xl text-rose-500 my-6'>Detail About Project</h2>
            <h2 className='text-2xl text-center font-semibold text-rose-500 my-6'>Project Name: Resell Market</h2>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                <div>
                    <img className='w-full h-96' src={used1} alt="" />
                    <h4 className='text-center text-rose-500'>Sign Up page</h4>
                </div>
                <div>
                    <img className='w-full h-96' src={used2} alt="" />
                    <h4 className='text-center text-rose-500'>Booking page</h4>
                </div>
                <div>
                    <img className='w-full h-96' src={used3} alt="" />
                    <h4 className='text-center text-rose-500'>Dashboard page</h4>
                </div>
            </div>
            <div className='border rounded border-lime-400 p-8 my-10'>
                <h2 className='text-xl mb-4 text-rose-500 font-semibold'>Project Description :</h2>
                <p className='text-lg'>
                    * This website creates based on reselling product sell service. <br />

                    * This project is also completed by tailwind, daisy UI, react-router, react hot toast, react, etc.<br />

                    * The project was also completed by using the MongoDB database.<br />

                    * This project has different pages like Login, Sign Up, Services, My order, add product etc. <br />

                    * Create Private route, Admin route. <br />

                    * Create some custom hooks like UseAdmin, UseSeller, UseBuyer and useToken. <br />

                    * Use two types of login methods email-password-based and Google. <br />

                    * This project is responsive for mobile and desktop. <br />

                    * Technology: React.js, Node.js, Express.js, Firebase, Stripe, Vercel, Tailwind, Daisy UI, JWT <br />
                </p>
                <div className='flex justify-center items-center mt-10 gap-5'>
                    <div className='flex justify-center items-center text-rose-500 gap-2'><p>Click Here</p><FaArrowRight></FaArrowRight></div>
                    <a href="https://used-products-resell.web.app/"><button className='btn btn-primary'>Live Site Kink</button></a>
                    <a href="https://github.com/mintusarker/used-products-resale-client"><button className='btn btn-primary'>Github Code Client</button></a>
                    <a href="https://github.com/mintusarker/used-products-resale-server"><button className='btn btn-primary'>Github Code Server</button></a>
                </div>
            </div>
        </div>
    );
};

export default ResellDetail;