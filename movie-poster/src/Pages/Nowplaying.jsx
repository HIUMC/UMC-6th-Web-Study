import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Movie from '../component/MoviePosterMain/Movie';
import Loading from '../component/MoviePosterMain/Loading';

export const Body = styled.div`
  background-color: #242756;
`;

export const NowplayingContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

function Nowplaying() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=83afb7f172cb3af5f9187f5bc6e3e2c8&language=ko-KR&page=1');
        console.log('nowplaying API 응답:', response.data);
        setMovies(response.data.results); // 변경된 부분
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching upcoming movies:', error);
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return (
    <NowplayingContainer>
      {isLoading ? (
        <Loading/>
      ) : (
        <>
          {movies.map(movie => (
            <Movie
              key={movie.id}
              title={movie.title}
              poster_path={movie.poster_path}
              vote_average={movie.vote_average}
              overview={movie.overview}
            />
          ))}
        </>
      )}
    </NowplayingContainer>
  );
}

export default Nowplaying;