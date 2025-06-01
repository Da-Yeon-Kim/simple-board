import styled from "@emotion/styled";
import { useFormContext } from "react-hook-form";

import { boardItem } from "@/types";
import { Btn } from "@/UI/Buttons";

import { WriteForm } from "./WriteForm";
import { useBoard } from "../../hooks/boardContext";

export const Write = () => {
  const { handleSubmit, getValues, reset } = useFormContext<boardItem>();
  const { addBoardItem } = useBoard();

  const onSubmit = () => {
    const formData = getValues();
    try {
      addBoardItem(formData);
      alert("폼이 제출되었습니다!");
      reset();
    } catch (error) {
      console.error("폼 제출 중 오류 발생:", error);
      alert("폼 제출 도중, 오류가 발생했습니다.");
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
