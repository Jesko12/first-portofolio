import styled from 'styled-components';

export const AppWrapper = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

export const AuthContainer = styled.div`
  padding: 42px;
  background: #FFFFFF;
  box-shadow: 0px 5px 40px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  display: flex;
  flex-direction: column;

  & > h1 {
    font-size: 24px;
    margin-bottom: 78px;
  }
`;

export const InputForm = styled.input`
  border: 1px solid rgba(51, 51, 51, 0.5);
  border-radius: 10px;
  height: 60px;
  display: block;
  font-size: 1rem;
  padding-left: 1rem;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: none;
  width: 100%;
  background: #fff;
`;

export const Button = styled.button`
  border-radius: 5px;
  padding: 1rem;
  width: 100%;
  background: ${({backgroundColor}) => backgroundColor};
  border: 0;
  color: #fff;
  font-size: 18px;

  &:disabled {
    background: #c4c4c4;
  }
`;

export const SizedBox = styled.div`
  margin-bottom: ${({height}) => height};
`;

export const SvgWrapper = styled.div`
  position: absolute;
  top: ${({top}) => top ? top : "auto"};
  bottom: ${({bottom}) => bottom ? bottom : "auto"};
  left: ${({left}) => left ? left : "auto"};
  right: ${({right}) => right ? right : "auto"};
`;