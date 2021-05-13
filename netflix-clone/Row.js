import React, { useState, useEffect } from 'react'
import axios from './axios.js'
import './Row.css'
import Youtube from 'react-youtube'
import movieTrailer from 'movie-trailer'

function Row(props) {
    const base_url = 'https://image.tmdb.org/t/p/original/'
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState('');
    useEffect(() => {
        async function fetchData() {
            const req = await axios.get(props.fetchUrl)
            setMovies(req.data.results)
        }
        fetchData()
    }, [props.fetchUrl])

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            autoplay: 1,
        }
    }

    const handleClick=(movie)=>{
        if(trailerUrl){
            setTrailerUrl('')
        }
        else{
            movieTrailer(movie?.name||movie?.title).then((url)=>{
                console.log(new URL(url))
                const URLParams=new URLSearchParams(new URL(url).search)
                setTrailerUrl(URLParams.get('v'))
            }).catch(err=>{console.log(err)})
        }
    }
    
    return(
        <div className = 'row' >
            <h2>{props.title}</h2>
            <div className="rowContent">
                {movies.map(movie=>(
                    <img onClick={()=>handleClick(movie)} key={movie.id} src={`${base_url}${props.isLargeRow?movie.poster_path:movie.backdrop_path}`} className={`row_image ${props.isLargeRow && 'row_posterLarge'}`} alt=""/> 
                ))}
            </div>
            {trailerUrl&&<Youtube videoId={trailerUrl} opts={opts}></Youtube>}
        </div >
    )
}

export default Row
