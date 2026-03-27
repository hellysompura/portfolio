import React from 'react'

export default function AboutMe() {
    return (
        <React.Fragment>
            <div id='aboutMe'>
                <h1 className='lg:text-[90px] md:text-[70px] text-[50px] font-bold uppercase tracking-wider leading-none'>Full Stack</h1>
                <h1 className='lg:text-[90px] md:text-[70px] text-[50px] text-(--gray-20) font-bold uppercase tracking-wider leading-none'>Developer</h1>
            </div>

            <div>
                <p className='lg:text-base text-sm text-(--gray-70)'>Passionate developer with a strong foundation in computer science and hands-on experience in software development. Skilled in building scalable web applications using modern technologies like React, Node.js, and Express. Committed to writing clean, efficient code and continuously learning new technologies to stay at the forefront of the ever-evolving tech industry.</p>
            </div>

            {/* <div className='flex gap-6'>
                <div className='flex flex-col gap-2 justify-between items-center'>
                    <h2 className='lg:text-[40px] text-[30px] font-bold'>5+</h2>
                    <p className='text-sm uppercase'>Years of <br />Experience</p>
                </div>
                <div className='flex flex-col gap-2 justify-between items-center'>
                    <h2 className='lg:text-[40px] text-[30px] font-bold'>1+</h2>
                    <p className='text-sm uppercase'>Clients worked <br />With</p>
                </div>
                <div className='flex flex-col gap-2 justify-between items-center'>
                    <h2 className='lg:text-[40px] text-[30px] font-bold'>10+</h2>
                    <p className='text-sm uppercase'>Projects <br />Completed</p>
                </div>
            </div> */}
        </React.Fragment>
    )
}
