import { useCallback, useState } from "react";

interface DownloadOptions {
  target: string;
  name: string;
  onSuccess?: () => void;
  onError?: () => void;
}

/**
 * NOTE 이미지 URL 다운로드만 구현
 * - 다른 형식의 파일은 추가 구현 필요
 */
export const useDownload = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  const download = useCallback(
    async ({ target, name, onSuccess, onError }: DownloadOptions) => {
      if (!target || isDownloading) return;

      try {
        setIsDownloading(true);

        const blob = await fetch(target).then((response) => response.blob());
        const blobURL = URL.createObjectURL(blob);
        const ext = /\.(\w+)$/g.exec(target)?.[0] || ".png";

        const a = document.createElement("a");
        a.href = blobURL;
        a.download = name + ext;
        a.rel = "noopener noreferrer";

        a.click();

        URL.revokeObjectURL(blobURL);
        onSuccess?.();
      } catch (e) {
        onError?.();
      } finally {
        setIsDownloading(false);
      }
    },
    [isDownloading],
  );

  return { isDownloading, download };
};
