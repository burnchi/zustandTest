"use client"
import { useStore } from '@/store'
import React from 'react'

const BearCounter = () => {
    const bears = useStore((state) => state.count)
  return <h1>{bears} around here...</h1>
}

export default BearCounter