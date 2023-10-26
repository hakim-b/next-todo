"use client";

import { Skeleton } from "@nextui-org/react";

function Loading() {
  return (
    <>
      <div className="mt-10 flex h-screen justify-center">
        <div className="flex w-full max-w-[300px] gap-3">
          <div>
            <Skeleton className="flex h-12 w-12 rounded-full" />
          </div>
          <div className="flex w-full flex-col gap-2">
            <Skeleton className="h-3 w-3/5 rounded-lg" />
            <Skeleton className="h-3 w-4/5 rounded-lg" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Loading;
