import React from "react";
import { useLocation } from "react-router-dom";
import { IMG_BASE_URL } from "../components/Movie";

function MovieDetail() {

const {state} = useLocation();

    return (
        <div className="page-container" style={{fontSize: '32px'}}>
            <div style={{display: "flex"}}>
                <img
                    style={{width: "300px", height: "450px"}}
                    src={IMG_BASE_URL + state.poster_path}
                    alt="영화 포스터"
                />
                <div style={{padding: '20px'}}>
                    <div style={{fontSize: "40px", marginBottom: "30px"}}>
                        {state.title}
                    </div>
                    <div style={{fontSize: "20px"}}>
                        {state.overview}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieDetail;