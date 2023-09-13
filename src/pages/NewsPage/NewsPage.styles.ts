import styled from "styled-components";

export const NewsPageWrapper = styled.div`
  padding: 20px;
`;

export const BackButton = styled.button`
  background-color: #151515;
  color: white;
  font-size: 20px;
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
`;

export const NewsPageDataWrapper = styled.div`
  gap: 20px;
  margin-top: 20px;
  color: white;
  display: flex;
  p,
  div,
  img {
    font-size: 20px;
    margin-bottom: 20px;
  }
  img {
    width: 100%;
  }
  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

export const NewsPageDescriptionWrapper = styled.div`
  width: 70%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const NewsPageDetailsWrapper = styled.div`
  width: 30%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const NewsPageBoldDetail = styled.span`
  font-weight: 700;
`;
