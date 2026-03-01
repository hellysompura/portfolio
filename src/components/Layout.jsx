import React from 'react'
import AboutMe from '../pages/AboutMe'
import RecentProjects from '../pages/RecentProjects'
import Experience from '../pages/Experience'

export default function Layout() {
    return (
        <React.Fragment>
            <div className='flex flex-col gap-5 mb-6'>
                <AboutMe />
            </div>

            <div className='flex flex-col gap-5 my-6'>
                <RecentProjects />
            </div>

            <div className='flex flex-col gap-5 my-6'>
                <Experience />
            </div>
        </React.Fragment>
    )
}
