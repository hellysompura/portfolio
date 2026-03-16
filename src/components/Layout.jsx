import React from 'react'
import AboutMe from '../pages/AboutMe'
import RecentProjects from '../pages/RecentProjects'
import Experience from '../pages/Experience'
import Tools from '../pages/Tools'
import Blogs from '../pages/Blogs'
import ContactMe from '../pages/ContactMe'

export default function Layout() {
    return (
        <React.Fragment>
            <div className='flex flex-col gap-5 mb-7'>
                <AboutMe />
            </div>

            {/* <div className='flex flex-col gap-5 my-6'>
                <RecentProjects />
            </div> */}

            <div className='flex flex-col gap-5 my-7'>
                <Experience />
            </div>

            <div className='flex flex-col gap-5 my-7'>
                <Tools />
            </div>

            <div className='flex flex-col gap-5 my-7'>
                <Blogs />
            </div>
            
            <div className='flex flex-col gap-5 my-7'>
                <ContactMe />
            </div>
        </React.Fragment>
    )
}
