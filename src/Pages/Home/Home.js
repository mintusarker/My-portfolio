import React from 'react';
import ContactMe from '../ContactMe/ContactMe';
import MySkills from '../MySkill/MySkills';
import Banner from './Banner';
import Projects from './Projects';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <MySkills></MySkills>
            <Projects></Projects>
            {/* <ContactMe></ContactMe> */}
        </div>
    );
};

export default Home;