import { ModalBase } from "./ModalBase";

interface Props {
  modalOpen: boolean;
  close: () => void;
}

export const SampleModal = ({ close }: Props) => {
  return (
    <ModalBase>
      <div className="m-auto overflow-hidden">
        <div className="z-100 m-auto h-300 w-300 bg-white">
          <div className="text-20-bold-140">자주 찾는 태그를 북마크하면</div>
          <div className="text-20-bold-140">엄청 재밌을 걸요</div>
          <div>구글 로그인 버튼</div>
          <div>카카오 로그인 버튼</div>
        </div>
      </div>
    </ModalBase>
  );
};
