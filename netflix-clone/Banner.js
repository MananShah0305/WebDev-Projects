import React, { useState, useEffect } from 'react'
import axios from './axios.js'
import requests from './requests.js'
import './Banner.css'

function Banner() {
    const base_url = 'https://image.tmdb.org/t/p/original/'
    const [movie, setMovie] = useState([])

    useEffect(() => {
        async function fetchData() {
            const req = await axios.get(requests.fetchNetflixOriginals)
            setMovie(req.data.results[Math.floor(Math.random() * req.data.results.length - 1)])
            // console.log(movie);After the setMovie() statement below,only then a value is given to movies.So console logging inside the useEffect will return an empty array
            // return req;
        }
        fetchData()
    }, [])
    // console.log(movies)
    
    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + '...' : str
    }
    return (
        // We need both header and div in this case as the header layer will have the bg image while the div layer above it will have al the contents lke the title,buttons and all.Alternative is to use the pseudo selector 'before' and then only have one layer,i.e. the div layer
        <header className="banner" style={{ background: `url(${base_url}${movie?.backdrop_path}) no-repeat center center/cover` }}>
            <div className='bannerContents'>
                <h1 className="bannerTitle">
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className="bannerButtons">
                    <button className="button">Play</button>
                    <button className="button">MyList</button>
                </div>
                <h4 className="bannerOverview">
                    {truncate(movie?.overview, 150)}
                </h4>
            </div>
            <div className="bottom">
            </div>
        </header>
    )
}

export default Banner
