import React from 'react'
import '../../styles/authComp.css'
import AuthInputComp from '../subComponents/authInputComp'

export default function LoginModalComp({handleClick}) {
    return (
        <div className='authModal'>
            <div className='authScreenBlock'>
                <div onClick={handleClick} className='closeModalBtn'><img src={process.env.PUBLIC_URL + '/assets/icons/chevron-left.png'} alt='icon' /></div>

                <div className='authForm'>
                    <div className='authLogo'><img src={process.env.PUBLIC_URL + '/assets/icons/logo.png'} alt='icon' /></div>
                    <div className='authTitle'>Welcome back</div>
                    <div className='authSub'>Please enter your details to continue</div>

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

                    <div data-name='or' className='authDemacator'></div>

                    <AuthInputComp label={'Email address'} placeholder={'Ex. johnsmith@gmail.com'} />
                    <AuthInputComp label={'Password'} placeholder={'xxxxxxxx'} inputType={'password'} />

                    <div className='authForgotBlock'>
                        <div className='authCheckbox'>
                            <input type='checkbox' id='check' />
                            <label for='check'>Remember me</label>
                        </div>

                        <div className='authForgotText'>Forgot password?</div>
                    </div>

                    <button className='primary authBtn'>Log in</button> 

                    <div className='authBtmText'>Don't have an account yet? <span>Sign Up</span></div>
                </div>
            </div>
        </div>
    )
}