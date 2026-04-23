import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import * as S from "../components/Search.ts";
import Home from "./Home.tsx";

type MovieItem = {
  imdbID: string;
  Poster: string;
  Title: string;
  Year: string;
};

type ApiResponseType = {
  Search: MovieItem[];
  totalResults?: number;
  Response: string;
  Error?: string;
};

export default function Search() {
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get("keyword");

  const [loading, setLoading] = useState(true);
  const [list, setList] = useState<ApiResponseType>();
  useEffect(() => {
    if (!keyword) return;

    fetch(`https://www.omdbapi.com/?apikey=6a0a8eb4&s=${keyword}`)
      .then(r => r.json())
      .then((json: ApiResponseType) => {
        setList(json);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      });
  }, [keyword]);
  useEffect(() => {
    console.log(list);
  }, [list]);
  return (
    <>
      <Home />

      <S.Wrapper>
        <S.SearchTitle>
          검색 결과 : {keyword} {list?.totalResults && `(${list.totalResults}개의 검색 결과)`}
        </S.SearchTitle>
        <S.ListWrapper>
          {loading && <S.Loading>로딩 중입니다....</S.Loading>}
          {list?.Response === "False" ? (
            <S.Loading>통신 중 에러가 발생했습니다 : {list.Error}</S.Loading>
          ) : (
            list?.Search.map((movie: MovieItem) => (
              <S.MovieWrapper key={movie.imdbID} to={`/detail/${movie.imdbID}`} title={movie.Title}>
                <S.MovieImage src={movie.Poster} alt={`Poster not found - ${movie.Title}`} />
                <S.MovieTitle>
                  <span>{movie.Title}</span> <span>({movie.Year})</span>
                </S.MovieTitle>
              </S.MovieWrapper>
            ))
          )}
        </S.ListWrapper>
      </S.Wrapper>
    </>
  );
}
