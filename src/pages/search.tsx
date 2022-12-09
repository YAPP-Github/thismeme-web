import useInput from "@/application/hooks/common/useInput";
import Input from "@/components/common/Input";
import Navigation from "@/components/common/Navigation";
import SearchItem from "@/components/search";

function SearchPage() {
  const { value, setValue, handleSearch } = useInput();

  return (
    <>
      <Navigation page="search" />
      <Input size="medium" placeholder="ex) 페페,총" isDelete={true} onChange={handleSearch} />
      <SearchItem searchText="무한" tagName="무한도전" majorType="예능별" />
    </>
  );
}

export default SearchPage;
