export default function Hero() {
    return (
        <>
            <div className="im-content basis-3/5 px-10">
                <h2 className='text-green-400 text-5xl mt-10 font-medium mb-4'>I'm Ankit Das,</h2>
                <p className='text-[#808dad] text-xl'>Greetings! I'm Ankit Das, a skilled Full Stack Engineer with 5 years of experience in designing and developing scalable web applications. My passion for innovation drives me to create solutions that leave a lasting impact.</p>
                <div className="click-sec">
                    <button className="clickme color-gred">My Resume</button>
                </div>
            </div>
            <div className="portfolio-image basis-1/4 block">
                <img src="https://media.licdn.com/dms/image/D4D03AQGmMq1xyqyEZQ/profile-displayphoto-shrink_800_800/0/1663370912277?e=1696464000&v=beta&t=_dWLkuWVH3ZLaGhPjGZYKqtMEgzr4nxexFBRMmUhNEU" alt="Portfolio Image" />
            </div>
        </>
    )
}