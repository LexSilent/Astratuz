import React from 'react'
import { Chart } from "react-google-charts";
import './Status.css';

export const data = [
    ["Task", "Hours per Day"],
    ["Work", 11],
    ["Eat", 2],
    ["Commute", 2],
    ["Watch TV", 2],
    ["Sleep", 7],
  ];
  export const options = {
    title: "My Daily Activities",
  };

const Stadistics = () => {
  return (
    
    <div className='Status'>
            <div>
                <form action="" className='Busqueda'>
                    <h1>Services - Example</h1>
                    <input type="text" id='search' name="search" placeholder="Search any"></input> 
                </form>
                
            </div>
            <div className='ContentAsides'>
                <aside className='StatusOfServices'>
                <Chart
                chartType="PieChart"
                data={data}
                options={options}
                width={"100%"}
                height={"400px"}
                />                 
                </aside>
                <aside className='SearchOfServices'>
                
                </aside>
            </div>
        </div>
  )
}

export default Stadistics
