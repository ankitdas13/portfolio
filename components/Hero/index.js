import profile from "@/public/profile.jpg"

export default function Hero() {
    return (
        <>
            <div className="im-content basis-3/5 px-10">
                <h2 className='text-green-400 text-5xl mt-10 font-medium mb-4'>I'm Ankit Das,</h2>
                <p className='text-[#808dad] text-xl'>Greetings! I'm Ankit Das, a skilled Full Stack Engineer with 5 years of experience in designing and developing scalable web applications. My passion for innovation drives me to create solutions that leave a lasting impact.</p>
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