import { Button } from "@/components/common/Button";

export const SearchPopularItem = ({ name, tagId }: any) => {
  return (
    <div className="flex flex-row">
      <Button
        as="ul"
        className="h-16 w-16 rounded-full border border-black bg-black text-white"
        size="medium"
      >
        {tagId}
      </Button>
      <div className="text-tag">{name}</div>
    </div>
  );
};
