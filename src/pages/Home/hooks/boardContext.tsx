import React, { createContext, useState, useEffect, useContext } from "react";

import { boardItem } from "@/types";
import { boardLocalStorage } from "@/utils/storage";

interface BoardContextType {
  boardItems: boardItem[];
  addBoardItem: (newItem: Omit<boardItem, "id">) => void;
  removeBoardItem: (idToRemove: number) => void;
}

const BoardContext = createContext<BoardContextType | undefined>(undefined);

export const BoardProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [boardItems, setBoardItems] = useState<boardItem[]>([]);

  const updateLocalStorageAndState = (newItems: boardItem[]) => {
    boardLocalStorage.set(newItems);
    setBoardItems(newItems);
  };

  /* 로컬스토리지 및 상태에 데이터 추가 */
  const addBoardItem = (newItemData: Omit<boardItem, "id">) => {
    const newId =
      boardItems.length > 0
        ? Math.max(...boardItems.map((item) => item.id)) + 1
        : 1;

    const newBoardItem: boardItem = {
      id: newId,
      ...newItemData,
    };

    const newItems = [...boardItems, newBoardItem];
    updateLocalStorageAndState(newItems);
  };

  /* 로컬스토리지 및 상태에 데이터 삭제 */
  const removeBoardItem = (idToRemove: number) => {
    const newItems = boardItems.filter((item) => item.id !== idToRemove);
    updateLocalStorageAndState(newItems);
  };

  useEffect(() => {
    const storedItems = boardLocalStorage.get();
    if (storedItems && Array.isArray(storedItems)) {
      setBoardItems(storedItems);
    }
  }, []);

  return (
    <BoardContext.Provider
      value={{ boardItems, addBoardItem, removeBoardItem }}
    >
      {children}
    </BoardContext.Provider>
  );
};

export const useBoard = () => {
  const context = useContext(BoardContext);
  if (context === undefined) {
    throw new Error("useBoard must be used within a BoardProvider");
  }
  return context;
};
