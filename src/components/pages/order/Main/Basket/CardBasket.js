import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import styled from "styled-components";

export default function CardBasket({
  imageSource,
  title,
  price,
  quantity,
  onDelete,
  onClick,
}) {
  return (
    <CardBasketStyle onClick={onClick}>
      <div className="image">
        <img src={imageSource} alt={title} />
      </div>
      <div className="text-info">
        <div className="title">{title}</div>
        <div className="description">
          <div className="price">{price}</div>
        </div>
        <div className="quantity">x {quantity}</div>
        <button className="button-delete" onClick={onDelete}>
          <RiDeleteBin6Line />
        </button>
      </div>
    </CardBasketStyle>
  );
}
const CardBasketStyle = styled.div`
  background-color: white;
  width: 298px;
  height: 66px;
  display: grid;
  padding: 10px;
  box-shadow: -4px 4px 15px 0px rgb(0 0 0 / 20%);
  border-radius: 5px;
  position: relative;
  cursor: pointer;
  margin-left: 16px;
  margin-top: 20px;

  &:active {
    background: #ffa01b;
  }
  img {
    width: 85px;
    height: 70px;
    margin-left: 0px;
    margin-bottom: 8px;
  }

  .text-info {
    display: grid;
    grid-template-rows: 30% 70%;
    padding: 5px;
    position: absolute;
    left: 122px;

    .title {
      font-size: 24px;
      font-weight: 700;
      color: #17161a;
      text-align: left;
      overflow: hidden;
      width: 119px;
      height: 32px;
      white-space: nowrap;
      text-overflow: ellipsis;
      font-family: "Amatic SC", cursive;
    }

    .price {
      display: flex;
      justify-content: flex-start;
      font-size: 15px;
      align-items: center;
      font-weight: 500;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      font-weight: 500;
      color: #ffa01b;
      font-family: "Open Sans";
      position: absolute;
      top: 50px;
      
      &:active{
      color: white;
    }
    }
    .quantity {
      width: 29px;
      height: 20px;
      font-size: 15px;
      font-family: "Open Sans";
      color: #ffa01b;
      position: absolute;
      top: 35px;
      left: 130px;
    }
    .button-delete {
      opacity: 0;
      background: #e25549;
      color: white;
      border-radius: 0px 5px 5px 0px;
      width: 76px;
      height: 86px;
      cursor: pointer;
      border: none;
      position: absolute;
      left: 120px;
      svg {
        width: 24px;
        height: 24px;
      }
    }
    &:hover .button-delete {
      opacity: 1;
    }
  }
`;
