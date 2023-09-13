import styled from "styled-components";

export const PaginationWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px 0;
  gap: 20px;
  width: 100%;
  align-items: center;
`;

export const PaginationItem = styled.div<{ activepage: string }>`
  background-color: black;
  color: ${(props) => (props.activepage === "true" ? "red" : "white")};
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background-color: #2e2e2e;
  }
`;
