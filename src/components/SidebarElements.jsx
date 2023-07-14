import React, { useState } from 'react'

export default function SidebarElements({icon, buttonName, subList}) {
  const [dropdown, setDropdown] = useState(false);

  const handleDropdownClick = () =>{
    setDropdown((value) => !value );  
  }
  console.log(subList);
  //const list = subList.map((data) => data.item);
  //console.log(list);

  return (
    <>
      <li className='w-full'>
        <div className='w-full text-black hover:text-white hover:bg-orange-300 rounded p-3'>
        <div className='flex flex-row gap-2 text-sm justify-between items-center' onClick={handleDropdownClick}>
          <div className='flex flex-row gap-2 font-medium'>
          <img src= {icon} className='h-[25px]' /> {buttonName}
          </div>
          {subList && <svg className="fill-current h-4 w-4 ml-2 relative left 100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 20">
          <path d="M9 9l-3 3-3-3" fill="none" stroke="currentColor" stroke-width="2"/></svg>}
          
        </div>
        </div>
        <ul className= {dropdown ? 'flex flex-col bg-white pt-1 shadow-lg' : 'hidden'}>
        {subList && subList.map((el, index) => (
          <li key={index}>{el.item}</li>
        ))}
        </ul>     
      </li>  
    </>
  )
}
