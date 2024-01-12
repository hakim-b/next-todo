"use client";

import { Progress } from "@nextui-org/react";

export default function Loading() {
  return (
    <div className="justify-center">
      <Progress
        size="md"
        isIndeterminate
        aria-label="Loading..."
        className="max-w-md"
      />
    </div>
  );
}
