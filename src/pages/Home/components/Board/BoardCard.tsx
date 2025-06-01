import styled from "@emotion/styled";

import { DeleteBtn } from "@/UI/Buttons";
import { boardItem } from "@/types";

interface Props extends boardItem {
  onRemove: (id: number) => void;
}

export const BoardCard = ({ id, title, content, tag, onRemove }: Props) => {
  return (
    <Wrapper>
      <BtnContainer>
        <DeleteBtn onClick={() => onRemove(id)}>X</DeleteBtn>
      </BtnContainer>
      <CardContainer>
        <Title>{title}</Title>
        <Content>{content}</Content>
        <HashTag>{tag}</HashTag>
      </CardContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border: 1px solid black;
  border-radius: 4px;
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: end;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1rem 1rem 1rem;
  gap: 1rem;
`;

const Title = styled.p`
  font-size: 1.2rem;
  font-weight: 700;
`;

const Content = styled.p`
  font-size: 1rem;
  font-weight: 500;
  line-height: 150%;
`;

const HashTag = styled.div`
  font-size: 1rem;
  font-weight: 500;
`;
