import React from 'react'
import Cryptocurrencies from "../Cryptocurrencies/Cryptocurrencies";
import MenuFilter from '../Menu/MenuFilter';
import TableHeading from '../TableHeading/TableHeading';
import TitleCarousel from "../TitleCarousel/TitleCarousel";
import './MainSection.css'
const MainSection = () => {
  return (
    <div className='MainSection'>
        <TitleCarousel/>
        <h1>Top 100 Cryptocurrencies by Market Cap</h1>
        <MenuFilter/>
        <Cryptocurrencies/>
    </div>
  )
}

export default MainSection