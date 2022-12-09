import { useState } from "react";

import useInput from "@/application/hooks/common/useInput";
import Input from "@/components/common/Input";
import Navigation from "@/components/common/Navigation";

function SearchPage() {
  const { value, setValue, handleSearch } = useInput();

  return (
    <>
      <Navigation page="search" />
      <Input size="medium" placeholder="ex) 페페,총" isDelete={true} onChange={handleSearch} />
    </>
  );
}

export default SearchPage;
