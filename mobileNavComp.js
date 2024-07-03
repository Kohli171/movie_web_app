import React from 'react'
import '../styles/mobileNavComp.css'

export default function MobileNavComp({selectActiveScreen, setModal, toggleMobileMenuVisible, activePage, selectActivePage}) {
    //HANDLE AUTH SCREEN POPUP MODAL
    function authBtnClicked(choice){
        toggleMobileMenuVisible(false);
        selectActiveScreen(choice);
        setModal(true);
    }

    //HANDLE PAGE NAVIGATION
    function navigatePage(choice){
        toggleMobileMenuVisible(false);
        selectActivePage(choice);
    }
    
    return (
        <div className='mobileNavLinkTab'>
            <div onClick={()=>{navigatePage('home')}} className={`mobileNavLink ${activePage==='home' || activePage==='detail' ? 'active' : ''}`}>Home</div>
            <div onClick={()=>{navigatePage('movies')}} className={`mobileNavLink ${activePage==='movies' ? 'active' : ''}`}>Find Movies</div>
            <div onClick={()=>{navigatePage('series')}} className={`mobileNavLink ${activePage==='series' ? 'active' : ''}`}>Tv Series</div>
            
            <div className='authBtnTab'>
                <button onClick={()=>{authBtnClicked('login')}} className='secondary'>Login</button>
                <button onClick={()=>{authBtnClicked('signup')}} className='primary'>Get Started</button>
            </div>
        </div>
    )
}