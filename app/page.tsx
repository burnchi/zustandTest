import BearCounter from '@/components/BearCounter'
import Controls from '@/components/Controls'
import Todolists from '@/components/Todolists'
import UpdateName from '@/components/UpdateName'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='max-w-4xl mx-auto p-5 space-y-5 min-h-[60vh] relative'>
      <h1 className=' text-4xl font-semibold'>Home Page</h1>
      <div className='border border-solid border-black space-y-5'>
        <BearCounter />
        <Controls />
      </div>

      <div className='border border-solid border-black space-y-5'>
        <Todolists></Todolists>
      </div>

      <div className='border border-solid border-black space-y-5'>
        <UpdateName />
      </div>
      <div className=' absolute right-0 bottom-0 space-x-2'>
        <Link href='/second' className=' bg-green-300'>To Second Page</Link>
        <Link href='/third' className=' bg-green-300'>To Third Page</Link>
        <Link href='/fourth' className=' bg-green-300'>To Fourth Page</Link>
      </div>
    </div>
  )
}


