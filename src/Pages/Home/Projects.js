import React from 'react';

const Projects = () => {
    return (
        <div>
            <h1 className='text-2xl text-rose-500 text-center'>My Projects</h1>
            <div className='gap-10 my-10 px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                <div className="card bg-base-100 shadow-xl hover:outline">
                    <div className="card-body shadow-lg shadow-slate-100">
                        <h2 className="card-title text-3xl text-orange-500 mb-4 justify-center">Resell Market</h2>
                        <p> * Use two type login system Like Email-password and Google.</p>
                        <p>* This Site has different page like login, register, products, category, dashboard etc.</p>
                        <p>* Private Route, Admin Route, Buyer Route, Seller Route, Responsive, Use MongoDB database.</p>
                        <div className="card-actions justify-end">
                            <a href=""><button className="btn btn-primary btn-outline rounded">Detail</button></a>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl hover:outline">
                    <div className="card-body shadow-lg shadow-slate-100">
                        <h2 className="card-title text-3xl text-orange-500 mb-4 justify-center">Learning Point</h2>
                        <p> * Login Authentication with Google, Email & Password and GitHub.</p>
                        <p>* This project has different pages like Login, Register, Courses, Blogs, FAQ, Details.</p>
                        <p>* Private Route. Responsive, Use MongoDB database </p>
                        <div className="card-actions justify-end">
                            <a href=''><button className="btn btn-primary btn-outline rounded">Detail</button></a>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl hover:outline">
                    <div className="card-body shadow-lg shadow-slate-100">
                        <h2 className="card-title text-3xl text-orange-500 mb-4 justify-center">My Tourist Guide</h2>
                        <p> * Use two type login system Like Email-password and Google.</p>
                        <p>* This Site has different page like login, register, Review, services etc.</p>
                        <p>* Private Route, MongoDB CRUD operation, Responsive.</p>
                        <div className="card-actions justify-end">
                            <a href=""><button className="btn btn-primary btn-outline rounded">Detail</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;