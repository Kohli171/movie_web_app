import './App.css';
import { useState, useEffect } from 'react';
import LoginModalComp from './components/authPageComp/loginModalComp';
import SignupModalComp from './components/authPageComp/signupModalComp';

import HeaderComp from './components/headerComp';
import FooterComp from './components/footerComp';

import HomePage from './views/HomePage';
import MoviesListPage from './views/MoviesListPage';
import MovieDetailsPage from './views/MovieDetailsPage';

function App() {
  //HANDLE VISIBLE PAGE
  const [activePage, setActivePage] = useState('home'); 
  const [movieOnDisplayId, setMovieOnDisplayId] = useState('');
  const [movieOnDisplay, setMovieOnDisplay] = useState('');

  useEffect(() => {
    console.log('clicked - ', activePage);
    const topOfScreen = document.getElementById('topOfScreen');
    topOfScreen.scrollIntoView();
  }, [activePage, movieOnDisplayId]);
  

  //HANDLE AUTH POPUP MODAL
  const [authModal, toggleAuthModal] = useState(false);
  const [activeAuthScreen, setActiveAuthScreen] = useState('login');

  return (
    <div className="App">
      <HeaderComp selectActiveScreen={setActiveAuthScreen} setModal={toggleAuthModal} activePage={activePage} selectActivePage={setActivePage} />
      <div id="topOfScreen"></div>
      <main>
        {
          activePage === 'detail' ? <MovieDetailsPage seeDetail={setActivePage} data={movieOnDisplay} setMovieId={setMovieOnDisplayId} setMovieData={setMovieOnDisplay} /> : 
          activePage === 'movies' || activePage === 'series' ? <MoviesListPage listType={activePage} seeDetail={setActivePage} setMovieId={setMovieOnDisplayId} setMovieData={setMovieOnDisplay} /> :
          <HomePage seeDetail={setActivePage} setMovieId={setMovieOnDisplayId} setMovieData={setMovieOnDisplay} />
        }
      </main>
      <FooterComp />


      {/**AUTHENTICATION SCREENS */}
      {
        authModal ? 
        <>
        {
          activeAuthScreen === 'login' ?
          <LoginModalComp handleClick={()=>{toggleAuthModal(false)}} /> :
          <SignupModalComp handleClick={()=>{toggleAuthModal(false)}} />
        }
        </> : 
        <></>
      }
    </div>
  );
}

export default App;
