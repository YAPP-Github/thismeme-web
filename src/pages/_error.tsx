import type { NextPageContext } from "next";

import { Navigation } from "@/components/common/Navigation";

interface Props {
  statusCode: number;
  err?: Error;
}

const ErrorPage = ({ statusCode, err }: Props) => {
  return (
    <>
      <Navigation />
      <div className="absolute left-1/2 top-1/2 flex -translate-x-2/4 -translate-y-2/4 flex-col items-center justify-center whitespace-nowrap font-suit">
        <span className="text-32-bold-140 ">{statusCode} 오류 발생</span>
        <span className="mt-16 text-16-semibold-140 text-gray-600">
          이 페이지를 새로고침 해보세요.
        </span>
        {err?.message && (
          <span className="mt-8 text-14-semibold-140 text-gray-300">{err.message}</span>
        )}
      </div>
    </>
  );
};

ErrorPage.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode, err };
};

export default ErrorPage;
