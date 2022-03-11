import styled from "styled-components";
import { usePromiseTracker } from "react-promise-tracker";

export const InputTextArea = styled.textarea`
  background-color: #f8fafc;
  border: 1px solid #dfe3e9;
  font-size: 1rem;
  display: block;
  width: 100%;
  padding: 0.5rem 1rem;
  border-radius: 10px;
  margin-bottom: 1rem;

  &:focus {
    outline: 0;
  }
`;

export const FormInput = styled.input`
  background-color: #f8fafc;
  border: 1px solid #dfe3e9;
  font-size: 1rem;
  display: block;
  width: 100%;
  padding: 0.5rem 1rem;
  border-radius: 10px;
  margin-bottom: 1rem;

  &:focus {
    outline: 0;
  }
`;

export const FormInputFile = styled.input`
  background-color: #f8fafc;
  font-size: 1rem;
  display: none;
  width: 100%;
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;

  &:focus {
    outline: 0;
  }
`;

export const FormLabel = styled.label`
  color: #7f8fa4;
  font-size: 1rem;
`;

export const ButtonPrimary = styled.button`
  background-color: #05807C;
  color: #fff;
  width: 100%;
  font-size: 1.1rem;
  margin-top: 0.5rem;
  padding: 0.5rem 2rem;
  border-radius: 10px;
  outline: 0;
  border: 0;
  cursor: pointer;

  &:disabled {
    background-color: gray;
    cursor: not-allowed;
  }
  &:active,
  &:hover,
  &:focus {
    color: #fff;
    box-shadow: none;
    outline: 0;
  }
`;

export const ButtonSubmit = styled.button`
  background-color: #05807C;
  color: #fff;
  font-size: 1.1rem;
  margin-top: 0.5rem;
  margin-bottom: 0.7rem;
  padding: 0.4rem 1.5rem;
  border-radius: 10px;
  outline: 0;
  border: 0;
  cursor: pointer;

  &:active,
  &:hover,
  &:focus {
    color: #fff;
    box-shadow: none;
    outline: 0;
  }
`;

export const ButtonReload = styled.button`
  background-color: white;
  color: black;
  width: 100%;
  font-size: 1.1rem;
  margin-top: 0.5rem;
  padding: 0.5rem 2rem;
  border-radius: 10px;
  outline: 0;
  border: 0;
  cursor: pointer;
`

export const Indicator = styled.div`
  width: 100%;
  height: 65vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoadingIndicator = () => {
  const { promiseInProgress } = usePromiseTracker();
  return (
    promiseInProgress && (
      <Indicator>
        {/* <Loader type="Oval" color="#c7cfb7" height="100" width="100" /> */}
      </Indicator>
    )
  );
};

export const GridWrapperCols2 = styled.div`
  display: grid;

  @media screen and (min-width: 1024px) {
    grid-template-columns: 200px 1fr;
  }
`;

export const TableWrapper = styled.table`
  margin-bottom: 1rem;
  table-layout: fixed;
  width: 100%;
`;

export const TopLabel = styled.div`
  border-bottom: 1px solid #f4eee8;
  padding: 1rem 1rem;
  background: white;
`;

export const FlexDisplay = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FormSelect = styled.select`
  background-color: #f8fafc;
  border-radius: 10px;
  border: 1px solid;
  border-color: #dfe3e9;
  height: 50px;
  font-size: 18px;
  font-weight: 500;
  padding-left: 20px;
  padding-right: 40px;
  outline: none;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 10px;

  @media (min-width: 1024px) {
    height: 50px;
    font-size: 18px;
  }
`;

