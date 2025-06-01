import styled from "@emotion/styled";
import { BoardSearch } from "./BoardSearch";
import { BoardCard } from "./BoardCard";

export const Board = () => {
  return (
    <Wrapper>
      <BoardSearch />
      <BoardList>
        <BoardCard title="a" content="b" tag="ee" />
      </BoardList>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 1rem;
  gap: 1rem;
  border: 1px solid black;
  border-radius: 4px;
`;

const BoardList = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;
