import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100dvh;
  background: #eee;
  padding: 20px 0 0 40px;\
`;

export const Loading = styled.div`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
`;

export const MovieWrapper = styled.div`
  padding: 24px;
  border: 1px solid #999;
  display: flex;
  gap: 16px;
  max-width: 1000px;
`;

export const MovieTitle = styled.span`
  font-size: 1.75rem;
  font-weight: bold;
`;
export const MovieYear = styled.span`
  font-size: 0.75rem;
  color: rgba(0, 0, 0, 0.9);
`;

export const MoviePlot = styled.div`
  width: 400px;
  padding-top: 8px;
`;

export const BackBtn = styled.button`
  display: flex;
  align-items: center;
  padding: 8px 14px;
  margin-bottom: 24px;
  border-radius: 6px;
  border: 1px solid #ccc;
  background-color: #f3f3f3;
  color: #333;
  cursor: pointer;
  transition: all 0.5s;
  align-self: flex-start;
  :hover {
    background-color: #e0e0e0;
    border-color: #999;
  }
`;
