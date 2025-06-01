import { useState, useEffect, useRef, useCallback } from "react";

import { boardItem } from "@/types";
import { parseTagString } from "@/utils/tagParser";

const EACH_OF = 2;

interface boardItems {
  boardItems: boardItem[];
}

interface useBoardListReturn {
  search: string;
  setSearch: (term: string) => void;
  currentItems: boardItem[];
  isLoading: boolean;
  hasMore: boolean;
  target: React.RefObject<HTMLDivElement | null>;
}

export const useBoardList = ({
  boardItems,
}: boardItems): useBoardListReturn => {
  const [search, setSearch] = useState<string>("");
  const [cnt, setCnt] = useState(EACH_OF);
  const [isLoading, setIsLoading] = useState(false);
  const target = useRef<HTMLDivElement>(null);

  /* 검색 필터링 */
  const filteredBoardItems = useCallback(() => {
    return boardItems.filter((item: boardItem) => {
      if (!search) {
        return true;
      }
      const lowerCaseSearchTerm = search.toLowerCase();
      const matchesTitle = item.title
        .toLowerCase()
        .includes(lowerCaseSearchTerm);
      const matchesContent = item.content
        .toLowerCase()
        .includes(lowerCaseSearchTerm);

      const matchesTag = parseTagString(item.tag).some((t) =>
        t.toLowerCase().includes(lowerCaseSearchTerm)
      );

      return matchesTitle || matchesContent || matchesTag;
    });
  }, [boardItems, search]);

  const filterdItems = filteredBoardItems();
  const currentItems = filterdItems.slice(0, cnt);
  const hasMore = cnt < filterdItems.length;

  /* 추가 게시물 로드 */
  const loadMoreItems = useCallback(() => {
    if (!hasMore || isLoading) {
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setCnt((prevCount) => prevCount + EACH_OF);
      setIsLoading(false);
    }, 500);
  }, [hasMore, isLoading]);

  /* 스크롤 감지 */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMoreItems();
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 1.0,
      }
    );

    if (target.current) {
      observer.observe(target.current);
    }

    return () => {
      if (target.current) {
        observer.unobserve(target.current);
      }
    };
  }, [loadMoreItems]);

  useEffect(() => {
    setCnt(EACH_OF);
    setIsLoading(false);
  }, [search, boardItems]);

  return {
    search,
    setSearch,
    currentItems,
    isLoading,
    hasMore,
    target,
  };
};
