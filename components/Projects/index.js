import { ProjectsDetails } from "./projectDetails"

export default function Projects() {
    return (
        <>
            <hr />
            <div className="im-content basis-1/2 px-10">
                <h2 className='text-green-400 text-4xl mt-10 font-bold mb-2'>Project</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 mt-8">
                    {ProjectsDetails.map((Project,key) => (
                        <div key={key} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img className="rounded-t-lg" src={`${Project.img}`} alt="" />
                            </a>
                            <div className="p-5">
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"></h5>
                                </a>
                                <p className="font-normal text-gray-700 dark:text-gray-400">{Project.description}</p>
                               
                            </div>

                            <div className="no-scrollbar m-5 overflow-scroll">
                                {Project.techStack.split(",").map((techStack,key) => (
                                    <span key={key} className="bg-gray-100 text-gray-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300 whitespace-pre">{techStack}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}