import React from 'react'
import '../styles/movieDetailsPage.css'
import SimilarMovieSection from '../components/homePageComp/similarMovieSection'

export default function MovieDetailsPage({seeDetail, data, setMovieId, setMovieData}) {
    return (
        <div>
            <div className='movieDetailThumbnail'>
                <div onClick={()=>{seeDetail(data?.Type==='movie' ? 'movies' : 'series')}} className='movieDetialBackBtn'><img src={process.env.PUBLIC_URL + '/assets/icons/chevron-left.png'} alt='icon' /><span>Go to list</span></div>
                <img src={data?.Poster} alt='thumbnail' />
            </div>

            <div className='mdMovieDetails'>
                <div className='mdMovieDetailsTop'>
                    <div className='mdMovieDetailsLeft'>
                        <div className='mdMovieTitle'>{data?.Title}</div>

                        <div className='mdInfoTab'>
                            <div className='mdInfoText'>{data?.Year}</div> <div className='mdInfoDemacator'></div>
                            <div className='mdInfoText'>{data?.Rated}</div> <div className='mdInfoDemacator'></div>
                            <div className='mdInfoText'>{data?.Runtime}</div> <div className='mdInfoDemacator'></div>
                            <div className='mdInfoText'>{data?.Genre.split(',')[0]}</div> <div className='mdInfoDemacator'></div>
                            <div className='mdRating'>
                                <div className='mdRatingImg'>
                                    <img src={process.env.PUBLIC_URL + '/assets/icons/star.png'} alt="icon" />
                                </div>
                                <div className='mdRateText'>{data?.imdbRating}</div>
                            </div>
                        </div>
                    </div>

                    <div className='mdBtnTab'>
                        <button className='primary mdRentButton'>Rent for ${data?.Metascore}</button>
                        <div className='mdBuyBtn'><img src={process.env.PUBLIC_URL + '/assets/icons/cart-plus.png'} alt="icon" /></div>
                    </div>
                </div>
            </div>

            <div className='mdDemacator'></div>

            <div className='mdMovieSection'>
                <div className='mdMovieSectionHeading'>Plot Summary</div>
                <div className='mdMovieSectionDesc'>{data?.Plot}</div>
            </div>

            <div className='mdDemacator'></div>

            <div className='mdMovieSection'>
                <div className='mdMovieSectionHeading'>Casts</div>
                <div className='mdMovieSectionDesc'>{data?.Actors}</div>
            </div>

            <div className='mdDemacator'></div>

            <div className='mdMovieSection'>
                <div className='mdMovieSectionHeading'>Genres</div>
                <div className='mdMovieSectionDesc'>{data?.Genre}</div>
            </div>

            <div className='mdDemacator'></div>

            <div className='mdMovieSection'>
                <div className='mdMovieSectionHeading'>Language & Subtitle</div>
                <div className='mdMovieSectionDesc'>{data?.Language}</div>
            </div>

            <div className='mdDemacator'></div>

            <div className='mdMovieSection'>
                <div className='mdMovieSectionHeading'>Director & Awards</div>
                <div className='mdMovieSectionDesc'>{data?.Director} - {data?.Awards}</div>
            </div>

            <div className='mdDemacator'></div>

            <SimilarMovieSection seeDetail={seeDetail} similarType={data?.Type} currentId={data?.imdbID} setMovieId={setMovieId} setMovieData={setMovieData} />
        </div>
    )
}