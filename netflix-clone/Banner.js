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
        }
        fetchData()
    }, [])
    
    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + '...' : str
    }
    return (
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
