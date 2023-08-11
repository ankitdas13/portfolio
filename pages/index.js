import Image from 'next/image'
import { Quicksand } from 'next/font/google'
import { FaFacebookSquare, FaLinkedin, FaNodeJs } from "react-icons/fa";
import { SiGit, SiDart, SiCss3, SiMysql, SiAmazonaws, SiTsnode, SiPostgresql, SiMongodb } from "react-icons/si";
import { DiHtml5, DiReact, DiJqueryLogo } from "react-icons/di";
import { BiLogoPostgresql, BiLogoPhp, BiLogoJavascript, BiLogoGithub, BiSolidMoon } from "react-icons/bi"
import { useState } from "react"
import { Skills } from '@/components/Technologies/skills';
import  Technologies  from '../components/Technologies';

const inter = Quicksand({ subsets: ['latin'], display: 'swap' })
const Skill = {
  Component: BiLogoPhp
}

export default function Home() {
  return (
    <main className={`${inter.className}`}>
      <div className="container mx-auto mt-5">
        <header>
          <div className='text-white text-2xl'>&lt;<span style={{ color: "#01D293" }}>A</span>nkit.<span style={{ color: "#01D293" }}>D</span>ev/&gt;</div>
          <nav>
            <div className="flex justify-between items-center gap-10">
              <a href="#home" className='text-[#808dad] text-lg hover:text-green-400'>Home</a>
              <a href="#about" className='text-[#808dad] text-lg  hover:text-green-400'>Project</a>
              <a href="#portfolio" className='text-[#808dad] text-lg  hover:text-green-400'>Skills</a>
              <a href="#contact" className='text-[#808dad] text-lg  hover:text-green-400'>Contact</a>
            </div>
          </nav>
          <div className="social-links flex align-items gap-2" style={{ color: "#808dad" }}>
            <a href="https://www.linkedin.com/"><FaLinkedin size={27} style={{ color: "#fff" }} /></a>
            <a href="https://www.facebook.com/"><FaFacebookSquare size={27} style={{ color: "#fff" }} /></a>
            <a href="https://www.facebook.com/"><BiLogoGithub size={27} style={{ color: "#fff" }} /></a>
            {/* <a><BiSolidMoon size={25}/></a> */}
          </div>
        </header>
        <section className="im-section flex flex-wrap justify-between mt-20">
          <div className="im-content basis-1/2 px-10">
            <h2 className='text-green-400 text-5xl mt-10 font-medium mb-4'>I'm Ankit Das,</h2>
            <p className='text-[#808dad] text-xl'>Greetings! I'm Ankit Das, a skilled Full Stack Engineer with 5 years of experience in designing and developing scalable web applications. My passion for innovation drives me to create solutions that leave a lasting impact.</p>
            <div className="click-sec">
              <button className="clickme color-gred">My Resume</button>
            </div>
          </div>
          <div className="portfolio-image basis-1/4 block">
            <img src="https://media.licdn.com/dms/image/D4D03AQGmMq1xyqyEZQ/profile-displayphoto-shrink_800_800/0/1663370912277?e=1696464000&v=beta&t=_dWLkuWVH3ZLaGhPjGZYKqtMEgzr4nxexFBRMmUhNEU" alt="Portfolio Image" />
          </div>
        </section>
        <section className="im-section mt-20">
          <hr />
          <Technologies/>
        </section> 
        <footer className='px-5 pt-20'>
          <div class="footer-content flex gap-4">
            <div class="contact-info">
              <h3 className='text-2xl font-bold text-center mb-4'>CHAT</h3>
              <p className='text-[#808CAD] text-lg'>Telegram</p>
            </div>
            <div class="contact-info">
              <h3 className='text-2xl font-bold text-center mb-4'>EMAIL</h3>
              <p className='text-[#808CAD] text-lg'>ankitdas10204@gmail.com</p>
            </div>
          </div>
          <div class="copyright m-10">
            <p className="text-[#808CAD] text-lg text-center">Copyright &copy; Developed by Ankit Das. All right reserved.</p>
          </div>
        </footer>
      </div>
    </main>
  )
}
