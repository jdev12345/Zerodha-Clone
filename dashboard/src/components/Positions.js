import React,{useState,useEffect} from "react";

import { positions } from "../data/data";
import axios from 'axios' 

const Positions = () => {
  const [allPsoitions,setAllPsoitions] = useState([])

  useEffect(()=>{
    axios.get('http://localhost:3002/allPositions').then(res=>{
      console.log(res.data)
      setAllPsoitions(res.data)
    }).catch(err=>console.log(err))
  },[])
  return (
    <>
      <h3 className="title">Positions (2)</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Product</th>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg.</th>
            <th>LTP</th>
            <th>P&L</th>
            <th>Chg.</th>
          </tr>
          {allPsoitions.map((stock,index)=>{
            const currVal = stock.price*stock.qty
            const isProfitable = currVal - stock.avg*stock.qty>=0.0
            const isProfitableClass = isProfitable?"profit":"loss"
            const dayClass = stock.isLoss?"loss":"profit"
            return (
                    <tr key={index}>
                      <td>{stock.product}</td>
                      <td>{stock.name}</td>
                      <td>{stock.qty}</td>
                      <td>{stock.avg.toFixed(2)}</td>
                      <td>{stock.price.toFixed(2)}</td>
                      <td className={isProfitableClass}>{(currVal-stock.avg*stock.qty).toFixed(2)}</td>
                      <td className={isProfitableClass}>{stock.net}</td>
                    </tr>
            )
          })}
        </table>
      </div>
    </>
  );
};

export default Positions;
