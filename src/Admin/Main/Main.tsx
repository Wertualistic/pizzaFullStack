import React from 'react'
import Tabs from './Tabs/Tabs'
import Content from './Content/Content'

const Main = () => {
  return (
    <div className='p-[24px] flex flex-col'>
      <h1 className='text-white text-[32px] font-medium'>Settings</h1>
      <div className='flex gap-[24px] py-[24px]'> 
        <Tabs />
        <Content />
      </div>
    </div>
  )
}

export default Main