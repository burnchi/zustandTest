"use client"
import { useStore } from '@/store'
import Link from 'next/link'
import React, { useRef } from 'react'

const SecondPage = () => {
  const wish = useStore((state) => state.wish)
  const setwish = useStore((state) => state.setWish)
  const wishList = useStore((state) => state.wishList)
  const setWishList = useStore((state) => state.setWishList)
  const bears = useStore((state) => state.count)
  const checkboxRef = useRef<HTMLInputElement>(null)
  const handleClick = () => {
    setWishList(
      wish
    )
  }
  return (
    <div className='max-w-4xl mx-auto min-h-[80vh] p-4 border border-solid border-black flex flex-col items-start gap-3 relative'>
      <h1 className=' text-4xl font-semibold'>SecondPage</h1>
      <h1 className=' text-xl text-gray-400'>修改对象状态某个属性的值e.g.,&#123;&#125;</h1>
      <div className='flex gap-x-5'>

        <div className='flex flex-col '>
          name:<input type="text" className=' border-[3px] border-black ' onChange={(e) => {
            setwish(
              {
                ...wish,
                name: e.target.value
              },

            )
          }} />
          wish:<input type="text" className=' border-[3px] border-black ' onChange={(e) => {
            setwish(
              {
                ...wish,
                wishes: e.target.value
              },
            )
          }} />
          <div>
            {JSON.stringify(wish)}
          </div>
        </div>
        <div>
          <h1>First Page State</h1>
          <p>{bears}</p>
        </div>
      </div>

      <span className='border-2 w-full border-black'></span>
      <h1 className=' text-xl text-gray-400 '>添加对象到数组状态,e.g.,[&#123;&#125;,&#123;&#125;]</h1>
      <div className='flex flex-col'>

        id:<input type="text" className=' border-[3px] border-black ' value={wish.id} onChange={(e) => {
          setwish(
            {
              ...wish,
              id: Number(e.target.value)
            },
          )
        }} />
        name:<input type="text" className=' border-[3px] border-black ' value={wish.name} onChange={(e) => {
          setwish(
            {
              ...wish,
              name: e.target.value
            },

          )
        }} />
        wish:<input type="text" className=' border-[3px] border-black ' value={wish.wishes} onChange={(e) => {
          setwish(
            {
              ...wish,
              wishes: e.target.value
            },
          )
        }} />
        <div className=' space-x-2'>
          <input type="checkbox" id="horns" name="horns" ref={checkboxRef} onChange={() => {
          setwish(
            {
              ...wish,
              done: checkboxRef.current?.checked
            },
          )
        }}/>
          <label htmlFor="horns">done</label>
        </div>
      </div>
      <button className='bg-orange-400' onClick={handleClick}>submit</button>
      <div>
        {
          wishList.map((list, inx) => <p key={inx}>
            {JSON.stringify(list)}
          </p>)

        }
      </div>

      <div className=' absolute right-0 bottom-0 space-x-2'>
        <Link href='/' className=' bg-green-300'>To Home</Link>
        <Link href='/third' className=' bg-green-300'>To Third Page</Link>
        <Link href='/fourth' className=' bg-green-300'>To Fourth Page</Link>
      </div>
    </div>
  )
}

export default SecondPage