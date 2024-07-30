import React from 'react'
import styled from 'styled-components'

export default function Basket() {
  return (
    <BasketStyled>Basket</BasketStyled>
  )
}

const BasketStyled = styled.div`
position: relative;
    width: 350px;
    height: 100%;
    background-color: red;
    border-bottom-left-radius: 15px;
`