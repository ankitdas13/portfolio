import { Skills } from "./skills"

export default function Technologies() {
    return (
        <>
            <hr />
            <div className="im-content basis-1/2 px-10 pb-5">
                <h2 className='text-green-400 text-4xl mt-10 font-bold mb-2'>Skills</h2>
                <p className='text-[#808dad] text-xl'>I have extensive experience working with a variety of technologies as a developer. I've developed and maintained multiple projects using these technologies, and I'm always eager to learn more.</p>
                <div className="grid grid-cols-1 md:grid-cols-3 mt-8 gap-10">
                    {Skills.map((Skill, key) => (
                        <div>
                            <div key={key} className="mt-5 mt-16 flex flex-row bg-white border border-gray-200 rounded-t-lg shadow dark:bg-gray-800 dark:border-gray-700 px-2 pt-5 h-full">
                                <div className='mb-10'><Skill.Component size={38} /></div>
                                <div>
                                    <div className='text-3xl font-bold px-4 mb-3'>{Skill.slug.toLocaleUpperCase()}</div>
                                    <div className='text-base px-4'>
                                        <p>{Skill.Description}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-slate-900 w-full h-1 rounded-b-lg relative" style={{ 'borderRadius': '0 0 0 25px;', 'top': '-3px' }}>
                                <div className="bg-green-400 h-1" style={{ 'width': `${Skill.proficiency}`, 'borderRadius': '0 0 0 25px' }}></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}