import styled from 'styled-components'

export default function BottomButton({label, Icon, className, onClick}) {
  return (
        <BottomButtonStyled onClick={onClick} className={className}>
             {Icon && Icon}
             {label}
        </BottomButtonStyled>
    
  )
}

const BottomButtonStyled = styled.button`
    height: 43px;
    border-radius: 5px 5px 0px 0px;
    padding: 13px 22px 14px 22px;

    background-color : #292729;
    color: white;
    cursor : pointer;

    label{
      width: 212px;
      padding : 10px 22px 11px 22px;
    }
`
