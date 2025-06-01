/*
쉼표로 구분된 문자열을 배열로 변환
(예: '태그1, 태그2' -> ['태그1', '태그2']
*/
export const parseTagString = (tagString: string): string[] => {
  if (!tagString) {
    return [];
  }
  return tagString
    .split(",")
    .map((tag) => tag.trim())
    .filter((tag) => tag !== "");
};
