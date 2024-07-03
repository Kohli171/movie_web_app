import React, {useEffect, useState} from 'react'
import '../../styles/featuredMovieSection.css'
import MovieTabComp from '../subComponents/movieTabComp';
import axios from 'axios';
import { apiEndpoint } from '../../apiEnpoint';

export default function FeaturedMovieSection({seeDetail, setMovieId, setMovieData}) {
    //DUMMY DATA
    const [featuredMovies, setFeaturedMovies] = useState();

    function fetchFM() {
        try {
            axios.get(`${apiEndpoint}/movies?Type=movie`)
            .then((res)=>{
                //console.log('api result: ', res);
                if(res.status === 200){
                    setFeaturedMovies(res.data);
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

    return (
        <div className='featuredMovieSection'>
            <div className='featuredMovieSectionHeader'>
                <div className='featuredMovieSectionTitle'>Featured Movies</div>
                <div className='featuredMovieSectionLink'>See all</div>
            </div>

            <div className='featuredMovieList'>
                {
                    featuredMovies ? featuredMovies.map((item, index) => <MovieTabComp key={index} data={item} seeDetail={seeDetail} setMovieId={setMovieId} setMovieData={setMovieData} />) : <></>
                }
            </div>
        </div>
    )
}