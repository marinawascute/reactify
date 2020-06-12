import styled from "styled-components";

export const TextButton = styled.button`
  @import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;500;600;800&display=swap");
  position: relative;
  display: inline-block;
  z-index: 4;
  height: 2.3em;
  max-width: 238px;
  margin-top: 2vh;
  margin-right: 6vh;
  margin-left: -4vh;
  padding: 0.5em 1em 0.5em 1em;
  font-family: "Nunito Sans", sans-serif;
  font-weight: 600;
  font-size: 16px;
  color: #5c072d;
  white-space: nowrap;
  background: #ffffff;
  border-style: solid;
  border-width: thin;
  border-color: #f2f2f2;
  border-radius: 5px;
  box-shadow: 0.5pt 1pt 1pt 0 #d9d9d9;

  &:focus {
    outline: #5c072d;
  }

  &:hover {
    background: rgb(241, 241, 241);
    background: linear-gradient(
      90deg,
      rgba(241, 241, 241, 1) 0%,
      rgba(244, 244, 244, 1) 29%,
      rgba(255, 255, 255, 1) 100%
    );
  }
`;

export const IconButton = styled.button`
  display: flex;
  z-index: 4;
  height: ${(props) => (props.inbox ? `5vh` : `5vh`)};
  width: ${(props) => (props.inbox ? `2.5vw` : `2.5vw`)};
  padding: ${(props) => (props.inbox ? `0.35em` : `0.2em`)};

  font-family: "Nunito Sans", sans-serif;
  font-weight: 600;
  font-size: 16px;
  color: #5c072d;
  white-space: nowrap;
  background: #ffffff;
  border-style: solid;
  border-width: thin;
  border-color: #f2f2f2;
  border-radius: 5px;
  box-shadow: 0.5pt 1pt 1pt 0 #d9d9d9;

  &:focus {
    outline: #5c072d;
  }

  &:hover {
    background: rgb(241, 241, 241);
    background: linear-gradient(
      90deg,
      rgba(241, 241, 241, 1) 0%,
      rgba(244, 244, 244, 1) 29%,
      rgba(255, 255, 255, 1) 100%
    );
  }

  & > img {
    width: ${(props) => (props.inbox ? `90%` : `100%`)};
    margin: 0 auto;
    margin-left: ${(props) => (props.inbox ? `0.1vw` : `0`)};
  }
`;

export const ProfileButton = styled.button`
  display: flex;
  flex-direction: row;
  z-index: 4;
  height: 2.3em;
  max-width: 238px;

  padding: 0.5em 1em 0.5em 1em;
  font-family: "Nunito Sans", sans-serif;
  font-weight: 400;
  font-size: 16px;
  color: #5c072d;
  white-space: nowrap;
  background: #ffffff;
  border-style: solid;
  border-width: thin;
  border-color: #f2f2f2;
  border-radius: 5px;
  box-shadow: 0.5pt 1pt 1pt 0 #d9d9d9;

  &:focus {
    outline: #5c072d;
  }

  &:hover {
    background: rgb(241, 241, 241);
    background: linear-gradient(
      90deg,
      rgba(241, 241, 241, 1) 0%,
      rgba(244, 244, 244, 1) 29%,
      rgba(255, 255, 255, 1) 100%
    );
  }

  span {
    display: flex;
    justify-content: center;
    z-index: 1;

    min-width: 38px;
    height: 40px;

    margin-top: -1.7vh;
    margin-left: -3.9vh;
    margin-right: 0.5em;
    padding: 0;

    background: #f6f6f6;
    border-radius: 50%;
  }

  img {
    display: flex;
    margin-top: 5px;

    width: 80%;
    height: 80%;
    z-index: 2;
  }
`;

export const OptionButton = styled.button`
  display: flex;
  flex-direction: column;
  z-index: 1;
  height: ${(props) => (props.small ? `12vh` : `14vh`)};
  width: ${(props) => (props.small ? `18vh` : `20vh`)};
  padding-top: ${(props) => (props.small ? `0vh` : `6vh`)};
  padding-left: 3vh;

  font-family: "Nunito Sans", sans-serif;
  font-weight: 400;
  font-size: 0.8em;
  color: #5c072d;
  text-align: left;
  background: #ffffff;
  border-style: solid;
  border-width: thin;
  border-color: #f2f2f2;
  border-radius: 20px 5px;
  box-shadow: 0.5pt 1pt 1pt 0 #d9d9d9;
  box-sizing: border-box;
  line-height: 1.1em;

  &:focus {
    outline: #5c072d;
  }

  &:hover {
    background: rgb(241, 241, 241);
    background: linear-gradient(
      90deg,
      rgba(241, 241, 241, 1) 0%,
      rgba(244, 244, 244, 1) 29%,
      rgba(255, 255, 255, 1) 100%
    );
  }

  span {
    width: 25px;
    height: 25px;

    margin-top: ${(props) => (props.small ? `1.5vh` : `-4vh`)};
    margin-bottom: ${(props) => (props.small ? `1vh` : `2vh`)};
  }

  img {
    width: ${(props) => (props.small ? `20px` : `25px`)};
    height: ${(props) => (props.small ? `20px` : `25px`)};
  }
`;

export const EnterButton = styled.button`
  @import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;500;600;800&display=swap");
  box-shadow: 0px 2px 12px rgba(207, 206, 206, 0.331324);
  border-radius: 24px 2px;
  font-family: "Nunito Sans", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 27px;
  border-style: none;
  max-width: 161px;
  padding: 10.5px 51.5px 10.5px 53.5px;
  color: #ffffff;
  background: #951159;

  &:focus {
    outline: #ffffff;
  }

  &:hover {
    background: linear-gradient(90deg, #951159 13.43%, #5c072d 72.89%);
  }
`;

export const RegisterButton = styled.button`
  @import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;500;600;800&display=swap");
  box-shadow: 0px 2px 12px rgba(207, 206, 206, 0.331324);
  border-radius: 24px 2px;
  font-family: "Nunito Sans", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 27px;
  border-style: none;
  border: none;
  max-width: 161px;
  padding: 10.5px 37.5px;
  background: #ffffff;
  color: #5b0a2d;

  &:focus {
    outline: #ffffff;
  }

  &:hover {
    background: linear-gradient(90deg, #ffffff 13.43%, #fff 72.89%);
  }
`;

export const NextButton = styled.button`
  background: linear-gradient(128.01deg, #941859 14.55%, #5b0a2d 92.91%);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.229025);
  border-radius: 24px 2px;
  font-family: "Nunito Sans", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  border-style: none;
  line-height: 22px;
  max-width: 132px;
  padding: 3px 24.53px 3px 30.47px;
  color: #ffffff;
  background: #951159;

  &:focus {
    outline: #ffffff;
  }

  &:hover {
    background: linear-gradient(90deg, #951159 13.43%, #5c072d 72.89%);
  }
`;

export const AddButton = styled.button`
  @import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;500;600;800&display=swap");
  box-shadow: 0px 2px 12px rgba(207, 206, 206, 0.331324);
  border-radius: 24px 2px;
  font-family: "Nunito Sans", sans-serif;
  font-weight: 600;
  font-size: 10px;
  line-height: 0.5vh;

  color: #ffffff;
  border-style: none;
  width: 40vh;
  padding: 10.5px 51.5px 10.5px 53.5px;
  background: #951159;

  &:focus {
    outline: #ffffff;
  }

  &:hover {
    background: linear-gradient(137.61deg, #941859 14.55%, #5b0a2d 92.91%);
  }
`;

export const UpButton = styled.button`
  @import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;500;600;800&display=swap");
  width: 36vh;
  height: 8vh;
  margin-top: 3.5vh;
  border-style: none;
  border-radius: 18px 4px;
  display: flex;
  flex-direction: row;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  background: #018f14;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.229025);

  &:focus {
    outline: #ffffff;
  }

  &:hover {
    background: linear-gradient(137.61deg, #018f14 14.55%, #5b0a 92.91%);
  }
`;
