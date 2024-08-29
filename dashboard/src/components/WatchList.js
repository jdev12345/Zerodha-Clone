import React,{useState,useEffect} from "react";
import axios from "axios";
import {Tooltip,Grow} from "@mui/material"
import { watchlist } from "../data/data";
import {BarChartOutlined, KeyboardArrowDown,KeyboardArrowUp, MoreHoriz} from "@mui/icons-material"



const WatchList = () => {
  const [allWatchlist,setAllWatchlist] = useState([])
  useEffect(()=>{
    axios.get('http://localhost:3002/allOrders').then(res=>{
      console.log(res.data)
      setAllWatchlist(res.data)
    })

  },[])
  
  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts"> {watchlist.length} / 50</span>
      </div>

      <ul className="list">
        {allWatchlist.map((stock,index)=>{
          return(
            <WatchListItem stock={stock} key={index} />
          )
        })}
      </ul>
    </div>
  );
};

export default WatchList;

const WatchListItem = ({stock,key}) => {
  const [showWatchListActions,setShowWatchListActions] = useState(false)
  const handleMouseEnter =()=>{
    setShowWatchListActions(true);
  }
  const handleMouseExit =()=>{
    setShowWatchListActions(false);
  }
  return (
    <li onMouseEnter={()=>handleMouseEnter()} onMouseLeave={()=>handleMouseExit()}>
      <div className="item">
        <p className={stock.isDown?"down":"up"}> {stock.name}</p>
        <div className="itemInfo">
          <span className="percent">{stock.percent}</span>
          {
          stock.isDown?(
            <KeyboardArrowDown className="down"/>
            ):(
            <KeyboardArrowUp className="down"/>
            )}
          <span className="price">{stock.price}</span>
        </div>
      </div>
      {showWatchListActions && <WatchListAction uid={key}/>}
    </li>
  )
}

const WatchListAction = ({uid}) =>{ 
  return (
    <span className="actions">
      <span>
      <Tooltip
        title="Buy (B)"
        placement="top"
        arrow
        TransitionComponent={Grow}
      >
        <button className="buy">Buy</button>
      </Tooltip>
      <Tooltip
        title="Sell (S)"
        placement="top"
        arrow
        TransitionComponent={Grow}
      >
        <button className="Sell">Sell</button>
      </Tooltip>
      <Tooltip
        title="Analytics (A)"
        placement="top"
        arrow
        TransitionComponent={Grow}
      >
        <button className="chart"><BarChartOutlined className="icon"/></button>
      </Tooltip>
      <Tooltip
        title="More"
        placement="top"
        arrow
        TransitionComponent={Grow}
      >
        <button className="action"><MoreHoriz className="icon"/></button>
      </Tooltip>
      </span>
    </span>
  )
}