import React from "react"
import DashboardIcon from '@mui/icons-material/Dashboard'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import LogoutIcon from '@mui/icons-material/Logout'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import SettingsApplicationsSharpIcon from '@mui/icons-material/SettingsApplicationsSharp'
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined'
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'
import AssessmentIcon from '@mui/icons-material/Assessment'
import LocalShippingIcon from '@mui/icons-material/LocalShipping'
import StoreIcon from '@mui/icons-material/Store'
import CreditCardIcon from '@mui/icons-material/CreditCard'

import {Link} from "react-router-dom"

import "./Sidebar.scss"

const Sidebar = () => {

    return(
        <div className="sidebar">
            <div className="top">
                <Link to="/" style={{textDecoration: "none"}}>
                    <span className="logo">SynExMS</span>
                </Link>
            </div>
            <hr/>
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <li>
                        <DashboardIcon className="icon"/>
                        <Link to="/" style={{textDecoration: "none"}}>
                            <span>Dashboard</span>
                        </Link>
                    </li>
                    <p className="title">LISTS</p>
                    <li>
                        <PersonOutlineOutlinedIcon className="icon"/>
                        <Link to="/users" style={{textDecoration: "none"}}>
                            <span>Users</span>
                        </Link>
                    </li>
                    <li>
                        <StoreIcon className="icon"/>
                        <Link to="/products" style={{textDecoration: "none"}}>
                            <span>Products</span>
                        </Link>
                    </li>
                    <li>
                        <CreditCardIcon className="icon"/>
                        <span>Orders</span>
                    </li>
                    <li>
                        <LocalShippingIcon className="icon"/>
                        <span>Delivery</span>
                    </li>
                    <p className="title">USEFUL</p>
                    <li>
                        <AssessmentIcon className="icon"/>
                        <span>Stats</span>
                    </li>
                    <li>
                        <NotificationsOutlinedIcon className="icon"/>
                        <span>Notifications</span>
                    </li>
                    <p className="title">SERVICE</p>
                    <li>
                        <SettingsSystemDaydreamOutlinedIcon className="icon"/>
                        <span>System Health</span>
                    </li>
                    <li>
                        <PsychologyOutlinedIcon className="icon"/>
                        <span>Logs</span>
                    </li>
                    <li>
                        <SettingsApplicationsSharpIcon className="icon"/>
                        <span>Settings</span>
                    </li>
                    <p className="title">USER</p>
                    <li>
                        <AccountCircleOutlinedIcon className="icon"/>
                        <span>Profile</span>
                    </li>
                    <li>
                        <LogoutIcon className="icon"/>
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
            <div className="bottom">
                <div className="colorOption"></div>
                <div className="colorOption"></div>
            </div>
        </div>
    )
}

export default Sidebar