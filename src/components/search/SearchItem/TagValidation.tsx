interface Props {
  tagName: string;
  searchText: string;
}

function TagValidation({ tagName, searchText }: Props) {
  const index = tagName.search(searchText); //문자 있는 지 없는 확인
  const validation = /([^가-힣a-z\x20])/i; //자음 모음 정규식

  return (
    <>
      {!validation.test(searchText) && index !== -1 ? (
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
}
export default TagValidation;
