import React from "react";
import styled from "styled-components";

export default function ImagePreview({ imageSource }) {
  return (
    <ImageStyle>
      {imageSource ? (
        <img src={imageSource} alt="Inconnue" />
      ) : (
        <p>Aucune Image</p>
      )}
    </ImageStyle>
  );
}

const ImageStyle = styled.div`
  margin-right: 20px;
  margin-top: 18px;
  border: 1px solid #e4e5e9;
  border-radius: 5px;
  width: 215px;
  height: 120px;
  img {
    width: 100px;
    height: auto;
  }

  p {
    color: #93a2b1;
    font-family: "Open Sans";
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
