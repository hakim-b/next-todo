import { Progress } from "@nextui-org/progress";

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
