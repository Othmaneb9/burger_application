import { Link } from "react-router-dom";
import styled from "styled-components";

export default function OrderLogOut({value, label, Icon }) {
  return (
    <LogOutStyled>
        <h1>Hey, {value} </h1>
            <Link to="/Login">
            <button>{label}</button>
            </Link>
        {Icon && Icon}
      </LogOutStyled>
  )
}

const LogOutStyled = styled.div`
    gap : 10px;
    font-family: "Open Sans";
    h1{
        
    }

    button{
        text-decoration: none;
        color: #747B91;
        font-size: 10px;
        border: 0;
    }
  
`
