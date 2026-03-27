import helly from '../assets/Helly.png'
import LinkedIn from '../assets/LinkedIn.svg'
import GitHub from '../assets/GitHub.svg'

const LinkedInHREF = 'https://www.linkedin.com/in/helly-sompura-a94584192/'
const GitHubHREF = 'https://github.com/hellysompura'

export default function Introduction() {
    return (
        <div className="bg-[#FFFFFF] py-5 px-3 w-full lg:w-[80%] rounded-sm flex flex-col justify-center items-center gap-3">
            <img src={helly} alt="Helly" className="w-[80%] h-[80%] bg-(--orange) p-4 rounded-sm" />
            <h1 className="text-2xl font-bold text-(--black) text-center">Hello, I'm Helly Sompura</h1>
            <p className="text-(--soft-gray) text-center">I'm a software developer with a passion for creating beautiful and functional web applications.</p>

            <div className="flex justify-center items-center gap-4">
                <div onClick={() => window.open(LinkedInHREF, '_blank')} className="cursor-pointer">
                    <img src={LinkedIn} alt="LinkedIn" className="w-6 h-6" />
                </div>
                <div onClick={() => window.open(GitHubHREF, '_blank')} className="cursor-pointer">
                    <img src={GitHub} alt="GitHub" className="w-6 h-6" />
                </div>
            </div>
        </div>
    )
}
