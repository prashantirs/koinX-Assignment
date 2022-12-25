import React from 'react'
import Cryptocurrencies from "../Cryptocurrencies/Cryptocurrencies";
import MenuFilter from '../Menu/MenuFilter';
import TitleCarousel from "../TitleCarousel/TitleCarousel";
import './MainSection.css'
const MainSection = () => {
  return (
    <div className='MainSection'>
        <TitleCarousel/>
        <h2 style={{marginTop:"2rem",marginBottom:"1rem"}}>Top 100 Cryptocurrencies by Market Cap</h2>
        {window.innerWidth>750 && <MenuFilter/>}
        <Cryptocurrencies/>
    </div>
  )
}

export default MainSection