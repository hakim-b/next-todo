"use client";

import { Progress } from "@nextui-org/react";

export default function Loading() {
  return (
    <div className="justify-center">
        <Progress
          size="sm"
          isIndeterminate
          aria-label="Loading..."
          className="max-w-md"
        />
    </div>
  );
}
