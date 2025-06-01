import styled from "@emotion/styled";

import { ReactComponent as SIcon } from "@/assets/search.svg";

export const BoardSearch = () => {
  return (
    <SearchContainer>
      <SearchInput />
      <SearchIcon />
    </SearchContainer>
  );
};

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  border: 1px solid black;
  border-radius: 4px;
`;

const SearchInput = styled.input`
  width: 100%;
  font-size: 1rem;
  border: none;
`;

const SearchIcon = styled(SIcon)`
  width: 24px;
  height: 24px;
`;
