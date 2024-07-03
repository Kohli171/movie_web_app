import React from 'react'
import '../../styles/searchBlockComp.css'

export default function SearchBlockComp({listType}) {
    return (
        <div className='searchBlockComp'>
            <div className='searchBlockTitle'>Find Any Show</div>

            <div className='searchBlockPlane'>
                <div className='searchBlockTagList'>
                    <div className='searchBlockTag active'>All</div>
                    <div className='searchBlockTag'>Action</div>
                    <div className='searchBlockTag'>Comedy</div>
                    <div className='searchBlockTag'>Tragedy</div>
                </div>

                <div className='searchBlockInpBlock'>
                    <div className='searchBlockInpIcon'><img src={process.env.PUBLIC_URL + "/assets/icons/search-dark.png"} alt="icon" /></div>
                    <div className='searchBlockActive'>{listType}</div>
                    <div className='searchBlockInpTab'><input type="text" placeholder='Search movie or TV series' /></div>
                </div>
            </div>
        </div>
    )
}