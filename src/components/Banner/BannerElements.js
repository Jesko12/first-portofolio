import styled from "styled-components";

export const ImageUpload = styled.div`
  border-radius: 15px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  border: 1px dashed #dfe3e9;
  width: 100px;
  height: 100px;
`;

export const Images = styled.div`
  margin: 1rem 0;

  & > img {
    margin-right: 1rem;
    border-radius: 10px;
    border: 1px solid #dfe3e9;
  }
`;