const useValidation = ({ text }: { text: string }) => {
  const validation = /([^가-힣a-z\x20])/i; //자음 모음 정규식

  const checkValidation = !validation.test(text);

  return { checkValidation };
};
export default useValidation;
