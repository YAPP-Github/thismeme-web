import type { NextPage } from "next";
import { useRouter } from "next/router";

import { useAuth } from "@/application/hooks";
import { DEFAULT_DESCRIPTION, TITLE } from "@/application/util";
import { IntroPageNavigation } from "@/components/common/Navigation";
import { NextSeo } from "@/components/common/NextSeo";
import { PullToRefresh } from "@/components/common/PullToRefresh";
import { SSRSuspense } from "@/components/common/Suspense";
import { MemeListContainer, PopularTagList, UserSharedMemeList } from "@/components/home";
import { SkeletonMeme, SkeletonTagList } from "@/components/home/Skeleton";
import { SearchInput } from "@/components/search";

const HomePage: NextPage = () => {
  const router = useRouter();
  const { isLoading, isLogin, user } = useAuth();

  return (
    <>
      <NextSeo
        description={DEFAULT_DESCRIPTION}
        openGraph={{ imageUrl: "/open-graph/home.png" }}
        title={TITLE.default}
      />
      <IntroPageNavigation />
      <PullToRefresh>
        <section className="pt-8" />
        <SearchInput
          inputMode="none"
          placeholder="당신이 생각한 '그 밈' 검색하기"
          onClick={() => {
            router.push("/search");
          }}
        />
        <SSRSuspense fallback={<SkeletonTagList count={5} />}>
          <PopularTagList />
        </SSRSuspense>
        <section className="pb-40" />
        {isLogin && (
          <>
            <SSRSuspense fallback={<SkeletonMeme />}>
              <UserSharedMemeList name={user?.name} sharedId={user?.sharedCollectionId} />
              <MemeListContainer />
            </SSRSuspense>
          </>
        )}
        {!isLogin && !isLoading && <MemeListContainer />}
      </PullToRefresh>
    </>
  );
};

export default HomePage;
