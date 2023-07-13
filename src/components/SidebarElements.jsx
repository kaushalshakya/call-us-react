import React from 'react'

export default function SidebarElements({icon, elementName}) {
  return (
    <>
        <li className='flex gap-2'>
            <img src= {icon} className='h-[35px]' />{elementName}
        </li>
    </>
  )
}
