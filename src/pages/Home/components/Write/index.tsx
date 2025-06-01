import styled from "@emotion/styled";
import { useFormContext } from "react-hook-form";

import { boardItem } from "@/types";
import { Btn } from "@/UI/Buttons";
import { boardLocalStorage } from "@/utils/storage";

import { WriteForm } from "./WriteForm";

export const Write = () => {
  const { handleSubmit, getValues, reset } = useFormContext<boardItem>();

  const onSubmit = () => {
    const formData = getValues();
    try {
      const existingBoardItems = boardLocalStorage.get();
      let boardItems: boardItem[] = [];
      if (existingBoardItems && Array.isArray(existingBoardItems)) {
        boardItems = existingBoardItems;
      }
      boardItems.push(formData);
      boardLocalStorage.set(boardItems);
      alert("폼이 제출되었습니다!");
      reset();
    } catch (error) {
      console.error("폼 제출 중 오류 발생:", error);
      alert("폼 제출에 실패했습니다.");
    }
  };

  return (
    <Wrapper>
      <FormContainer>
        <WriteForm formName="제목" id="title" />
        <WriteForm formName="본문" id="content" />
        <WriteForm formName="태그" id="tag" message="쉼표(,)로 구분해주세요." />
      </FormContainer>
      <BtnContainer>
        <Btn onClick={handleSubmit(onSubmit)}>제출</Btn>
      </BtnContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  padding: 2rem;
  border: 1px solid black;
  border-radius: 4px;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: end;
  gap: 1rem;
`;
