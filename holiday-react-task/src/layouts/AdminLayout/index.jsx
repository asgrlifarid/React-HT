import React from 'react'
import AdminHeader from '../AdminHeader'
import { Outlet } from "react-router";
import Footer from '../ClientFooter';

const AdminLayout = () => {
  return (
    <div>
      <AdminHeader/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default AdminLayout
