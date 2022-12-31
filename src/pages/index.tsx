import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { Suspense } from "react";

import { useModal } from "@/application/hooks/common";
import { brandimage } from "@/components/common/Image/assets";
import { SampleModal } from "@/components/common/Modal";
import { Navigation } from "@/components/common/Navigation";
import { HomePopular } from "@/components/home";
import { SearchInput } from "@/components/search";

const Home: NextPage = () => {
  const router = useRouter();
  const { modalOpen, handleOpen, handleClose } = useModal();

  return (
    <>
      <Navigation page="intro" />
      <button onClick={handleOpen}>Open Modal</button>
      {modalOpen && <SampleModal onClose={handleClose} />}
      <Image alt="brandimage" className="m-auto my-10" height={190} src={brandimage} width={230} />
      <SearchInput
        placeholder="당신이 찾는 밈 여기 있다."
        onClick={() => {
          router.push("/search");
        }}
      />

      <div className="mt-60 mb-13 text-center text-16-regular-130">인기검색어</div>
      <Suspense fallback={<div className="text-title">loading</div>}>
        <ul className="flex flex-row flex-wrap justify-center px-36">
          <HomePopular />
        </ul>
      </Suspense>
      <div className="text-center text-20-bold-140">어쩌면 당신이 찾았을 밈</div>
    </>
  );
};

export default Home;
