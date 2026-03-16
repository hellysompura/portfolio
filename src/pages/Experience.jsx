import React from 'react'
import { COMMON_DATA } from '../utils/CommonData'
import Icon from '../components/Icon'

export default function Experience() {
    return (
        <React.Fragment>
            <div className='experience'>
                <h1 className='lg:text-[90px] text-[60px] font-bold uppercase tracking-wider leading-none'>5 years of</h1>
                <h1 className='lg:text-[90px] text-[60px] text-(--gray-20) font-bold uppercase tracking-wider leading-none'>Experience</h1>
            </div>

            <div>
                {COMMON_DATA.map((item, index) => (
                    <div key={index} className='flex justify-between items-start my-6'>
                        <div className='flex flex-col gap-2'>
                            <h2 className='text-2xl font-semibold'>{item.organization}</h2>
                            <p className='text-sm'>{item.description}</p>
                            <p className='text-xs'>{item.experience.join(' - ')}</p>
                        </div>

                        <div>
                            <Icon name='arrow-up-right' size={20} color="var(--orange-50)" />
                        </div>
                    </div>
                ))}
            </div>
        </React.Fragment>
    )
}
