import { journeyDetails } from "./journeyDetails"

export default function Journey() {
    return (
        <>
            <hr />
            <div className="im-content basis-1/2 px-10">
                <h2 className='text-green-400 text-4xl mt-10 font-bold mb-2'>Journey</h2>
                <p className='text-[#808dad] text-xl'>Throughout my journey, I've gained a wealth of knowledge and experience in both development and life in general. I’m always eager to learn more and take on new challenges,</p>

                <div>
                    <ul className="timeline grid grid-cols-[13.2%_13.2%_13.2%_13.2%_13.2%_13.2%_13.2%] mt-8 gap-3">
                        {journeyDetails.map((detail,key) => (
                            <li key={key} className="timeline-item block relative">
                                <div className='text-2xl font-bold'>{detail.year}</div>
                                <div className='text-sm'>
                                    {detail.description}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </>
    )
}