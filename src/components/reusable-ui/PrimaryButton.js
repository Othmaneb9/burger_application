import styled from "styled-components";

export default function PrimaryButton({ label, Icon, className, onClick }) {
  return (
    <ButtonStyled onClick={onClick} className={className} type="submit">
      <span>{label}</span>
      {Icon && Icon}
    </ButtonStyled>
  );
}
const ButtonStyled = styled.button`
  width: 100%;
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
