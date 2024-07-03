import React, { useState } from 'react'
import NavComp from './navComp'
import '../styles/headerComp.css'
import MobileNavComp from './mobileNavComp'



export default function HeaderComp({selectActiveScreen, setModal, activePage, selectActivePage}) {
    const [mobileMenuVisible, toggleMobileMenuVisible] = useState(false);

    //HANDLE AUTH SCREEN POPUP MODAL
    function authBtnClicked(choice){
        selectActiveScreen(choice);
        setModal(true);
    }


    return (
        <>
            <div className='pageHeader'>
                <div className='pageLeftBar'>
                    <div onClick={()=>{toggleMobileMenuVisible(prev => !prev)}} className='headerIcon mobileNavToggle'><img src={process.env.PUBLIC_URL + `${mobileMenuVisible ? '/assets/icons/cancel.png' : '/assets/icons/hamburger.png'}`} alt="icon" /></div>

                    <div className='pageLogoTab'>
                        <img src={process.env.PUBLIC_URL + '/assets/icons/logo.png'} alt='icon' />
                        <div className='pageLogo'>Vid<span>Store</span></div>
                    </div>
                </div>

                <NavComp activePage={activePage} selectActivePage={selectActivePage} />

                <div className='pageRightBar'>
                    <div className='headerIcon'><img src={process.env.PUBLIC_URL + '/assets/icons/search.png'} alt="icon" /></div>
                    <div className='headerIcon'><img src={process.env.PUBLIC_URL + '/assets/icons/bell.png'} alt="icon" /></div>

                    <button onClick={()=>{authBtnClicked('login')}} className='secondary headerBtn'>Login</button>
                    <button onClick={()=>{authBtnClicked('signup')}} className='primary headerBtn'>Get Started</button>
                </div>
            </div>

            {
                mobileMenuVisible ? 
                <MobileNavComp selectActiveScreen={selectActiveScreen} setModal={setModal} toggleMobileMenuVisible={toggleMobileMenuVisible} activePage={activePage} selectActivePage={selectActivePage} /> : 
                <></>
            }
        </>
    )
}