import React from 'react'
import styled from 'styled-components'

export default function Welcome() {
  return (
    <WelcomeStyle>
        <h1>Bienvenue chez nous !</h1>
    <hr />
    <h2>Connectez-vous</h2>
    </WelcomeStyle>
  )
}
const WelcomeStyle = styled.div`
 hr {
    border: 1.5px solid #f56a2c;
    margin-bottom: (8 * 5) px;
  }

  h1 {
    color: #ffffff;
    font-size: 48px;
  }

  h2 {
    margin: 20px 10px 10px;
    color: #ffffff;
    font-size: 36px;
  }

`