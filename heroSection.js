import React, { useEffect, useState } from 'react'
import '../../styles/heroSection.css'
import axios from 'axios';
import { apiEndpoint } from '../../apiEnpoint';

const HeroSlideMovie = ({data}) => (
    <div className='heroSlideMovie'>
        <div className='heroSlideMovieThumbnail'>
            <img src={data?.Poster} alt="thumbnail" />
        </div>
        <div className='heroSlideMovieLeft'>
            <div className='heroMovieDetails'>
                <div className='heroMovieTitle'>{data?.Title}</div>

                <div className='heroInfoTab'>
                    <div className='heroInfoText'>{data?.Year}</div> <div className='heroInfoDemacator'></div>
                    <div className='heroInfoText'>{data?.Rated}</div> <div className='heroInfoDemacator'></div>
                    <div className='heroInfoText'>{data?.Runtime}</div> <div className='heroInfoDemacator'></div>
                    <div className='heroInfoText'>{data?.Genre.split(',')[0]}</div>
                    {
                        data?.Type==='series' ?
                        <>
                            <div className='heroInfoDemacator'></div>
                            <div className='heroInfoText'>Series</div>
                        </> : 
                        <></>
                    }
                </div>

                <div className='heroMovieDesc'>{data?.Plot}</div>

                <div className='heroBtnTab'>
                    <button className='primary heroRentButton'>Rent for ${data?.Metascore}</button>
                    <div className='heroBuyBtn'><img src={process.env.PUBLIC_URL + '/assets/icons/cart-plus.png'} alt="icon" /></div>
                </div>
            </div>
        </div>
    </div>
)

export default function HeroSection() { 
    //DUMMY DATA
    const [specialMovies, setSpecialMovies] = useState();

    function fetchFM() {
        try {
            axios.get(`${apiEndpoint}/movies?imdbRating_gt=8`)
            .then((res)=>{
                //console.log('api result: ', res);
                if(res.status === 200){
                    setSpecialMovies(res.data);
                }
            })
            .catch(err => {
                console.log(err);
            })
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        fetchFM();
    }, [])

    //HANDLE SLIDE SHOW
    const delay = 7500;

    const [index, setIndex] = useState(0);
    const timeoutRef = React.useRef(null); 

      
    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }
    
    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(() => {
            setIndex((prevIndex) => !specialMovies ? 0 : prevIndex === specialMovies.length - 1 ? 0 : prevIndex + 1 )
        },delay);
    
        return () => {
            resetTimeout();
        };
    }, [specialMovies, index]);

    //MOVIE STUDIOS ARRAY 
    const movieStudios = ['brand-disney', 'brand-netflix', 'brand-pixar' , 'brand-hbo', 'brand-starwars', 'brand-marvel', 'brand-warner']; 
 
    return (  
        <div className='heroSection'>

            <div className="slideshow">
                <div
                    className="slideshowSlider"
                    style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }} 
                >
                    {specialMovies ? specialMovies.map((item, index) => <HeroSlideMovie data={item} />) : <></>}
                </div>

                <div className="slideshowDots">
                    {specialMovies ? specialMovies.map((_, idx) => (
                    <div
                        key={idx}
                        className={`slideshowDot${index === idx ? " active" : ""}`}
                        onClick={() => {
                        setIndex(idx);
                        }}
                    ></div>
                    )) : <></>}
                </div>
            </div>


            <div className='heroBrandList'>
            {
                movieStudios.map((item, index) => <div key={index} className='heroBrand'><img src={process.env.PUBLIC_URL + '/assets/icons/' + item + '.png'} alt='icon' /></div>)
            }
            </div>
            
        </div>
    )
}