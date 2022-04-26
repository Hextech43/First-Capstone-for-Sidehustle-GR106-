import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Container>
      <Logo> FOODIE.</Logo>
      <Wrapper>
        <Link to="/">
          <a>
            <span>Home</span>
          </a>
        </Link>

        <Link to="/about">
          <a>
            <span>About</span>
          </a>
        </Link>

        <Link to="/products">
          <a>
            <span>Products</span>
          </a>
        </Link>

        <Link to="/contact">
          <a>
            <span>Contact</span>
          </a>
        </Link>
      </Wrapper>
      <Buttons>Book A Table</Buttons>
    </Container>
  );
};

export default Header;
const Buttons = styled.div`
  color: white;
  font-weight: 600;
  background-color: #ff5200;
  border-radius: 5px;
  padding: 10px 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* margin-left: 30px; */
`;
const Wrapper = styled.div`
  display: flex;
  align-items:center;
 
  text-decoration:none;
  /* width:100%; */

  a {
   margin-left: 20px;
    display: flex;
    align-items: center;
    text-decoration:none;
    /* opacity:0.8; */

    span {
      font-size: 13px;
      text-transform: uppercase;
      font-weight: bold;
      position: relative;
      color:white;

      &:after {
        height: 2px;
        content: "";
        position: absolute;
        top: 17px;
        left: 0;
        right: 0;
        bottom: 0;
        background: darkorange;
        transition: all 350ms;
        transform: scaleX(1);
        transform-origin: center-left;
        opacity:0;
      }
    }
    &:hover {
      cursor: pointer;
      opacity:1;
      
     span{
       color:white;
       }
       span:after{
         background-color:white;
         scale:(1.02);
         opacity:1;
       }
      
      }
    }
  }
`;
const Logo = styled.div`
  /* height: 40px; */
  /* width: 40px; */
  font-weight: bolder;
  font-family: cursive;

  cursor: pointer;
  color: #ff5200;
`;
const Container = styled.div`
  /* padding: 0px 10px; */
  /* position: fixed; */
  height: 70px;
  width: 100vw;
  display: flex;
  color: white;
  background-color: rgb(0, 0, 0, 0.9);
  align-items: center;
  /* margin-bottom:70px; */

  justify-content: space-around;
  /* background: rgba(2, 2, 35, 0.45);; */

  box-shadow: 0 8px 15px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  z-index: 1;
  border: 1px solid rgba(255, 255, 255, 0.18);
  /* background: blue; */
`;
