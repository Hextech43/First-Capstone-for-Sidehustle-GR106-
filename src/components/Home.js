import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Home = () => {
  return (
    <Container id="home">
      <Image src="/images/salmon.webp" />

      <Wrapper>
        <Titles>Treat Yourself</Titles>
        <Describe>
          One of the very nicest things about life is the way we must regularly
          stop whatever it is we are doing and devote our attention to eating.”
        </Describe>

        <Buttons>Explore Now</Buttons>
      </Wrapper>
    </Container>
  );
};

export default Home;
const Buttons = styled.div`
  font-size: 20px;
  color: white;
  font-weight: 500;
  background-color: #ff5200;
  border-radius: 20px;
  padding: 10px 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  /* position: fixed; */
  z-index: -1;
`;

const Describe = styled.div`
  padding-top: 20px;
  padding-left: 30px;
  padding-bottom: 30px;
  font-size: 23px;
  font-weight: 500;
  display: flex;
  text-align: center;
  width: 70%;
  span {
    font-size: 25px;
    font-weight: bold;
    color: #ff033a;
  }
`;
const Titles = styled.div`
  padding-left: 30px;
  font-size: 60px;
  font-weight: bold;
  color: white;
`;
const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  color: white;
  font-weight: bold;
  background-color: rgb(0, 0, 0, 0.8);
  font-size: 30px;
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media screen and (max-width: 1024) {
    text-align: center;
  }
`;
const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;

  position: relative;
  /* background: red; */
`;
