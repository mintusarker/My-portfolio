import React from 'react';
import './AboutMe.css'
import night from '../../assets/night.jpg'

const AboutMe = () => {
    return (
        <div className='about'>
            <div className='grid grid-cols-1 md:grid-cols-1 gap-10 lg:grid-cols-2 p-8 justify-center items-center'>
                <img className='' src={night} alt="" />
                <div className="about-text">
                    <h1>About Me</h1>
                    <h5>Web Developer</h5>
                    <p>I am a Web Developer. I am dedicated and passionate about MERN stack web development. I am always searching for new technology to enrich & explore my knowledge. I have workable knowledge in the web development sector like Frontend, Backend, and MERN stack. I have taken several professional pieces of training on JavaScript, react.js and node.js to overcome any challenge in the developer world. I have professional knowledge of HTML, CSS, Bootstrap, Tailwind, Javascript, React, React-bootstrap and node.js. I can make the site responsive for any device. A responsive design makes your website accessible to all users, regardless of their device.</p>
                    {/* <a href="https://form.jotform.com/223432902621447"><button className='button' type='button'>Let's Talk</button></a> */}

                </div>

            </div>
        </div>
    );
};

export default AboutMe;