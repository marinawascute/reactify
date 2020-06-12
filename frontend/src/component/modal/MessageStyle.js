import styled from "styled-components";



export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
  background-color: #ddd;
  opacity: 0.5;
`;

export const ModalWrapper = styled.div`
  display: flex;
  position: fixed;
  top: 10vh;
  left: 50vw;
  z-index: 1050;
  width: 45%;
  height: 50%;
  background: #ddd;
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

    span {
        color: #56000D;
        
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 25px;
    }
  `

export const CloseBtn = styled.div`
  position: absolute;
  display: flex;
  top: -2.5vh;
  left: 43.5vw;
  width: 2.5vw;
  height: 2.5vw;

  background: #56000D;
  border-radius: 50px;

  cursor: pointer;

  img {
    position: relative;
    left: 0.75vw;
  }
`;
