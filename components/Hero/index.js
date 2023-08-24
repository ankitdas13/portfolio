import profile from "@/public/profile.jpg"
import { useEffect } from "react";
import Typewriter from 'typewriter-effect/dist/core';

export default function Hero() {
     useEffect(()=>{
        var app = document.getElementById('hero-name');
        var typewriter = new Typewriter(app, {
            loop: true,
            delay: 75,
        });

        typewriter
        .pauseFor(1500)
        .typeString('Ankit Das')
        .pauseFor(3500)
        .deleteChars(15)
        .typeString("<span style='color:#00e7a0;'>a</span> FullStack Developer")
        .pauseFor(5000)
        .start(); 
     })
    return (
        <>
            <div className="im-content basis-3/5 px-10">
                <h2 className='text-green-400 text-3xl mt-10 font-medium'>Hello there,</h2>
                <h1 className='text-green-400 text-4xl font-medium mb-4 font-extrabold'>I'm <span className="text-white" id="hero-name"></span></h1>
                <p className='text-[#808dad] text-xl'>I'm Ankit Das, a skilled Full Stack Developer with 5 years of experience in developing scalable web applications. My passion for innovation drives me to create solutions that leave a lasting impact.</p>
                
               
                <div className="click-sec">
                    <button className="clickme color-gred"  onClick={(e) => {e.preventDefault(); window.location.href = '/files/resume.pdf';}}>
                        Download CV
                    </button>
                </div>
            </div>
            <div className="portfolio-image basis-1/4 block">
                <img src={profile.src} alt="Portfolio Image" />
            </div>
        </>
    )
}