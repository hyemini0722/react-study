import React from "react";
import { useNavigate } from "react-router-dom";

export const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280/";

function Movie(props) {

const navigate = useNavigate();

const onClickMovieItem = () => {
    navigate(`/movie/${props.original_title}`, {
        state: props
    })

}

    return (
        <div className="movie-container" onClick={onClickMovieItem}>
            <img src={IMG_BASE_URL + props.poster_path} alt="영화 포스터"/>
            <div className="movie-info">
                <h2>{props.title}</h2>
                <span>{props.vote_average}</span>
            </div>
        </div>
    )
}

export default Movie;