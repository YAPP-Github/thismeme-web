import { useAuth, useMemeDetailById, useToast } from "@/application/hooks";
import { usePostMemeToSharedCollection } from "@/application/hooks/api/collection";
import { DOMAIN, PATH } from "@/application/util";
import type { ModalProps } from "@/components/common/Modal";
import { Modal } from "@/components/common/Modal";
import { Photo } from "@/components/common/Photo";
import {
  ClipboardCopyButton,
  KakaoShareButton,
  NativeShareButton,
} from "@/components/meme/MemeInfo/Button";

interface Props extends ModalProps {
  id: string;
}
export const MemeShareModal = ({ id, ...modalProps }: Props) => {
  const { show } = useToast();
  const { validate, user } = useAuth();
  const pageUrl = `${DOMAIN}${PATH.getMemeDetailPage(Number(id))}`;

  const {
    name,
    description,
    image: { images },
  } = useMemeDetailById(id);

  const { mutate: postMemeToSharedCollection } = usePostMemeToSharedCollection({
    memeId: Number(id),
    sharedId: user?.sharedCollectionId as number,
  });

  const src = images[0].imageUrl;

  const showClipboardCopyToast = () => show("링크를 복사했습니다!");
  const showNativeShareErrorToast = () => show("공유하기가 지원되지 않습니다.");

  return (
    <Modal {...modalProps}>
      <Modal.Header />
      <Photo className="my-24 w-300 rounded-15" src={src} />
      <ul className="mx-auto mb-32 flex h-77 w-fit gap-16 whitespace-nowrap text-gray-600">
        <li className="relative flex flex-col items-center gap-8">
          <KakaoShareButton
            resource={{
              url: pageUrl,
              imageUrl: src,
              title: name,
              description,
            }}
            onSuccess={validate(postMemeToSharedCollection, { needSignUpModal: false })}
          />
          <span className="absolute bottom-0 font-suit text-12-bold-160">카카오로 공유</span>
        </li>
        <li className="relative flex flex-col items-center gap-8">
          <ClipboardCopyButton
            target={pageUrl}
            onSuccess={() => {
              modalProps.onClose();
              showClipboardCopyToast();
              validate(postMemeToSharedCollection, { needSignUpModal: false })();
            }}
          />
          <span className="absolute bottom-0 font-suit text-12-bold-160">링크 복사</span>
        </li>
        <li className="relative flex flex-col items-center gap-8">
          <NativeShareButton
            text={description}
            title={name}
            url={pageUrl}
            onSuccess={validate(postMemeToSharedCollection, { needSignUpModal: false })}
            onError={() => {
              modalProps.onClose();
              showNativeShareErrorToast();
            }}
          />
          <span className="absolute bottom-0 font-suit text-12-bold-160">다른 앱 공유</span>
        </li>
      </ul>
    </Modal>
  );
};
