import React from 'react'
import '../../styles/authComp.css'
import AuthInputComp from '../subComponents/authInputComp'

export default function SignupModalComp({handleClick}) {
    return (
        <div className='authModal'>
            <div className='authScreenBlock'>
                <div onClick={handleClick} className='closeModalBtn'><img src={process.env.PUBLIC_URL + '/assets/icons/chevron-left.png'} alt='icon' /></div>

                <div className='authForm'>
                    <div className='authLogo'><img src={process.env.PUBLIC_URL + '/assets/icons/logo.png'} alt='icon' /></div>
                    <div className='authTitle'>Create new account</div>
                    <div className='authSub'>Get started today with your email</div>


                    <AuthInputComp label={'Email address'} placeholder={'Ex. johnsmith@gmail.com'} />
                    <AuthInputComp label={'Password'} placeholder={'xxxxxxxx'} inputType={'password'} />
                    
                    <button className='primary authBtn'>Continue</button> 

                    <div data-name='or continue with' className='authDemacator'></div>

                    <div className='authSocialBlock'>
                        <div className='authSocialBtn'>
                            <div className='authSocialBtnImg'>
                                <img src={process.env.PUBLIC_URL + '/assets/icons/apple.png'} alt='icon' />
                            </div>
                        </div>
                        <div className='authSocialBtn'>
                            <div className='authSocialBtnImg'>
                                <img src={process.env.PUBLIC_URL + '/assets/icons/google.png'} alt='icon' />
                            </div>
                        </div>
                        <div className='authSocialBtn'>
                            <div className='authSocialBtnImg'>
                                <img src={process.env.PUBLIC_URL + '/assets/icons/facebook.png'} alt='icon' />
                            </div>
                        </div>
                    </div>




                    <div className='authBtmText'>Already have an account? <span>Log In</span></div>
                </div>
            </div>
        </div>
    )
}