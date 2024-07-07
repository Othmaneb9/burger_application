import styled from "styled-components"
import logo from "../../img/logo-orange.png";


export default function Logo() {
  return (
    <ParagrapheBalise> CRAZEE 
    <img src= {logo} alt="Logo"/>
    BURGER </ParagrapheBalise>
  )
}
const ParagrapheBalise = styled.p`
  font-size: 110px;
  font-family: 'Amatic SC';
  color: #FFA01B;
  font-weight: 700;
  text-align: center;
  justify-content: center;
  img{
    width: 200px;
    height: 150px;
    position: relative;
    top : 30px;
  }
`

