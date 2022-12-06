import type { Post } from "mocks/types";
import type { NextPage } from "next";

import { MajorTypeChip, RecentSearchChip, TagChip } from "@/components/common/Chip/Chip.stories";
import { PostItem } from "@/components/common/PostList/PostItem";

type HomeProps = {
  posts: Post[];
};
const Home: NextPage<HomeProps> = ({ posts }) => {
  const handleLogin = () => {
    // Client-side request are mocked by `mocks/browser.ts`.
    fetch("/login", { method: "POST" })
      .then((res) => res.json())
      .then((user) => alert(`성공 !\n${user.nickname}, ${user.email}`));
  };

  return (
    <div>
      <div className="text-header">tailwindcss 테스트입니다.</div>
      <div className="text-title">tailwindcss 테스트입니다.</div>
      <div className="text-tag">tailwindcss 테스트입니다.</div>
      <div className="text-regular">tailwindcss 테스트입니다.</div>
      <div className="text-semi-bold">tailwindcss 테스트입니다.</div>
      <div className="text-label text-[12px]">tailwindcss 테스트입니다.</div>
      <div className="text-sm text-gray-20">tailwindcss 테스트입니다.</div>

      <div className="flex gap-2">
        <div className="h-[24px] w-10 rounded-3xl bg-light-gray-10"></div>
        <div className="h-10 w-10 bg-light-gray-20"></div>
        <div className="h-10 w-10 bg-light-gray-30"></div>
        <div className="h-10 w-10 bg-gray-10"></div>
        <div className="h-10 w-10 bg-gray-20"></div>
        <div className="h-10 w-10 bg-dark-gray-10"></div>
        <div className="h-10 w-10 bg-dark-gray-20"></div>
        <div className="h-10 w-10 bg-black"></div>
        <div className="h-10 w-10 bg-brand"></div>
        <div className="h-10 w-10 bg-bookmark"></div>
      </div>

      <div className="border bg-green-200 p-4">tailwindcss 테스트입니다.</div>
      <div className="bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3">
        tailwindcss 테스트입니다.
      </div>
      <MajorTypeChip />
      <RecentSearchChip />
      <TagChip />
      <div className="rounded-10 h-100 w-100 rounded-[1.4rem] border-[1px] border-solid pl-13 pr-13 pt-8 pb-8 text-tag">
        dd
      </div>
      <button onClick={handleLogin}>Login(Click Me)</button>
      {posts && (
        <ul className="flex flex-col gap-4">
          {posts.map((post) => (
            <PostItem key={post.id} post={post} />
            // <li key={post.id}>
            //   <h1 className="font-bold">{post.title}</h1>
            //   <p>{post.body}</p>
            // </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export async function getServerSideProps() {
  // Server-side requests are mocked by `mocks/server.ts`.
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}

export default Home;
