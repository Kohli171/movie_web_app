import React from 'react'
import HeroSection from '../components/homePageComp/heroSection'
import FeaturedMovieSection from '../components/homePageComp/featuredMovieSection'
import FeaturedSeriesSection from '../components/homePageComp/featuredSeriesSection'


export default function HomePage({seeDetail, setMovieId, setMovieData}) {
    return (
        <div>
            <HeroSection />
            <FeaturedMovieSection seeDetail={seeDetail} setMovieId={setMovieId} setMovieData={setMovieData} />
            <FeaturedSeriesSection seeDetail={seeDetail} setMovieId={setMovieId} setMovieData={setMovieData} />
        </div>
    )
}