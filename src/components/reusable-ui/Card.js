import PrimaryButton from './PrimaryButton'
import styled from 'styled-components'

export default function Card({ imageSource, title, price }) {
  return (
    <CardStyle >
            <img src={imageSource} alt={title} />
            <CardMenuStyle>
                <h2>{title}</h2>
                <PriceButtonStyled>
                    <p>{price}</p>
                    <PrimaryButton className={"bouton"} label={"Ajouter"}/> 
                </PriceButtonStyled> 
            </CardMenuStyle>
    </CardStyle>
  )
}

const CardStyle = styled.div`
      margin-top : 50px;
      width: 240px;
      height: 330px;
      background-color: white;
      border-radius: 15px;
      box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
      justify-self: center;  

      img{
        width: 200px;
        height: 145px;
        margin-left: 20px;
        margin-top: 50px;
        margin-right: 20px;
    }
`

const CardMenuStyle = styled.div`
    width: 200px;
    height: 110px;
    padding: 0px, 5px, 5px, 5px;
    margin-left: 20px;
    margin-right: 20px;
    position: relative;
    bottom: 20px;
    
    h2{
        font-size: 36px;
        font-family: "Amatic sc";
        color: #17161A; 
    }
`

const PriceButtonStyled = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
    align-items: center;

    max-width: 190px;
    position: relative;
    bottom: 30px;
    

    p{
        font-family: 'Open Sans';
        color: #FFA01B;
    }
    .bouton {
    padding: 5px 10px;
    width: 95px;
    height: 38px;
  }
`