"use client"
import { useStore } from '@/store'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ThirdPage = () => {
    const count = useStore((state) => state.deepObj.nested.obj.count)
    const setCount = useStore((s) => s.setDeepObj)
    const immerCount = useStore((s) => s.immerDeepObj.nested.obj.count)
    const setimmerCount = useStore((s) => s.setImmerDeepObj)

    const handleClick = () => {
        setCount()
    }
    const handleClick1 = () => {
        setimmerCount()
    }
    return (
        <div className='max-w-4xl mx-auto min-h-[80vh] p-4 border border-solid border-black flex flex-col items-start gap-3 relative'>
            <h1 className=' text-4xl font-semibold'>ThirdPage</h1>
            <h1 className=' text-xl text-gray-400'>嵌套对象值e.g.,&#123;&#125;</h1>

            <button className='bg-green-400' onClick={handleClick}>click me</button>
            {count}
            <p>实现如下</p>
            <Image src='/thirdpage1.png' alt='thirdpage1.png' width={600} height={200}></Image>
            <Image src='/thirdpage2.png' alt='thirdpage2.png' width={600} height={200}></Image>
            <Image src='/thirdpage3.png' alt='thirdpage3.png' width={600} height={200}></Image>
            <span className='border-2 border-black w-full my-3'></span>
            <h1 className=' text-xl text-gray-400'>使用immer处理嵌套对象值e.g.,&#123;&#125;</h1>

            <button className='bg-green-400' onClick={handleClick1}>click me</button>
            {immerCount}
            <p>实现如下</p>
            <Image src='/thirdpage4.png' alt='thirdpage1.png' width={600} height={200}></Image>
            <Image src='/thirdpage5.png' alt='thirdpage2.png' width={600} height={200}></Image>
            <Image src='/thirdpage6.png' alt='thirdpage3.png' width={600} height={200}></Image>
            <div className=' absolute right-0 bottom-0 space-x-3'>
                <Link href='/' className=' bg-green-300'>To Home</Link>
                <Link href='/second' className=' bg-green-300'>To second Page</Link>
                <Link href='/fourth' className=' bg-green-300'>To fourth Page</Link>
            </div>
        </div>
    )
}

export default ThirdPage