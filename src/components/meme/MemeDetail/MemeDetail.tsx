import { useMemeDetailById, useToast } from "@/application/hooks";
import { PAGE_URL } from "@/application/util";
import { Icon } from "@/components/common/Icon";
import { Photo } from "@/components/common/Photo";

import { ClipboardCopyButton, DownloadButton, KakaoShareButton, NativeShareButton } from "./Button";

interface Props {
  id: string;
}

export const MemeDetail = ({ id }: Props) => {
  const {
    viewCount,
    createdDate,
    name,
    description,
    image: { images },
  } = useMemeDetailById(id);

  const { show } = useToast();

  const { imageUrl: src, imageWidth: width, imageHeight: height } = images[0];

  const handleKakaoShare = () => show("카카오톡 공유가 완료되었습니다", { icon: "kakao2" });
  const handleClipboardCopy = () => show("링크가 복사되었습니다", { icon: "share" });
  const handleDownload = () => show("앨범에 저장하였습니다", { icon: "cake" });
  const handleNativeShare = () => show("공유가 완료되었습니다", { icon: "cake" });

  return (
    <article>
      <Photo
        className="mt-16 max-h-[70vh] min-h-[25vh] w-full rounded-15"
        height={height}
        src={src}
        width={width}
      />
      <section className="mt-10 flex flex-col gap-8">
        <div className="flex items-center gap-14 text-12-regular-160 text-gray-10">
          <span>{`조회수 ${viewCount}`}</span>
          <span>{createdDate.split("T")[0]}</span>
        </div>
        <div className="flex w-full items-center justify-between text-20-bold-140">
          {name} <Icon name="warn" />
        </div>
        <p className="text-16-regular-130">{description}</p>
      </section>

      <div className="flex w-full flex-col items-center gap-16 py-50">
        <ul className="flex gap-10">
          <KakaoShareButton
            resource={{ url: PAGE_URL, imageUrl: src, title: name, description }}
            onSuccess={handleKakaoShare}
          />
          <DownloadButton name={name} target={src} onSuccess={handleDownload} />
          <ClipboardCopyButton target={PAGE_URL} onSuccess={handleClipboardCopy} />
          <NativeShareButton
            text={description}
            title={name}
            url={PAGE_URL}
            onSuccess={handleNativeShare}
          />
        </ul>
        <span className="text-16-semibold-130 text-dark-gray-20">친구에게 밈을 공유해 보세요</span>
      </div>
    </article>
  );
};
