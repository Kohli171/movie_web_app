import React, { useEffect, useState } from 'react'
import '../../styles/movieListComp.css'
import MovieListTabComp from '../subComponents/movielistTabComp';
import axios from 'axios';
import { apiEndpoint } from '../../apiEnpoint';

export default function MovieListComp({seeDetail, setMovieId, setMovieData, listType}) {
    //DUMMY DATA
    const [movieList, setMovieList] = useState();

    function fetchFM() {
        try {
            axios.get(`${apiEndpoint}/movies?Type=${listType=='movies' ? 'movie' : 'series'}`)
            .then((res)=>{
                //console.log('api result: ', res);
                if(res.status === 200){
                    setMovieList(res.data);
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
    }, [listType])

    return (
        <div className='mlcBlock'>
            <div className='movieListComp'>
            { 
                movieList ? movieList.map((item, index) => <MovieListTabComp key={index} data={item} seeDetail={seeDetail} setMovieId={setMovieId} setMovieData={setMovieData} />) : 
                <></>
            }
            </div>

            <div className='movieListPagination'>
                <div className='movieListPgnBtn'>Prev</div>
                <div className='movieListPgnValue'>1 / 12</div>
                <div className='movieListPgnBtn'>Next</div>
            </div>
        </div>
    )
}