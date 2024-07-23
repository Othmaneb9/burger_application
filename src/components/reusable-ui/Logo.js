import styled from "styled-components";
import logo from "../img/logo-orange.png";

export default function Logo({ className, scale = 1, onClick }) {
  return (
    <LogoStyled className={className} scale={scale} onClick={onClick}>
      <ParagrapheBalise>
        {" "}
        CRAZEE
        <img src={logo} alt="Logo" />
        BURGER{" "}
      </ParagrapheBalise>
    </LogoStyled>
  );
}

const LogoStyled = styled.h1`
  transform: scale(${({ scale }) => 1 / scale});
`;

const ParagrapheBalise = styled.p`
  font-size: 110px;
  font-family: "Amatic SC";
  color: #ffa01b;
  font-weight: 700;
  text-align: center;
  img {
    width: 200px;
    height: 150px;
    position: relative;
    top: 30px;
  }
`;
