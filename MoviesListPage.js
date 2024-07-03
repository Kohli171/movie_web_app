import React from 'react'
import SearchBlockComp from '../components/moviesListPageComp/searchBlockComp'
import MovieListComp from '../components/moviesListPageComp/movieListComp'

export default function MoviesListPage({listType, seeDetail, setMovieId, setMovieData}) {
    return (
        <div>
            <SearchBlockComp listType={listType} />
            <MovieListComp seeDetail={seeDetail} setMovieId={setMovieId} setMovieData={setMovieData} listType={listType} />
        </div>
    )
}