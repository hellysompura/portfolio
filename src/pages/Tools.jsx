import React from 'react'
import { TOOLS_DATA } from '../utils/CommonData'

export default function Tools() {
    return (
        <React.Fragment>
            <div id='skills'>
                <h1 className='lg:text-[90px] text-[60px] font-bold uppercase tracking-wider leading-none'>Tools</h1>
                <h1 className='lg:text-[90px] text-[60px] text-(--gray-20) font-bold uppercase tracking-wider leading-none'>I Use</h1>
            </div>
            <div className='grid lg:grid-cols-3 grid-cols-2 gap-4'>
                {TOOLS_DATA.map((tool, index) => (
                    <div key={index} className='flex items-center gap-2'>
                        {tool.image && <img src={tool.image} alt={tool.name} className='w-12 h-12 bg-(--white) rounded-sm p-1' />}
                        <h1>{tool.name}</h1>
                    </div>
                ))}
            </div>
        </React.Fragment>
    )
}
