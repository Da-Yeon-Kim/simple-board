import styled from "@emotion/styled";
import { WriteForm } from "./WriteForm";
import { Btn } from "@/UI/Buttons";
import { boardItem } from "@/types";
import { useFormContext } from "react-hook-form";

export const Write = () => {
  const { handleSubmit, getValues, reset } = useFormContext<boardItem>();

  const onSubmit = () => {
    const formData = getValues();
    try {
      localStorage.setItem("formData", JSON.stringify(formData));
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
        <WriteForm formName="태그" id="tag" />
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
`;
