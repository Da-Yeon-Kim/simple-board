import styled from "@emotion/styled";
import { useFormContext } from "react-hook-form";

import { boardItem } from "@/types";

interface Props {
  formName: string;
  id: "title" | "content" | "tag";
  message?: string;
}

export const WriteForm = ({ formName, id, message }: Props) => {
  const { register } = useFormContext<boardItem>();

  return (
    <Wrapper>
      <LabelContainer>
        <InputLabel>{formName}</InputLabel>
        {message && <InputCaption>{message}</InputCaption>}
      </LabelContainer>
      {id === "content" ? (
        <WriteTextArea
          id={id}
          {...register(id)}
          placeholder={`${formName}을(를) 입력해주세요.`}
        />
      ) : (
        <WriteInput
          id={id}
          {...register(id)}
          placeholder={`${formName}을(를) 입력해주세요.`}
        />
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const LabelContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
`;

const InputLabel = styled.label`
  font-size: 1.2rem;
  font-weight: 500;
`;

const InputCaption = styled.p`
  color: lightcoral;
  font-size: 0.9rem;
`;

const WriteInput = styled.input`
  padding: 1rem;
  border: 1px solid black;
  border-radius: 4px;
  outline: none;
  font-size: 1rem;
`;

const WriteTextArea = styled.textarea`
  height: 7rem;
  padding: 1rem;
  border: 1px solid black;
  border-radius: 4px;
  outline: none;
  font-size: 1rem;
  line-height: 150%;
  resize: none;
`;
