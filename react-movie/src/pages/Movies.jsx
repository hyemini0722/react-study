import React from 'react';
import { movieDummy } from '../movieDummy';
import Movie from '../components/Movie';

function Movies() {
    return (
        <div>
            <div className='movies-container'>
                {movieDummy.results.map((item) => {
                    return (
                        <Movie 
                            key={item.id}
                            title={item.title}
                            original_title={item.original_title}
                            poster_path={item.poster_path}
                            vote_average={item.vote_average}
                            overview={item.overview}
                        />
                    );
                })}
            </div>
        </div>
    )
}

export default Movies;