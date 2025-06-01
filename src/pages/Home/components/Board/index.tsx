import styled from "@emotion/styled";
import { useState, useEffect } from "react";

import { boardItem } from "@/types";
import { boardLocalStorage } from "@/utils/storage";

import { BoardSearch } from "./BoardSearch";
import { BoardCard } from "./BoardCard";

export const Board = () => {
  const [boardItems, setBoardItems] = useState<boardItem[]>([]);

  useEffect(() => {
    loadBoardItems();
  }, []);

  const loadBoardItems = () => {
    const storedItems = boardLocalStorage.get();
    if (storedItems && Array.isArray(storedItems)) {
      setBoardItems(storedItems);
    } else {
      setBoardItems([]);
    }
  };

  return (
    <Wrapper>
      <BoardSearch />
      <BoardList>
        {boardItems.length > 0 ? (
          boardItems.map((item, index) => (
            <BoardCard
              key={index}
              title={item.title}
              content={item.content}
              tag={item.tag}
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
