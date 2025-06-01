import styled from "@emotion/styled";
import { useFormContext } from "react-hook-form";

import { boardItem } from "@/types";

interface Props {
  formName: string;
  id: "title" | "content" | "tag";
}

export const WriteForm = ({ formName, id }: Props) => {
  const { register } = useFormContext<boardItem>();

  return (
    <InputContainer>
      <InputLabel>{formName}</InputLabel>
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
    </InputContainer>
  );
};

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const InputLabel = styled.label`
  font-size: 1.2rem;
  font-weight: 500;
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
  resize: none;
`;
