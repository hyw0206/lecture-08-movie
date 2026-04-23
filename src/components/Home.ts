import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 40px;
  gap: 40px;
  background: #eee;
`;

export const HomeTitle = styled.h1`
  font-size: 2rem;
`;

export const SearchForm = styled.form`
  display: flex;
  gap: 8px;
  width: 100%;
  margin-bottom: 40px;
`;

export const SearchInput = styled.input`
  width: 320px;
  padding: 12px;
  border: 1px solid #999;
  border-radius: 8px;
`;

export const SearchButton = styled.button`
  padding: 12px;
  border-radius: 8px;
  background-color: rgba(255, 0, 0, 0.8);
  border: 1px solid #999;
  color: white;
`;
