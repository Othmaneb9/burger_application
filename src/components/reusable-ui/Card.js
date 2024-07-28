import PrimaryButton from "./PrimaryButton";
import styled from "styled-components";

export default function Card({ onDelete, imageSource, title, price, Icon }) {
  return (
    <CardStyle>
      <button onClick={onDelete} className="buttonDelete">
        <div className="icon-wrapper">{Icon && Icon}</div>
      </button>
      <div className="image">
        <img src={imageSource} alt={title} />
      </div>
      <div className="text-info">
        <div className="title">{title}</div>
        <div className="description">
          <div className="left-description">{price}</div>
          <div className="right-description">
            <PrimaryButton className="primary-button" label={"Ajouter"} />
          </div>
        </div>
      </div>
    </CardStyle>
  );
}

const CardStyle = styled.div`
  background-color: white;
  width: 200px;
  height: 300px;
  display: grid;
  grid-template-rows: 65% 1fr;
  padding: 20px;
  padding-bottom: 10px;
  box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
  border-radius: 15px;
  position: relative;
  cursor: pointer;

  &:hover {
    width: 212px;
    height: 316px;
    box-shadow: 0px 0px 8px 0px rgb(255 154 35);

  }
  &:active {
    background: #ff9a23;

    .left-description{
      color: white !important;
    }
    .primary-button{
      background-color: white;
      color: #FFA01B;
    }

    &:active svg{
      color: white !important;
    }
  }





  .buttonDelete {
    width: 30px;
    height: 30px;
    position: absolute;
    display: flex;
    background: none;
    border: none;
    top: 15px;
    left: 195px;
    cursor: pointer;

    .icon-wrapper {
      width: 20px;
      height: 20px;
      display: flex;
      justify-content: center;
      align-items: center;

      svg {
        position: absolute;
        color: #ffa01b;
        width: 100%;
        height: 100%;
        &:hover {
          color: #e25549;
        }
      }
    }
  }
  .image {
    width: 100%;
    height: auto;
    margin-top: 30px;
    margin-bottom: 20px;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  .text-info {
    display: grid;
    grid-template-rows: 30% 70%;
    padding: 5px;

    .title {
      margin: auto 0;
      font-size: 36px;
      position: relative;
      bottom: 10px;
      font-weight: 700;
      color: #17161a;
      text-align: left;
      white-space: nowrap;
      overflow: hidden;
      width: 100%;
      text-overflow: ellipsis;
      font-family: "Amatic SC", cursive;
    }

    .description {
      display: grid;
      grid-template-columns: 1fr 1fr;

      .left-description {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        font-weight: 500;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-weight: 500;
        color: #ffa01b;
      }

      .right-description {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        font-size: 18px;

        .primary-button {
          font-size: 12px;
          cursor: pointer;
          padding: 12px;
        }
      }
    }
  }
`;
