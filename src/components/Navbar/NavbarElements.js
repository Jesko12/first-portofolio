import styled from "styled-components";

export const Nav = styled.div`
  background: #05807C;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;

  & > h1 {
    font-size: 21px;
    color: #fff;
    margin: 0;
  }
`;


export const Menu = styled.div`
  cursor: pointer;
  @media (min-width: 1024px) {
    display: none;
  }
`;
