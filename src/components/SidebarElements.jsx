import React, { useState } from 'react';
import { motion } from "framer-motion";

export default function SidebarElements({icon, buttonName, subList}) {
  const [dropdown, setDropdown] = useState(false);
  const [list, setList] = useState(null);

  const handleListClick = (value) => {
    setList(value);
  }

  const handleDropdownClick = () =>{
    setDropdown((value) => !value );  
  }
  const dropdownVariants = {
    open: { height: 'auto', opacity: 1 },
    closed: { height: 0, opacity: 0 }
  };

  const dropdownTransition = {
    duration: 0.3
  };

  return (
    <>
      <li className='w-full'>
        <div className={subList&& (dropdown) ? 'w-full rounded p-3 bg-orange-300 text-white cursor-pointer' : 'w-full rounded p-3 text-black cursor-pointer'}>
          <div className='flex flex-row gap-2 text-sm justify-between items-center' onClick={handleDropdownClick}>
            <div className='flex flex-row gap-2 font-medium'>
            <img src= {icon} className='h-[25px]' /> {buttonName}
            </div>
            {subList && <svg className="fill-current h-4 w-4 ml-2 relative left 100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 20">
            <path d="M9 9l-3 3-3-3" fill="none" stroke="currentColor" stroke-width="2"/></svg>}
            
          </div>
        </div>
        {subList &&
          <motion.div 
            initial = 'closed'
            animate = {dropdown? 'open' : 'closed'}
            variants={dropdownVariants}
            transition={{dropdownTransition}}
            style={{overflow: 'hidden'}}
          >
           <ul className={dropdown ? 'flex flex-col gap-[5px] bg-white pt-1 shadow-lg' : 'hidden'}>
        {subList &&
          subList.map((el, index) => (
            <li
              key={index}
              className={`ml-[50px] gap-[25px] cursor-pointer rounded p-3 truncate hover:text-clip ${
                el.item === list ? 'bg-orange-300' : ''
              }`}
              onClick={() => handleListClick(el.item)}
            >
              {el.item}
            </li>
          ))}
      </ul>   
          </motion.div>
        }
      </li>  
    </>
  )
}
