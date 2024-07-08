import styled from "styled-components";

export default function PrimaryButton({ label, Icon }) {
  return (
    <ButtonStyled type="submit">
      <span>{label}</span>
      {Icon && Icon}
    </ButtonStyled>
  );
}
const ButtonStyled = styled.button`
  width: 400px;
  height: 55px;
  background-color: #ff9f1b;
  color: white;
  border-radius: 5px;
  border-color: #ff9f1b;
  font-size: 15px;

  &:hover {
    background-color: white;
    color: #ff9f1b;
    cursor: pointer;
  }
`;
