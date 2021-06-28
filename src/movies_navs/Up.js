import React from 'react'
import PopularMovies from '../movies_provider/PopularMovies';
import Upcoming from '../navs/Upcoming';

const Up = () => {
  const { data, loading } = PopularMovies('https://api.themoviedb.org/3/movie/upcoming?api_key=2a0f926961d00c6691a2c14461f8&language=en-US&page=1');
  return (
    <div>
      {data && <Upcoming movies={data} />}
    </div>
  )
}

export default Up
