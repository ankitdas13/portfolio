import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { BiLogoGithub } from "react-icons/bi"
import Link from "next/link"
import $ from 'jquery'

export default function Navlink() {

    const handleScroll = (e) => {
        // first prevent the default behavior
        e.preventDefault();
        // get the href and remove everything before the hash (#)
        const href = e.currentTarget.href;
        const targetId = href.replace(/.*\#/, "");
        // get the element by id and use scrollIntoView
        const elem = document.getElementById(targetId);
        
        let target = $(`#${elem.id}`)
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            console.log($target)
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
              return false;
            } else {
              $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            };
          });
        }
      };

    return (
        <>
            <div className='text-white text-2xl'>&lt;<span style={{ color: "#01D293" }}>A</span>nkit.<span style={{ color: "#01D293" }}>D</span>ev/&gt;</div>
            <nav>
                <div className="flex justify-between items-center gap-5">
                    <Link href="#home" className='text-[#808dad] text-lg hover:text-green-400'>Home</Link>
                    <Link scroll={true} href="#project" className='text-[#808dad] text-lg  hover:text-green-400' onClick={handleScroll} >Project</Link>
                    <Link scroll={true} href="#skill" className='text-[#808dad] text-lg  hover:text-green-400' onClick={handleScroll} >Skills</Link>
                    <Link scroll={true} href="#journey" className='text-[#808dad] text-lg  hover:text-green-400' onClick={handleScroll} >Journey</Link>
                    <Link href="#contact" className='text-[#808dad] text-lg  hover:text-green-400' onClick={handleScroll}>Contact</Link>
                </div>
            </nav>
            <div className="social-links flex align-items gap-2" style={{ color: "#808dad" }}>
                <Link href="https://www.linkedin.com/in/ankit1das"><FaLinkedin size={27} style={{ color: "#fff" }} /></Link>
                <Link href="https://www.facebook.com/Ankit10204"><FaFacebookSquare size={27} style={{ color: "#fff" }} /></Link>
                <Link href="https://github.com/ankitdas13"><BiLogoGithub size={27} style={{ color: "#fff" }} /></Link>
            </div>
        </>
    )
}