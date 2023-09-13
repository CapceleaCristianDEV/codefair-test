import styled from "styled-components";

export const AppLayoutWrapper = styled.div`
  padding: 80px 20px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  @media (max-width: 768px) {
    padding-top: 135px;
  }
  @media (max-width: 635px) {
    padding-top: 185px;
  }
`;
