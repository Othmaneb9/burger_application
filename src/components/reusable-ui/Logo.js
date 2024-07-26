import styled from "styled-components";
import logo from "../img/logo-orange.png";

export default function Logo({ className, onClick }) {
  return (
    <LogoStyled className={className} onClick={onClick}>
        <h1>CRAZEE</h1>
        <img src={logo} alt="Logo" />
        <h1>BURGER</h1>
    </LogoStyled>
  );
}

const LogoStyled = styled.div`
  display: flex;
  align-items: center;

  h1 {
    display: inline;
    text-align: center;
    color: #ffa01b;
    font-size: 36px;
    line-height: 1em;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    font-family: "Amatic SC", cursive;
  }

  img {
    object-fit: contain;
    object-position: center;
    height: 60px;
    width: 80px; // for Safari and Firefox
    margin: 0 ${8 / 2}px;
  }
`
