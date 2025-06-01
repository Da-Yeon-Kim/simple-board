import { Btn } from "@/UI/Buttons";
import styled from "@emotion/styled";

interface Props {
  height?: number;
}

export const Header = ({ height }: Props) => {
  return (
    <Wrapper height={height}>
      <Title>스터디 예제</Title>
      <Btn>로그인</Btn>
    </Wrapper>
  );
};

const Wrapper = styled.div<Props>`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  height: ${(props) => (props.height ? `${props.height}px` : "4rem")};
  padding: 1rem;
  align-items: center;
  background-color: white;
  z-index: 100;
`;

const Title = styled.p`
  font-size: 2rem;
  font-weight: 700;
`;
