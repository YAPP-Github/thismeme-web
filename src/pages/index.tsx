import type { NextPage } from "next";
import { useRouter } from "next/router";

import { Chip } from "@/components/common/Chip";
import { Navigation } from "@/components/common/Navigation";
import { PopularTag } from "@/components/home/PopularTag";
import { SearchInput } from "@/components/search";

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <div>
      <Navigation page="intro" />
      <div>브랜드 이미지가 들어갈 곳</div>
      <SearchInput
        placeholder="당신이 찾는 밈 여기 있다."
        onClick={() => {
          router.push("/search");
        }}
      />
      <PopularTag />
      <div>어쩌면 당신이 찾았을 밈</div>
    </div>
  );
};

export default Home;
