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
  display: flex;
  justify-content: space-between;
  height: ${(props) => (props.height ? `${props.height}px` : "4rem")};
  align-items: center;
  background-color: white;
  padding: 1rem;
  z-index: 100;
`;

const Title = styled.p`
  font-size: 2rem;
  font-weight: 700;
`;
