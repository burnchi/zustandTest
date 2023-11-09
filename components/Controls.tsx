"use client"
import { useStore } from '@/store'
import React from 'react'

const Controls = () => {
    const increasePopulation = useStore((state) => state.increaseCount)

    return <button className='px-3 py-1 bg-black text-white' onClick={() => 
      increasePopulation()
    }>one up</button>
}

export default Controls