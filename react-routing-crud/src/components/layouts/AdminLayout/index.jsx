import React from 'react'

import { Outlet } from 'react-router-dom'
import AdminHeader from '../AdminHeader'

const ClientLayout = () => {
    return (
        <div>
            <AdminHeader />
            <Outlet />
        </div>
    )
}

export default ClientLayout