"use client"
import { useStore } from '@/store'
import Image from 'next/image'
import Link from 'next/link'
import React, { useRef } from 'react'
import { useToast } from "@/components/ui/use-toast"


const FourthPage = () => {
  const wishList = useStore((state) => state.wishList)
  const setWishListDone = useStore((state) => state.setWishListDone)
  const inputRef = useRef<HTMLInputElement | null>(null)
  const { toast } = useToast()
  const idList = wishList.map(list => list.id)
  // console.log(idList)

  const handleClick = () => {
    if (idList.includes(Number(inputRef.current?.value))) {
      setWishListDone(Number(inputRef.current?.value))
      toast({
        variant:"success",
        title: "存在id",
        description: `已更改其done属性`,
      })
    } else {
      // console.log(`wishList里面没有id:${inputRef.current?.value}`)
      
      toast({
        variant:"destructive",
        title: "id填写错误",
        description: `wishList里面没有id:${inputRef.current?.value}`,
      })
      console.log(inputRef.current?.value)
    }
  }
  return (
    <div className='max-w-4xl mx-auto min-h-[80vh] p-4 border border-solid border-black flex flex-col items-start gap-3 relative'>
      <h1 className=' text-4xl font-semibold'>Fourth Page</h1>
      <h1 className=' text-xl text-gray-400'>更改嵌套对象done值</h1>
      <input type="text" className=' border-[3px] border-black' placeholder='fill id' ref={inputRef}/>
      <button className='bg-orange-400' onClick={handleClick}>submit</button>
      {
        wishList.map((list, inx) => <p key={inx}>
          {JSON.stringify(list)}
        </p>)

      }
      <p>实现如下</p>
    <Image src='/thirdpage8.png' alt='thirdpage2.png' width={600} height={200}></Image>
      <Image src='/thirdpage7.png' alt='thirdpage1.png' width={600} height={200}></Image>
      <Image src='/thirdpage9.png' alt='thirdpage1.png' width={600} height={200}></Image>
      <div className=' absolute right-0 bottom-0 space-x-2'>
        <Link href='/' className=' bg-green-300'>To Home</Link>
        <Link href='/second' className=' bg-green-300'>To second Page</Link>
        <Link href='/third' className=' bg-green-300'>To third Page</Link>
      </div>
    </div>
  )
}

export default FourthPage