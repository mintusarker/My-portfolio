import React from 'react';
import { Link } from 'react-router-dom';
import used7 from '../../assets/used7.PNG'
import tourist7 from '../../assets/tourist7.PNG'
import learn7 from '../../assets/learn7.PNG'

const Projects = () => {
    return (
        <div className='my-12'>
            <h1 className='text-3xl font-semibold text-rose-500 text-center'>Projects</h1>
            <div className='gap-10 my-10 px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                <div className="card shadow-xl rounded-none transform transition duration-500 hover:scale-110">
                    <figure><img className='h-52 w-full' src={used7} alt="" /></figure>
                    <div className="card-body shadow-lg shadow-slate-100">
                        <h2 className="card-title text-2xl text-blue-500 mb-4 justify-center">Resell Market</h2>
                        <p> * Use two types of login methods like Email-password-based and Google.</p>
                        <p>* This Site has different pages like Login, Register, products, category, dashboard etc</p>
                        <p>* Create Private Route, Admin Route, Buyer Route, Seller Route, Responsive, Use MongoDB database.</p>
                        <div className="card-actions justify-end">
                            <Link to='/resell'><button className="btn btn-primary btn-outline rounded">Detail</button></Link>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 rounded-none shadow-xl transform transition duration-500 hover:scale-110">
                    <figure><img className='h-52 w-full' src={learn7} alt="Shoes" /></figure>
                    <div className="card-body shadow-lg shadow-slate-100">
                        <h2 className="card-title text-2xl text-blue-500 mb-4 justify-center">Learning Point</h2>
                        <p>* Login Authentication with Google, Email & Password and GitHub.</p>
                        <p>* This project has different pages like Login, Register, Courses, Blogs, FAQ and Details.</p>
                        <p>* Private Route, Responsive, Use MongoDB database.</p>
                        <div className="card-actions justify-end">
                        <Link to='/learning'><button className="btn btn-primary btn-outline rounded">Detail</button></Link>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 rounded-none shadow-xl transform transition duration-500 hover:scale-110">
                    <figure><img className='h-52 w-full' src={tourist7} alt="Shoes" /></figure>
                    <div className="card-body shadow-lg shadow-slate-100">
                        <h2 className="card-title text-2xl text-blue-500 mb-4 justify-center">My Tourist Guide</h2>
                        <p>* Login Authentication with Google, Email & Password.</p>
                        <p>* This Site has different pages like login, register, Review, services etc.</p>
                        <p>* Private Route, MongoDB CRUD operation, Responsive.</p>
                        <div className="card-actions justify-end">
                        <Link to='/tourist'><button className="btn btn-primary btn-outline rounded">Detail</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;