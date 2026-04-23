import styled from "styled-components";
import { Link } from "react-router";

export const Wrapper = styled.div`
  min-height: 100dvh;
  background: #eee;
  padding: 20px 40px;
`;

export const SearchTitle = styled.h2`
  margin-bottom: 20px;
`;

export const ListWrapper = styled.div`
  display: flex;
  justify-content: center;
  max-width: 1150px;
  flex-wrap: wrap;
  border: 1px solid #999;
  background: white;
`;

export const Loading = styled.div`
  font-size: 2rem;
  font-weight: bold;
  align-self: center;
`;

export const MovieWrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 20%;
  height: 400px;
  padding: 20px;
  transition: all 0.5s;

  &:hover {
    background: #ddd;
    transform: scale(1.05);
  }
`;

export const MovieImage = styled.img`
  width: 80%;
  height: 90%;
`;

export const MovieTitle = styled.div`
  width: 200px;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: bold;
  font-size: 1.25rem;
`;
