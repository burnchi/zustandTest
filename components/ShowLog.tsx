"use client"
import { useStore } from '@/store'
import React from 'react'

const ShowLog = () => {

    const log = useStore((state) => state.log)
    const setLogName = useStore((state) => state.setLogName)
    const setLogWhere = useStore((state) => state.setLogWhere)
    const setLogDone = useStore((state) => state.setLogDone)
    return (
        <div className='flex flex-col gap-5'>
            <h1>ShowLog</h1>
            LogName<input type="text" placeholder='input something...' className='border-[3px] border-solid border-black '
                onChange={(e) => setLogName(e.currentTarget.value)} />
            LogWhere<input type="text" placeholder='input something...' className='border-[3px] border-solid border-black '
                onChange={(e) => setLogWhere(e.currentTarget.value)} />
            LogDone<input type="text" placeholder='input something...' className='border-[3px] border-solid border-black '
                onChange={(e) => setLogDone(e.currentTarget.value)} />
            {JSON.stringify(log)}
        </div>
    )
}

export default ShowLog