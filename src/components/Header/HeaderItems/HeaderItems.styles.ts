import styled from "styled-components";

export const HeaderItemsWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  @media (max-width: 768px) {
    justify-content: center;
    margin-bottom: 15px;
  }
`;

export const HeaderItemWrapper = styled.div`
  background-color: #2b2b2b;
  border-radius: 5px;
  display: flex;
  padding: 10px 20px;
`;

export const HeaderItemCountWrapper = styled.div`
  display: flex;
  margin-left: 10px;
`;

export const HeaderItemNumberWrapper = styled.div<{ activeitem: string }>`
  display: flex;
  margin-left: 10px;
  cursor: pointer;
  color: ${({ activeitem }) => (activeitem === "true" ? "red" : "white")};
`;
