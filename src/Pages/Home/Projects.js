import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/img.PNG'
import travel from '../../assets/travel.jpg'
import learn5 from '../../assets/learn5.PNG'

const Projects = () => {
    return (
        <div className='my-12'>
            <h1 className='text-3xl font-semibold text-rose-500 text-center'>Projects</h1>
            <div className='gap-10 my-10 px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                <div className="card shadow-xl transform transition duration-500 hover:scale-110">
                    <figure><img className='h-40 w-full' src={img} alt="" /></figure>
                    <div className="card-body shadow-lg shadow-slate-100">
                        <h2 className="card-title text-3xl text-blue-500 mb-4 justify-center">Resell Market</h2>
                        <p> * Use two type login system Like Email-password and Google.</p>
                        <p>* This Site has different page like login, register, products, category, dashboard etc.</p>
                        <p>* Private Route, Admin Route, Buyer Route, Seller Route, Responsive, Use MongoDB database.</p>
                        <div className="card-actions justify-end">
                            <Link to='/resell'><button className="btn btn-primary btn-outline rounded">Detail</button></Link>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl transform transition duration-500 hover:scale-110">
                    <figure><img className='h-40 w-full' src={learn5} alt="Shoes" /></figure>
                    <div className="card-body shadow-lg shadow-slate-100">
                        <h2 className="card-title text-3xl text-blue-500 mb-4 justify-center">Learning Point</h2>
                        <p> * Login Authentication with Google, Email & Password and GitHub.</p>
                        <p>* This project has different pages like Login, Register, Courses, Blogs, FAQ, Details.</p>
                        <p>* Private Route. Responsive, Use MongoDB database </p>
                        <div className="card-actions justify-end">
                        <Link to='/learning'><button className="btn btn-primary btn-outline rounded">Detail</button></Link>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl transform transition duration-500 hover:scale-110">
                    <figure><img className='h-40 w-full' src={travel} alt="Shoes" /></figure>
                    <div className="card-body shadow-lg shadow-slate-100">
                        <h2 className="card-title text-3xl text-blue-500 mb-4 justify-center">My Tourist Guide</h2>
                        <p> * Use two type login system Like Email-password and Google.</p>
                        <p>* This Site has different page like login, register, Review, services etc.</p>
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