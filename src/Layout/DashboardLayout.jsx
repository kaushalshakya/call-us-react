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
      <div className="bg-orange-400  text-black h-screen">
          <div className="bg-white w-[230px] h-screen pl-[10px gap-8">
              <ul className=" flex flex-col px-4 gap-3">
                <h1 className='font-bold text-base'>General</h1>
                    <Link to='/'><SidebarElements icon = {dashboardImg} buttonName = 'Dashboard'/></Link>  
                    <Link to='/'><SidebarElements icon = {userImg} buttonName = 'Manage Users' subList={[{item: "Users"}, {item: "Branches"}, {item: "Departments"}]}  /></Link> 
                    <Link to='/'><SidebarElements icon = {entityImg} buttonName = 'Entity' subList={[{item: "Users"}, {item: "Branches"}, {item: "Departments"}]} /></Link> 
                    <Link to='/'><SidebarElements icon = {inboundImg} buttonName = 'Inbound Calls' subList={[{item: "Users"}, {item: "Branches"}, {item: "Departments"}]} /></Link> 
                    <Link to='/'><SidebarElements icon = {outBoundImg} buttonName = 'Outbound Calls' subList={[{item: "Users"}, {item: "Branches"}, {item: "Departments"}]} /></Link> 
                    <Link to='/'><SidebarElements icon = {reminderImg} buttonName = 'Reminder Calls' subList={[{item: "Users"}, {item: "Branches"}, {item: "Departments"}]} /></Link> 
                    <Link to='/'><SidebarElements icon = {ticketImg} buttonName = 'Tickets' subList={[{item: "Users"}, {item: "Branches"}, {item: "Departments"}]} /></Link> 
              </ul>
          </div>
          <div>
            {children}
          </div>
      </div>
    </>
  )
}