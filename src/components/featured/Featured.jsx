import React from "react"
import "./Featured.scss"
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { CircularProgressbar } from "react-circular-progressbar"

const Featured = () => {

    return (
        <div className="featured">
            <div className="top">
                <h1 className="title">Total Revenue</h1>
                <MoreVertIcon className="icon"/>
            </div>
            <div className="bottom">
                <div className="featureChart"></div>
            </div>
        </div>
    )
}

export default Featured