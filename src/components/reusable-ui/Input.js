import React from "react";
import styled from "styled-components";

const Input = React.forwardRef(({ value, onChange, Icon, ...restProps }, ref) => {
  return (
    <InputStyle >
      {Icon && Icon}
      <input ref={ref} value={value} onChange={onChange} type="text" {...restProps} />
    </InputStyle>
  );
})
export default Input;
const InputStyle = styled.div`
  background-color: #f5f5f7;
  display: flex;
  padding: 18px 24px;
  margin: 18px 0;
  border-radius: 5px;
  align-items: center;

  .icon {
    font-size: 15px;
    margin-right: 8px;
    color: #93a2b1;
  }

  input {
    border: none;
    font-size: 15px;
    color: #17161a;
    width: 100%;
  }
  input::placeholder {
    color: #d3d3d3;
    background: #f5f5f7;
    border-color: #f5f5f7;
  }
`;
