import { BsPersonCircle } from "react-icons/bs"
import { Link } from "react-router-dom"
import styled from "styled-components"

export default function Profile({ prenom }) {
  return (
    <ProfileStyled>
      <div className="info">
        <p>
          Hey, <b>{prenom}</b>
        </p>
        <Link to="/Login">
          <div className="description">
            <small>Se déconnecter</small>
          </div>
        </Link>
      </div>
      <div className="picture">
        <BsPersonCircle />
      </div>
    </ProfileStyled>
  )
}

const ProfileStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 100px;
  margin-left: 50px;

  .info {
    text-align: right;
    margin-right: 10px;
    p {
      margin: 0;
      color: #747B91;
      b {
        color: #FFA01B;
      }
    }
    a {
      text-decoration: none;
      .description {
        &:hover {
          text-decoration: underline;
          color: #6f737e;
        }
        small {
          font-size: 10px;
          color: #747B91;
          font-weight: 500;
          text-decoration: none;
          position: relative;
          bottom: 2px;
        }
      }
    }
  }

  .picture {
    height: auto;
    display: flex;
    height: 100%;
    font-size: 36px;
    color: #747B91;
  }
`
