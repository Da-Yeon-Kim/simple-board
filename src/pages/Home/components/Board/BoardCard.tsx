import { boardItem } from "@/types";
import styled from "@emotion/styled";

export const BoardCard = ({ title, content, tag }: boardItem) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Content>{content}</Content>
      <HashTag>{tag}</HashTag>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  gap: 1rem;
  border: 1px solid black;
  border-radius: 4px;
`;

const Title = styled.p`
  font-size: 24px;
  font-weight: 700;
`;

const Content = styled.p`
  font-size: 20px;
  font-weight: 500;
  line-height: 150%;
`;

const HashTag = styled.div`
  font-size: 18px;
  font-weight: 500;
`;
