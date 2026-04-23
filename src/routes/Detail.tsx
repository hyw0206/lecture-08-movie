import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import * as S from "../components/Detail";
type MovieDetail = {
  Title: string;
  Year: string;
  Poster: string;
  Plot: string;
  Genre: string;
  Director: string;
};

type ApiResponseType = MovieDetail & {
  Response: string;
  Error?: string;
};

export default function Detail() {
  const [movie, setMovie] = useState<ApiResponseType>();
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (!id) return;
    fetch(`https://www.omdbapi.com/?apikey=6a0a8eb4&i=${id}&plot=full`)
      .then(r => r.json())
      .then(json => {
        setMovie(json);
      })
      .catch(e => {
        console.log(e);
      });
  }, [id]);

  useEffect(() => {
    console.log(movie);
  }, [movie]);
  return (
    <S.Wrapper>
      {movie?.Response === "False" || !movie ? (
        !movie ? (
          <S.Loading>로딩 중....</S.Loading>
        ) : (
          <S.Loading>통신 중 에러가 발생했습니다 : {movie?.Error}</S.Loading>
        )
      ) : (
        <div>
          <S.BackBtn
            onClick={() => {
              navigate(-1);
            }}>
            &larr; 뒤로가기
          </S.BackBtn>
          <S.MovieWrapper>
            <div>
              <S.MovieTitle>{movie.Title}</S.MovieTitle> <S.MovieYear>({movie.Year})</S.MovieYear>
              <div>{movie.Genre}</div>
              <div>{movie.Director}</div>
              <img src={movie.Poster} alt={movie.Title} />
            </div>
            <S.MoviePlot>{movie.Plot}</S.MoviePlot>
          </S.MovieWrapper>
        </div>
      )}
    </S.Wrapper>
  );
}
