import React from 'react'
import "./HomeScreen.css"
import Banner from '../Banner/Banner';
import requests from '../Requests';
import Row from '../Row/Row';
import Navigation from '../Navbar/Navigation';

const HomeScreen = () => {
    return (
        <div  className="app">
			<Navigation />
			<Banner />
			<Row title="TMDB ORIGINALS" isLargeRow fetchUrl={requests.fetchNetflixOriginals} />
			<Row title="Trending" fetchUrl={requests.fetchTrending} />
			<Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
			<Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
			<Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
			<Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
			<Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
			<Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
		</div>
    )
}

export default HomeScreen
