import { styled } from "styled-components";

export const VideoCardWrapper = styled.div`
  cursor: pointer;
  p,
  div,
  img {
    margin-bottom: 15px;
  }
  border: 6px solid #a6a6a6;
  border-radius: 10px;
  padding: 20px;
  width: 360px;
  height: 400px;
  color: white;
  overflow-y: auto;
  background-color: #151515;
  transition: 0.3s;

  a {
    color: red;
    text-decoration: none;
  }
  &:hover {
    scale: 1.04;
    opacity: 0.8;
  }
`;

export const VideoImageDescriptionWrapper = styled.div`
  img {
    width: 100%;
  }
`;
