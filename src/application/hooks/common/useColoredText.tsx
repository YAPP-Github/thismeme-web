import useValidation from "./useValidation";

interface Props {
  tagName: string;
  searchText: string;
}

const useColoredText = ({ tagName, searchText }: Props) => {
  const index = tagName.search(searchText); //문자 있는 지 없는 확인
  const checkValidation = useValidation({ text: searchText });

  const ColoredText = () => {
    return (
      <>
        {checkValidation && index !== -1 ? (
          <>
            <span>{tagName.slice(0, tagName.search(searchText))}</span>
            <span className="text-brand">{tagName.slice(index, index + searchText.length)}</span>
            <span>{tagName.slice(index + searchText.length)}</span>
          </>
        ) : (
          <span>{tagName}</span>
        )}
      </>
    );
  };

  return ColoredText;
};

export default useColoredText;
