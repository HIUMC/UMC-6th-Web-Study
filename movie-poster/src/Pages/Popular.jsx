import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Movie from '../component/MoviePosterMain/Movie';
import Loading from '../component/MoviePosterMain/Loading';

export const Body = styled.div`
  background-color: #242756;
`;

export const PopularContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

function Popular() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true); //데이터를 로드 중인지 여부

  useEffect(() => {
    const fetchMovies = async () => { // async객체를 이용한 promise를 반환하는 함수
      try {
        const response = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=83afb7f172cb3af5f9187f5bc6e3e2c8&language=ko-KR&page=1');
        console.log('popular API 응답:', response.data);
        setMovies(response.data.results); // setMovies를 이용해 데이터를 movies에 저장.
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching popular movies:', error);
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, []); // Api 데이터를 화면이 렌더링 되는 순간 불러와지고 가공되어 화면에 나타나야 함. 그래서 mount 순간에 동작!

  return (
    <PopularContainer>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {movies.map(movie => ( //movies 배열을 map 함수로 순회하며 각 영화 데이터를 Movie 컴포넌트로 전달
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
    </PopularContainer>
  );
}

export default Popular;