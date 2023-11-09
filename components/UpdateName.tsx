"use client"
import { useStore } from '@/store'
import React from 'react'

const UpdateName = () => {
    const name = useStore((state) => state.name)
    const updateName = useStore((state) => state.updateName)
    return (
        <div>
            <h1>updateName</h1>
            <input type="text" placeholder='input something...' className='border-[3px] border-solid border-black '
                value={name} onChange={(e) => updateName(e.currentTarget.value)} />

            <p>Hello!<span className=' text-orange-400'>{name}</span></p>

        </div>
    )
}

export default UpdateName