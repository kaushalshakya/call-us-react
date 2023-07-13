import React from 'react'
import Sidebar from '../components/sidebar'

export default function DashboardLayout({children}) {
  return (
    <>
       <Sidebar/>


        <div>{children}</div>
    </>
  )
}
