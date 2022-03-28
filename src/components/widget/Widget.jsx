import React from "react"
import "./Widget.scss"

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined'
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined'
import { MarginOutlined } from "@mui/icons-material"

const Widget = ({type}) => {
    let data

    switch(type) {
        case "user" :
            data = {
                title : "USERS",
                isMoney: false,
                amount: 123,
                link: "See all users",
                diff: 12,
                isPositiveDiff: true,
                icon: <PersonOutlineIcon className="icon"
                    style= {{
                        color: "crimson",
                        backgroundColor: "rgba(255, 0, 0, 0.2)"
                    }}
                />
            }
        
            break
        case "order" : 
            data = {
                title : "ORDERS",
                isMoney: false,
                amount: 3421,
                link: "View all orders",
                diff: 20,
                isPositiveDiff: false,
                icon: <ShoppingCartOutlinedIcon className="icon"
                    style={{
                        color: "goldenrod",
                        backgroundColor: "rgba(218, 165, 32, 0.2)"
                    }}
                />
            }
        
            break
        case "earning" : 
            data = {
                title : "EARNING",
                isMoney: true,
                amount: 1234567,
                link: "View net earning",
                diff: 50,
                isPositiveDiff: true,
                icon: <MonetizationOnOutlinedIcon className="icon"
                    style={{
                        color: "green",
                        backgroundColor: "rgba(0, 128, 0, 0.2)"
                    }}
                />
            }
        
            break
        case "balance" : 
            data = {
                title : "BALANCE",
                isMoney: true,
                amount: 5432,
                link: "See details",
                diff: 5,
                isPositiveDiff: false,
                icon: <AccountBalanceWalletOutlinedIcon className="icon"
                    style={{
                        color: "purple",
                        backgroundColor: "rgba(128, 0, 128, 0.2)"
                    }}
                />
            }
        
            break
        default:
            break
    }

    return(
        <div className="widget">
            <div className="left">
                <span className="title">{data.title}</span>
                <span className="counter">{data.isMoney ? "$" : ""}{data.amount}</span>
                <span className="link">{data.link}</span>
            </div>
            <div className="right">
                <div className={"percentage " + (data.isPositiveDiff? "positive" : "negative")}>
                    {data.isPositiveDiff ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/>}{data.diff} %
                </div>
                {data.icon}
            </div>
        </div>
    )
}

export default Widget