import styled from "styled-components";
import { appSizes } from "styles";

export const HeaderWrapper = styled.header`
  padding: 15px 20px;
  color: white;
  align-items: center;
  background-color: #151515;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  @media (max-width: ${appSizes.tablet}) {
    justify-content: center;
  }
`;

export const HeaderLogoWrapper = styled.header`
  font-size: 25px;
  font-weight: bold;
  padding: 10px 0;
`;
