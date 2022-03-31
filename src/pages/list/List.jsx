import { SimCardDownloadOutlined } from "@mui/icons-material"
import React from "react"
import "./List.scss"
import SideBar from "../../components/sidebar/Sidebar"
import NavBar from "../../components/navbar/Navbar"
import DataTable from "../../components/datatable/DataTable"

const List = () => {

    return (
        <div className="list">
            <SideBar/>
            <div className="listContainer">
                <NavBar/>
                <DataTable/>
            </div>
        </div>
    )
}

export default List