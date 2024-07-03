import React from 'react'
import '../../styles/featuredMovieSection.css'

export default function MovieTabComp({data, seeDetail, setMovieId, setMovieData}) {
    
    function selectMovie(){
        setMovieId(data?.imdbID);
        setMovieData(data); 
        seeDetail('detail');
    }

    return (
        <div onClick={()=>{selectMovie()}} className='featuredMovieTab'>
            <div className='featuredMovieThumbnail'>
                <img src={data?.Poster} alt='thumbnail' />
            </div>

            <div className='featuredMovieDetails'>

                <div className='featuredMovieRating'>
                    <div className='featuredMovieRatingImg'>
                        <img src={process.env.PUBLIC_URL + '/assets/icons/star.png'} alt="icon" />
                    </div>
                    <div className='featuredMovieRateText'>{data?.imdbRating}</div>
                </div>

                <div className='featuredMovieDesc'>
                    <div className='featuredMovieTitle'>{data?.Title}</div>

                    <div className='featuredMovieInfoTab'>
                        <div className='featuredMovieInfoText'>{data?.Rated}</div> <div className='featuredMovieInfoDemacator'></div>
                        <div className='featuredMovieInfoText'>{data?.Genre.split(',')[0]}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}