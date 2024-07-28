import React, { useContext } from 'react'
import UserContext from '../../../../../../context/UserContext'
import styled from 'styled-components'

export default function EditProduct() {
const {productSelected} = useContext(UserContext)

  return (
    <FormulaireStyled>
        {productSelected.title}<br/>
        {productSelected.price}
    </FormulaireStyled>
  )
}

const FormulaireStyled = styled.form`

`

