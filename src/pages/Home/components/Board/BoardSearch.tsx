import styled from "@emotion/styled";

import { ReactComponent as SIcon } from "@/assets/search.svg";

interface Props {
  searchValue: string;
  setSearchValue: (term: string) => void;
}

export const BoardSearch = ({ searchValue, setSearchValue }: Props) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  return (
    <SearchContainer>
      <SearchInput
        type="text"
        placeholder="제목, 내용, 태그로 검색..."
        value={searchValue}
        onChange={handleInputChange}
      />
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
