import BearCounter from '@/components/BearCounter'
import Controls from '@/components/Controls'
import ShowLog from '@/components/ShowLog'
import Todolists from '@/components/Todolists'
import UpdateName from '@/components/UpdateName'

export default function Home() {
  return (
    <div className='max-w-4xl mx-auto p-5 space-y-5'>
      <h1 className=' text-4xl font-semibold'>Home Page</h1>
      <div className='border border-solid border-black space-y-5'>
        <BearCounter />
        <Controls />
      </div>

      <div className='border border-solid border-black space-y-5'>
          <Todolists></Todolists>
      </div>

      <div className='border border-solid border-black space-y-5'>
        <UpdateName/>
      </div>
      <div className='border border-solid border-black space-y-5'>
        <ShowLog/>
      </div>
    </div>
  )
}


