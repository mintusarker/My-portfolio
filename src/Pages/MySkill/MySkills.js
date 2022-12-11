import React from 'react';
import './MySkills.css'

const MySkills = () => {
    return (
        <div className='px-9 my-16'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
                <div className='border-solid border-2 border-rose-500 rounded-md m-2 p-4'>
                    <h1 className='text-3xl mb-4 font-semibold'>My Creative Skill</h1>
                    <p className='text-lg'>My creative skill description is here. I am still learning to improve my skills in the web development field. I have a workable knowledge of HTML, CSS, BOOTSTRAP, TAILWIND,  JAVASCRIPT, REACT, REACT-BOOTSTRAP, and NODE.JS. I can make the site responsive for any device.</p>
                </div>
                <div className="right">
                    <div className="line">
                        <div className="info">
                            <span>HTML</span>
                            <span>90%</span>
                        </div>
                        <div className="bars html"></div>
                    </div>

                    <div className="line">
                        <div className="info">
                            <span>CSS</span>
                            <span>70%</span>
                        </div>
                        <div className="bars css"></div>
                    </div>

                    <div className="line">
                        <div className="info">
                            <span>BOOTSTRAP</span>
                            <span>70%</span>
                        </div>
                        <div className="bars boots"></div>
                    </div>

                    <div className="line">
                        <div className="info">
                            <span>TAILWIND</span>
                            <span>80%</span>
                        </div>
                        <div className="bars tail"></div>
                    </div>


                    <div className="line">
                        <div className="info">
                            <span>JAVASCRIPT</span>
                            <span>70%</span>
                        </div>
                        <div className="bars js"></div>
                    </div>

                    <div className="line">
                        <div className="info">
                            <span>REACT.JS</span>
                            <span>80%</span>
                        </div>
                        <div className="bars react"></div>
                    </div>
                    <div className="line">
                        <div className="info">
                            <span>  NODE.JS</span>
                            <span>70%</span>
                        </div>
                        <div className="bars node"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MySkills;