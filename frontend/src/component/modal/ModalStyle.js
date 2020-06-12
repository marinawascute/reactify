import styled from "styled-components";

import colors from "../../../styles/colors";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
  background-color: #000;
  opacity: 0.5;
`;

export const ModalWrapper = styled.div`
  display: flex;
  position: fixed;
  top: 10vh;
  left: 25vw;
  z-index: 1050;
  width: 60%;
  height: 80%;
  background: #ffffff;
  border-radius: 15px 5px;
  outline: 0;
`;

export const Modal = styled.div`
  display: flex;
  flex-direction: row;
  margin: 5vh auto;
  z-index: 100;

  width: 90%;
  height: 90%;

  overflow-x: hidden;
  overflow-y: auto;

  button {
    height: 12vh;
    width: 8vw;

    margin-top: 8vh;
    margin-left: 1vw;
  }

  & > #col1 {
    display: flex;
    flex-direction: column;
    justify-self: flex-start;
    order: 1;

    width: 60%;
    height: 100%;
  }

  & > #col2 {
    display: flex;
    flex-direction: column;
    justify-self: flex-end;
    justify-content: center;
    order: 2;

    width: 40%;
    height: 100%;

    text-align: left;

    & > div:first-child {
      display: flex;
      flex-direction: column;

      width: 100%;
      height: 100%;

      margin-left: 2vw;

      #cropper {
        width: 100%;
        height: 100%;
      }
    }
  }
`;

export const Form = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;

  top: 3vh;

  width: 100%;
  height: 60%;

  #row1 {
    margin-top: -1.5vh;
  }

  #row1,
  #row2,
  #row3 {
    margin-bottom: 3.5vh;
  }

  #row1,
  #row2,
  #row3,
  #row4 {
    display: flex;
    flex-direction: row;

    width: 100%;
    height: 5vh;

    h4 {
      margin-left: 0.5vw;
      margin-bottom: 0.4vh;
      font-size: 0.8em;
      font-weight: 300;
      color: ${colors.title_purple};
    }

    input {
      height: 4vh;
      width: 100%;
      box-sizing: border-box;
      padding-left: 1vw;

      color: ${colors.span_green};
      background: #d9d9d9;
      border: none;
      border-radius: 20px 5px;
    }

    input:focus {
      outline: 0;
    }

    select {
      height: 4vh;
      width: 100%;

      box-sizing: border-box;
      padding-left: 1vw;
      padding-right: 2vw;

      text-align: left;
      color: ${colors.span_green};
      background: #d9d9d9;
      -webkit-appearance: none;
      -moz-appearance: none;
      overflow: hidden;
      overflow: -moz-hidden-unscrollable;
      border: none;
      border-radius: 20px 5px;
      cursor: pointer;
    }

    textarea {
      box-sizing: border-box;

      height: 12vh;
      width: 98%;

      padding-top: 1vh;
      padding-left: 1vw;
      padding-right: 2vw;

      color: ${colors.span_green};
      background: #d9d9d9;
      border: none;
      border-radius: 20px 5px;
      resize: none;
    }
  }

  #row1 > div:nth-child(2),
  #row2 > div:nth-child(2),
  #row3 > div:nth-child(2) {
    margin-left: 1vw;
  }

  #row1 > div:first-child {
    width: 20vw;
  }

  #row2 > div,
  #row3 > div {
    width: 15.5vw;
  }
`;

export const CloseBtn = styled.div`
  position: absolute;
  display: flex;
  top: -2.5vh;
  left: 58.5vw;
  width: 2.5vw;
  height: 2.5vw;

  background: ${colors.title_purple};
  border-radius: 50px;

  cursor: pointer;

  img {
    position: relative;
    left: 0.75vw;
  }
`;
