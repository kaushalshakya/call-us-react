import React from 'react'
import { Link } from 'react-router-dom';
import SidebarElements from '../components/SidebarElements';
import dashboardImg from '../assets/dashboard.png';
import userImg from '../assets/user.png';
import entityImg from '../assets/file.png';
import inboundImg from '../assets/inbound.png';
import outBoundImg from '../assets/outbound.png';
import reminderImg from '../assets/bell.png';
import ticketImg from '../assets/ticket.png';


export default function Sidebar({children}) {
  return (
    <>
      <div className="bg-orange-400  text-black h-screen flex ">
        <div className="bg-white w-[230px] h-screen pl-[10px gap-8">
            <ul className=" flex flex-col px-4 gap-3">
              <h1 className='font-bold text-base'>General</h1>
                  <SidebarElements icon = {dashboardImg} buttonName = 'Dashboard'/>  
                  <SidebarElements icon = {userImg} buttonName = 'Manage Users' subList={[{item: "Users"}, {item: "Branches"}, {item: "Departments"}]}  />
                  <SidebarElements icon = {entityImg} buttonName = 'Entity' subList={[{item: "Reason"}, {item: "Product"}, {item: "Sub Product"}]} /> 
                  <SidebarElements icon = {inboundImg} buttonName = 'Inbound Calls' subList={[{item: "Inbound view entries"},  {item: "Inbound add form"}]} /> 
                  <SidebarElements icon = {outBoundImg} buttonName = 'Outbound Calls' subList={[{item: "Outbound view entries"},  {item: "Outbound add form"}]} /> 
                  <SidebarElements icon = {reminderImg} buttonName = 'Reminder Calls' subList={[{item: "Today's reminder calls"}, {item: "All reminder calls"}, {item: "Completed reminder calls"}]} /> 
                  <SidebarElements icon = {ticketImg} buttonName = 'Tickets'/> 
            </ul>
        </div>
        <div className='flex flex-col'>
          asdsdsad
          <div>
            {children}
          </div>
        </div>
      </div>
    </>
  )
}