import styled from "styled-components";

export default function Input({value, onChange, placeholder}) {
  return (
    <InputStyle value={value} onChange={onChange} type='text' required='required' placeholder={placeholder}  />
    )
}


const InputStyle = styled.input`
    position: relative;
    right : 8px;
    width: 350px;
    height: 55px;
    border-radius: 5px;
    border-width: 0;
    margin-bottom: 18px;
    padding-left: 50px; 
    justify-content: center;

    input::placeholder {
      position: relative;
      left: 20px;
      color: #D3D3D3;
    }
`
