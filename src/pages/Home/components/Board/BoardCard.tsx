import styled from "@emotion/styled";

import { DeleteBtn } from "@/UI/Buttons";
import { boardItem } from "@/types";
import { parseTagString } from "@/utils/tagParser";

interface Props extends boardItem {
  onRemove: (id: number) => void;
}

export const BoardCard = ({ id, title, content, tag, onRemove }: Props) => {
  const tagsArray = parseTagString(tag);

  return (
    <Wrapper>
      <BtnContainer>
        <DeleteBtn onClick={() => onRemove(id)}>X</DeleteBtn>
      </BtnContainer>
      <CardContainer>
        <Title>{title}</Title>
        <Content>{content}</Content>
        <TagList>
          {tagsArray.map((tag, index) => (
            <HashTag key={index}># {tag}</HashTag>
          ))}
        </TagList>
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

const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const HashTag = styled.span`
  font-size: 0.9rem;
  font-weight: 500;
  color: black;
  background-color: #eeeeee;
  padding: 0.3rem 0.6rem;
  border-radius: 8px;
  white-space: nowrap;
`;
