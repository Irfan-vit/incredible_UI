import React from "react";
import styled from "styled-components";
import { defaultTheme, typeScale } from "../utils";
import { applyStyleModifiers } from "styled-components-modifiers";
import { PrimaryButton } from "./buttons";
import { BsSuitHeartFill } from "react-icons/bs";
import { FaShareAlt, FaEllipsisV } from "react-icons/fa";

const CARD_MODIFIERS = {
  titleBottom: () => `
  .main {
    flex-direction: column;
    padding: 10px;
  }
  `,
  titleTop: () => `
  .main {
    flex-direction: column-reverse;
    padding: 10px;
  }
  `,
  titleOnImage: () => `
  .main {
    flex-direction: column;
    position: relative;
  }
  figcaption{
    position: absolute;
    bottom: 0%;
    width: 100%;
    background-color: #55010146;
    color: white;
  }
  `,
  onlyImage: () => `
  .main {
    flex-direction: column;
    position: relative;
  }
  figcaption{
    position: absolute;
    bottom: 40%;
    text-align: center;
    width: 100%;
    z-index: 2;
    color: white;
  }
  p {
    display: none;
  }
  .about {
    margin: 0px;
  }
  img{
    z-index: 1;
    opacity: 1;
    filter: blur(3px);
  }
  img:hover{
    opacity: 1;
    z-index: 1;
    filter: blur(0px); 
  }
  `,
  small: () => `
  .main {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
  }
  figcaption{
    width: 100%;
    padding: 5px;
  }
  img{
    width: 125px;
    padding: 2px;
    background-color: #264653;
  }
  img:hover{
    width: 125px;
    padding: 2px;
    background-color: #264653;
  }
  p{
      display:none;
  }
  .about {
    margin: 0px;
  }
  `,
};

const CardContainer = styled.div`
  border-radius: 5px;
  max-width: 250px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 10px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
  .main {
    display: flex;
    flex-wrap: wrap;
    background-color: #264653;
    color: white;
  }
  .about {
    margin: 10px;
  }
  .icons {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 10px;
  }
  img {
    width: 100%;
  }
  ${applyStyleModifiers(CARD_MODIFIERS)}
`;

export const Card = () => {
  <CardContainer modifiers={["small"]}>
    <figure class="main">
      <img
        src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        alt="Image of bubbles through a microscope."
      />
      <figcaption>
        <h2>Nike Air Max</h2>
        <p>Soft and Smooth.</p>
      </figcaption>
    </figure>
    <div class="about">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, omnis qui
        eius pariatur dolor expedita esse quasi laboriosam maxime, corporis
        delectus. Voluptates numquam odio provident delectus excepturi accusamus
        debitis cumque.
      </p>
    </div>
    <div class="icons">
      <strong>Buy Now</strong>
      <strong>Add to Cart</strong>
      <BsSuitHeartFill />
      <FaShareAlt />
      <FaEllipsisV />
    </div>
  </CardContainer>
};
