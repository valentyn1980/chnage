import colors from "./styles/colors";
import styled from "styled-components";

export const FormWrap = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 700px;
  border-radius: 10px;
`;

export const FormUl = styled.ul`
  opacity: 1.75;
  display: flex;
  justify-content: space-between;
  column-gap: 10px;
  flex-direction: column;
  row-gap: 20px;

  li {
    display: flex;
    flex-direction: column;
  }

  input {
    background-color: ${colors.white[900]};
  }

  .error-text {
    color: ${colors.red[900]};
  }

  button {
    white-space: nowrap;
    font-weight: bold;
    height: 56px;
    background-color: ${colors.violet[500]};
    width: 100%;

    &:hover {
      background-color: ${colors.white[600]};
      border: 1px solid ${colors.violet[500]};
      color: ${colors.violet[500]};
    }
  }
`;

export const PopupEl = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 20px;
  row-gap: 30px;

  .pop-title {
    font-size: 25px;
    text-align: center;
  }

  .pop-description {
    font-size: 18px;
  }
`;
