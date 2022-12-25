import { Chip } from "../common/Chip";

export const PopularTag = () => {
  return (
    <>
      <div className="mt-60 mb-13 text-center text-regular">인기검색어</div>
      <div className="flex flex-row flex-wrap justify-center px-36">
        <Chip className="mr-8 mb-8" label="무" size="medium" type="recommend" />
        <Chip className="mr-8 mb-8" label="무한" size="medium" type="recommend" />
        <Chip className="mr-8 mb-8" label="무한도" size="medium" type="recommend" />
        <Chip className="mr-8 mb-8" label="무한도전" size="medium" type="recommend" />
        <Chip className="mr-8 mb-8" label="무한도전전전" size="medium" type="recommend" />
      </div>
    </>
  );
};
