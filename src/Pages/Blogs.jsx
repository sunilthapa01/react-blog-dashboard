import React from 'react'
  import Preview from './Preview'

function Blogs() {
  let show = localStorage.getItem('blog');
  show = show?JSON.parse(show):[]
  console.log(show)
  return (
    <div className='bg-[#0F172A] w-full h-full p-4'>
          <Preview blog={show} layout="grid"/>
      </div>
  )
}

export default Blogs
