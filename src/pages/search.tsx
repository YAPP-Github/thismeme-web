import { useState } from "react";

import Input from "@/components/common/Input";
import Navigation from "@/components/common/Navigation";

function SearchPage() {
  const handleSearch = () => {
    console.log(1);
  };
  return (
    <>
      <Navigation page="search" />
      <Input size="medium" placeholder="ex) 페페,총" isDelete={true} onChange={handleSearch} />
    </>
  );
}

export default SearchPage;
