import useInput from "@/application/hooks/common/useInput";
import SearchInput from "@/components/common/Input";
import Navigation from "@/components/common/Navigation";
import SearchItem from "@/components/search/SearchItem";

function SearchPage() {
  const { value, handleInputChange, handleInputReset } = useInput();

  return (
    <>
      <Navigation page="search" />
      <SearchInput
        value={value}
        onChange={handleInputChange}
        onReset={handleInputReset}
        size="medium"
        placeholder="ex) 페페,총"
        isDelete={true}
      />
      <SearchItem searchText={value} tagName="무한도전" majorType="예능별" />
      <SearchItem searchText={value} tagName="무한" majorType="예능별" />
      <SearchItem searchText={value} tagName="무한한도도전전" />
    </>
  );
}

export default SearchPage;
