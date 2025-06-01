import styled from "@emotion/styled";
import { useState } from "react";

import { boardItem } from "@/types";

import { BoardSearch } from "./BoardSearch";
import { BoardCard } from "./BoardCard";
import { useBoard } from "../../hooks/boardContext";

export const Board = () => {
  const { boardItems, removeBoardItem } = useBoard();
  const [searchValue, setSearchValue] = useState<string>("");

  /* 검색 (제목, 본문, 태그 모두 포함) */
  const filteredBoardItems = boardItems.filter((item: boardItem) => {
    if (!searchValue) {
      return true;
    }
    const lowerCaseSearchTerm = searchValue.toLowerCase();
    const matchesTitle = item.title.toLowerCase().includes(lowerCaseSearchTerm);
    const matchesContent = item.content
      .toLowerCase()
      .includes(lowerCaseSearchTerm);
    const matchesTag = Array.isArray(item.tag)
      ? item.tag.some((t) => t.toLowerCase().includes(lowerCaseSearchTerm))
      : item.tag.toLowerCase().includes(lowerCaseSearchTerm);
    return matchesTitle || matchesContent || matchesTag;
  });

  return (
    <Wrapper>
      <BoardSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <BoardList>
        {filteredBoardItems.length > 0 ? (
          filteredBoardItems.map((item) => (
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
          <DataNone>
            {searchValue
              ? "검색 결과가 없습니다."
              : "저장된 게시물이 없습니다."}
          </DataNone>
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
