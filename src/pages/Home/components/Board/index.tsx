import styled from "@emotion/styled";
import { BoardSearch } from "./BoardSearch";
import { BoardCard } from "./BoardCard";
import { useBoardList } from "../../hooks/useBoardList";
import { useBoard } from "../../hooks/boardContext";

export const Board = () => {
  const { boardItems, removeBoardItem } = useBoard();
  const { search, setSearch, currentItems, isLoading, hasMore, target } =
    useBoardList({
      boardItems: boardItems,
    });

  return (
    <Wrapper>
      <BoardSearch searchValue={search} setSearchValue={setSearch} />
      <BoardList>
        {currentItems.length > 0 ? (
          currentItems.map((item) => (
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
            {search ? "검색 결과가 없습니다." : "저장된 게시물이 없습니다."}
          </DataNone>
        )}
        {hasMore && (
          <div ref={target} style={{ height: "20px", margin: "1rem 0" }}>
            {isLoading && (
              <LoadingMessage>더 많은 게시물 로딩 중...</LoadingMessage>
            )}
          </div>
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
  max-height: calc(100vh - 4rem);
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
  color: gray;
  padding: 2rem;
  font-size: 1.2rem;
`;

const LoadingMessage = styled.p`
  text-align: center;
  color: gray;
  padding: 1rem;
`;
