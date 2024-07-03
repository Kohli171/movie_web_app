import React from 'react'
import '../../styles/movieListComp.css'

export default function MovieListTabComp({data, seeDetail, setMovieId, setMovieData}) {
    
    function selectMovie(){
        setMovieId(data?.imdbID);
        setMovieData(data); 
        seeDetail('detail');
    }
    
    return (
        <div onClick={()=>{selectMovie()}} className='movieListTab'>
            <div className='movieListThumbnail'>
                <img src={data?.Poster} alt='thumbnail' />

                <div className='movieListRating'>
                    <div className='movieListRatingImg'>
                        <img src={process.env.PUBLIC_URL + '/assets/icons/star.png'} alt="icon" />
                    </div>
                    <div className='movieListRateText'>{data?.imdbRating}</div>
                </div>
            </div>

            <div className='movieListDesc'>
                <div className='movieListTitle'>{data?.Title}</div>

                <div className='movieListMeta'>{data?.Plot}</div> 

                <div className='movieListInfoTab'>
                    <div className='movieListInfoText'>{data?.Runtime}</div> <div className='movieListInfoDemacator'></div>
                    <div className='movieListInfoText'>{data?.Genre.split(',')[0]}</div>
                </div>
            </div>
            
        </div>
    )
}