import { SetStateAction } from "react";
import styled from "styled-components";

const Header = styled.header`
  background-color: beige;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
`;

interface DivProps {
  textColor: boolean;
}
const Div = styled.div<DivProps>`
  width: 30%;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: ${(props: DivProps) => (props.textColor ? "red" : "black")};
  &:hover {
    color: pink;
  }
`;
interface Props {
  mapo: boolean;
  dobong: boolean;
  gangdong: boolean;
  setMapo: React.Dispatch<SetStateAction<boolean>>;
  setDobong: React.Dispatch<SetStateAction<boolean>>;
  setGangdong: React.Dispatch<SetStateAction<boolean>>;
}
export default function MatzipHeader(props: Props) {
  const { mapo, dobong, gangdong, setMapo, setDobong, setGangdong } =
    props;
  return (
    <Header>
      <Div textColor={gangdong}>강동구</Div>
      <Div textColor={dobong}>도봉구</Div>
      <Div textColor={mapo}>마포구</Div>
    </Header>
  );
}