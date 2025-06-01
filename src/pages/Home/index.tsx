import styled from "@emotion/styled";
import { FormProvider } from "react-hook-form";

import { Board } from "./components/Board";
import { Write } from "./components/Write";
import { useWriteContext } from "./hooks/writeContext";
import { BoardProvider } from "./hooks/boardContext";

export const HomePage = () => {
  const methods = useWriteContext();
  return (
    <BoardProvider>
      <FormProvider {...methods}>
        <Wrapper>
          <Board />
          <Write />
        </Wrapper>
      </FormProvider>
    </BoardProvider>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  gap: 1rem;
`;
