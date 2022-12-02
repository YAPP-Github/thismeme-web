import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div>
      <div className="border bg-green-200 p-4">tailwindcss 테스트입니다.</div>
      <div className="bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3">
        tailwindcss 테스트입니다.
      </div>
    </div>
  );
};

export default Home;
