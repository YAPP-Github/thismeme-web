import { css } from "twin.macro";

import { useMemeDetailById } from "@/application/hooks";
import { Photo } from "@/components/common/Photo";
import { SSRSuspense } from "@/components/common/Suspense";
import { MemeExport } from "@/components/meme/MemeInfo/DropDown/MemeExport";

interface Props {
  id: string;
}

export const MemeDetail = ({ id }: Props) => {
  const {
    viewCount,
    createdDate,
    shareCount,
    name,
    description,
    image: { images },
    isRefetching,
  } = useMemeDetailById(id);

  const { imageUrl, imageWidth, imageHeight } = images[0];

  return (
    <>
      <article>
        <section
          className="relative mt-16 flex flex-col"
          css={css`
            -webkit-touch-callout: initial;
          `}
        >
          <Photo
            priority
            className="max-h-[70vh] min-h-[25vh] w-full rounded-15"
            height={imageHeight}
            sizes="200px"
            src={imageUrl}
            width={imageWidth}
          />

          <SSRSuspense>
            <MemeExport id={id} />
          </SSRSuspense>

          <div className="flex items-center justify-between pt-4 pb-16 font-suit text-12-bold-160 text-gray-500">
            <span>{new Date(createdDate).toISOString().split("T")[0].replaceAll("-", ".")}</span>
            {!isRefetching && (
              <span className="flex gap-15">
                <span>{`조회수 ${viewCount}`}</span>
                <span>{`공유 ${shareCount}`}</span>
              </span>
            )}
          </div>
        </section>
        <section className="mb-16 font-suit">
          {name && <h1 className="py-16 text-22-bold-140">{name}</h1>}
          {description && <p className="text-16-regular-140">{description}</p>}
        </section>
      </article>
    </>
  );
};
