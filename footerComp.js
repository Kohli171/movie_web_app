import React from 'react'
import '../styles/footerComp.css'

export default function FooterComp() {
    return (
        <footer>
            <div className='footerInner'>
                <div className='footerTop'>
                    <div className='footerTopLeft'>
                        <div className='footerLogoTab'>
                            <img src={process.env.PUBLIC_URL + '/assets/icons/logo.png'} alt='icon' />
                            <div className='footerLogo'>Vid<span>Store</span></div>
                        </div>
                        <div className='footerDesc'>All your favourite movies and TV shows in a single platform. Easy to rent or purchase any movie of your choice.</div>
                        <div className='footerTry'>
                            <button className='primary'>Get Started</button>
                            <button className='secondary'>Log In</button>
                        </div>

                        <div className='footerSocial'>
                            <div className='footerSocialIcon'><img src={process.env.PUBLIC_URL + '/assets/icons/instagram.png'} alt='icon' /></div>
                            <div className='footerSocialIcon'><img src={process.env.PUBLIC_URL + '/assets/icons/facebook-white.png'} alt='icon' /></div>
                            <div className='footerSocialIcon'><img src={process.env.PUBLIC_URL + '/assets/icons/twitter.png'} alt='icon' /></div>
                        </div>
                    </div>

                    <div className='footerTopRight'>
                        <div className='footerTRTab'>
                            <div className='footerTRTitle'>Quick Links</div>
                            <div className='footerTRLink'>Tv Series</div>
                            <div className='footerTRLink'>Recent Movies</div>
                            <div className='footerTRLink'>Profile</div>
                        </div>
                        <div className='footerTRTab'>
                            <div className='footerTRTitle'>Resources</div>
                            <div className='footerTRLink'>Terms of Services</div>
                            <div className='footerTRLink'>Privacy Policy</div>
                            <div className='footerTRLink'>Cookie Policy</div>
                            <div className='footerTRLink'>Plans & Pricings</div>
                        </div>
                    </div>
                </div>

                <div className='footerLine'></div>

                <div className='footerBottom'>
                    <div className='footerBottomLeft'>
                        <div className='footerBLCheck'><img src={process.env.PUBLIC_URL + '/assets/icons/check.png'} alt='icon' /></div>
                        <div className='footerBLText'>Available on all platforms</div>
                    </div>

                    <div className='footerBottomRight'>
                        <div className='footerPlatformTab'>
                            <div className='footerPlatformIcon'><img src={process.env.PUBLIC_URL + '/assets/icons/windows.png'} alt='icon' /></div>
                            <div className='footerPlatformName'>Windows</div>
                        </div>
                        <div className='footerPlatformTab'>
                            <div className='footerPlatformIcon'><img src={process.env.PUBLIC_URL + '/assets/icons/linux.png'} alt='icon' /></div>
                            <div className='footerPlatformName'>Linux</div>
                        </div>
                        <div className='footerPlatformTab'>
                            <div className='footerPlatformIcon'><img src={process.env.PUBLIC_URL + '/assets/icons/apple.png'} alt='icon' /></div>
                            <div className='footerPlatformName'>IOS Devices</div>
                        </div>
                        <div className='footerPlatformTab'>
                            <div className='footerPlatformIcon'><img src={process.env.PUBLIC_URL + '/assets/icons/google-play.png'} alt='icon' /></div>
                            <div className='footerPlatformName'>Android</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='footerCopyright'>&copy; {new Date().getFullYear()} VidStore Inc. All rights reserved.</div>
        </footer>
    )
}