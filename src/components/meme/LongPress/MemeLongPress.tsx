import { Actions, ActionsButton, ActionsGroup } from "konsta/react";
import { css } from "twin.macro";

import { useDownload, useToast } from "@/application/hooks";
import { android } from "@/application/util";
import type { Image } from "@/types";

interface Props {
  name: string;
  description: string;
  image: Image;
  open: boolean;
  onClose: () => void;
}

export const MemeLongPress = ({ name, description, image, open, onClose }: Props) => {
  const { download } = useDownload();
  const { show } = useToast();

  const url = image.images[0].imageUrl;

  const handleImageDownload = () =>
    download({
      target: url,
      name,
      onSuccess: () => show("이미지를 다운로드 했습니다!"),
    });

  const handleCollectionSave = () => show("콜렉션에 저장했습니다!");

  const handleNaviteShare = async () => {
    if (!navigator.share) return;
    await navigator.share({ title: name, text: description, url });
  };

  return (
    <>
      <Actions opened={open} onBackdropClick={onClose}>
        <ActionsGroup>
          <ActionsButton
            css={css`
              height: 48px;
              color: ${!android && "#007aff"};
              font-size: ${android ? "1.65" : "2"}rem;
            `}
            onClick={() => {
              onClose();
              handleCollectionSave();
            }}
          >
            콜렉션에 저장하기
          </ActionsButton>
          <ActionsButton
            css={css`
              height: 48px;
              color: ${!android && "#007aff"};
              font-size: ${android ? "1.65" : "2"}rem;
            `}
            onClick={() => {
              onClose();
              handleImageDownload();
            }}
          >
            이미지 다운로드
          </ActionsButton>
          <ActionsButton
            css={css`
              height: 48px;
              color: ${!android && "#007aff"};
              font-size: ${android ? "1.65" : "2"}rem;
            `}
            onClick={() => {
              onClose();
              handleNaviteShare();
            }}
          >
            공유하기
          </ActionsButton>
          <ActionsButton
            css={css`
              height: 48px;
              color: ${!android && "#007aff"};
              font-size: ${android ? "1.65" : "2"}rem;
            `}
            onClick={onClose}
          >
            취소하기
          </ActionsButton>
        </ActionsGroup>
      </Actions>
    </>
  );
};
