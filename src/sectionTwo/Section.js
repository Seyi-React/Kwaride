import React from "react";
import {AiOutlineRight} from 'react-icons/ai'



const SectionII = () => {

    return <>
        <div className="container">
           <div className="world-class">
            <section>
                <h3>World class<br /> customer experience</h3>
                <p>We prioritize making our clients feel at <br />ease,thereby giving nothing but the best </p>
                <span>Start a wonderful experience <AiOutlineRight className="arrow" /></span>
            </section>
           </div>
           <div className="professional">
            <section>
                <h3>Professional and certified <br /> drivers</h3>
                <p>Prioritizing the security of our clients <br/> we hire qualified drivers only </p>
                <span>become a driver <AiOutlineRight className="arrow"/></span>
            </section>
           </div>
           <div className="affordable">
            <section>
                <h3>Affordable transport <br/> charges</h3>
                <p>We consider the well-being of our clients,<br />making our charges as affordable </p>
                <span>begin an economy-friendly ride <AiOutlineRight className="arrow" /></span>
            </section>
           </div>
           <div className="tour">
            <section>
                <h3>More like a tour</h3>
                <p>We provide a reliable transport system which <br /> help our clients like they are on a tour </p>
                <span>begin a ride like a tour <AiOutlineRight className="arrow" /></span>
            </section>
           </div>

        </div>
        <div className="enjoy">
            <h3>Enjoy a ride to success</h3>
           </div>
    </>
}

export default SectionII;