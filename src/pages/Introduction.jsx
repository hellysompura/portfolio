import helly from '../assets/helly.png'

export default function Introduction() {
    return (
        <div className="bg-[#FFFFFF] py-5 px-3 w-full lg:w-[80%] rounded-sm flex flex-col justify-center items-center gap-3">
            <img src={helly} alt="Helly" className="w-[80%] h-[80%] bg-(--orange) p-4 rounded-sm" />
            <h1 className="text-2xl font-bold text-(--black) text-center">Hello, I'm Helly Sompura</h1>
            <p className="text-(--soft-gray) text-center">I'm a software developer with a passion for creating beautiful and functional web applications.</p>
        </div>
    )
}
