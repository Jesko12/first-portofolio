import styled from "styled-components";

export const Agrocery = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid #05807C;
  height: 100px;
  color: #1e212d;

  & > p {
    margin: 5px;
    font-size: 14px;
  }
`;

export const SidebarNav = styled.nav`
  background: #fff;
  width: 200px;
  display: ${({ clicked }) => (clicked ? "flex" : "none")};
  justify-content: center;
  position: fixed;
  left: 0;
  margin-top: 60px;
  transition: 0.5s ease-out;

  @media (min-width: 1024px) {
    width: 200px;
    display: flex;
    justify-content: center;
    position: fixed;
    left: 0;
  }
`;

export const SidebarWrap = styled.div`
  width: 100%;
  display: flex;
  height: 100vh;
  justify-content: flex-start;
  flex-direction: column;
  color: #1e212d;

  @media (min-width: 1024px) {
    & > img {
      height: 4rem;
    }
  }
`;
