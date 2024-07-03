import React from 'react'
import '../styles/navComp.css'

export default function NavComp({activePage, selectActivePage}) {
    return (
        <div className='navLinkTab'>
            <div onClick={()=>{selectActivePage('home')}} className={`navLink ${activePage==='home' || activePage==='detail' ? 'active' : ''}`}>Home</div>
            <div onClick={()=>{selectActivePage('movies')}} className={`navLink ${activePage==='movies' ? 'active' : ''}`}>Find Movies</div>
            <div onClick={()=>{selectActivePage('series')}} className={`navLink ${activePage==='series' ? 'active' : ''}`}>Tv Series</div>
        </div>
    )
}