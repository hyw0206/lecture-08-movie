import { HomeTitle, SearchButton, SearchInput, SearchForm, Wrapper } from "../components/Home.ts";
import { useNavigate, useSearchParams } from "react-router";
import { type ChangeEvent, type SubmitEvent, useState } from "react";

export default function Home() {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState<string>("");

  const [searchParams] = useSearchParams();
  const paramsKeyword = searchParams.get("keyword");

  const onChangeKeyword = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const onSubmitKeyword = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const k = keyword.trim();
    if (!k) return;
    navigate(`/search?keyword=${k}`);
  };
  return (
    <Wrapper>
      <HomeTitle>Movie Search System</HomeTitle>
      <SearchForm onSubmit={onSubmitKeyword}>
        <SearchInput
          placeholder="Search movies..."
          onChange={onChangeKeyword}
          defaultValue={paramsKeyword ? paramsKeyword : ""}
        />
        <SearchButton>Search</SearchButton>
      </SearchForm>
    </Wrapper>
  );
}
