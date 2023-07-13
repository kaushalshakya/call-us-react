import React from 'react'
import { Link } from 'react-router-dom';
import SidebarElements from './SidebarElements';
import dashboardImg from '../assets/dashboard.png';
import userImg from '../assets/user.png';
import entityImg from '../assets/file.png';
import inboundImg from '../assets/inbound.png';
import outBoundImg from '../assets/outbound.png';
import reminderImg from '../assets/bell.png';
import ticketImg from '../assets/ticket.png';


export default function Sidebar() {
  return (
    <>
        <div className="bg-orange-500 text-black h-screen flex flex-col ">
            <div className="bg-white w-[12%] h-screen pl-[10px]  gap-8">
                <ul className=" flex flex-col gap-8 items-start">
                <h1 className='font-bold text-2xl'>General</h1>
                    <Link to='/'><SidebarElements icon = {dashboardImg} elementName='Dashboard'/></Link>  
                    <Link to='/'><SidebarElements icon = {userImg} elementName='Manage Users' /></Link> 
                    <Link to='/'><SidebarElements icon = {entityImg} elementName='Entity' /></Link> 
                    <Link to='/'><SidebarElements icon = {inboundImg} elementName='Inbound Calls' /></Link> 
                    <Link to='/'><SidebarElements icon = {outBoundImg} elementName='Outbound Calls' /></Link> 
                    <Link to='/'><SidebarElements icon = {reminderImg} elementName='Reminder Calls' /></Link> 
                    <Link to='/'><SidebarElements icon = {ticketImg} elementName='Tickets' /></Link> 
                </ul>
            </div>
        </div>
    </>
  )
}