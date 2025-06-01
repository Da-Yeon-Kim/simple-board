import styled from "@emotion/styled";

import { BoardSearch } from "./BoardSearch";
import { BoardCard } from "./BoardCard";
import { useBoard } from "../../hooks/boardContext";

export const Board = () => {
  const { boardItems, removeBoardItem } = useBoard();

  return (
    <Wrapper>
      <BoardSearch />
      <BoardList>
        {boardItems.length > 0 ? (
          boardItems.map((item) => (
            <BoardCard
              key={item.id}
              id={item.id}
              title={item.title}
              content={item.content}
              tag={item.tag}
              onRemove={() => removeBoardItem(item.id)}
            />
          ))
        ) : (
          <DataNone>저장된 게시물이 없습니다.</DataNone>
        )}
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
  gap: 1rem;
  overflow-y: auto;
  padding: 0.5rem;
`;

const DataNone = styled.p`
  text-align: center;
  color: #888;
  padding: 2rem;
  font-size: 1.2rem;
`;
