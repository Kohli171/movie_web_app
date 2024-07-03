import React from 'react'
import '../../styles/authComp.css'

export default function AuthInputComp({label, placeholder, inputType}) {
    return (
        <div className='authInputTab'>
            <label className='authInputLabel'>{label}</label>
            <div className='authInputInput'>
                <input type={inputType === 'password' ? 'password' : 'text'} placeholder={placeholder} />
            </div>
        </div>
    )
}