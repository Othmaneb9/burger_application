import styled from "styled-components";

export default function Input({ value, onChange, Icon, ...restProps }) {
  return (
    <InputStyle>
      {Icon && Icon}
      <input value={value} onChange={onChange} type="text" {...restProps} />
    </InputStyle>
  );
}

const InputStyle = styled.div`
  background-color: #ffffff;
  display: flex;
  padding: 18px 24px;
  margin: 18px 0;
  border-radius: 5px;
  align-items: center;

  input {
    border: none;
    font-size: 15px;
    color: #17161a;
    width: 100%;
  }
  input::placeholder {
    color: #d3d3d3;
    background: white;
  }
`;
