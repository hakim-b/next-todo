import { Link } from "@nextui-org/link";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import prisma from "@/lib/db";
import { redirect } from "next/navigation";

async function createTodo(data: FormData) {
  "use server";

  const title = data.get("title")?.valueOf();

  if (typeof title !== "string" || title.length === 0) {
    throw new Error("Invalid title");
  }

  await prisma.task.create({ data: { title, complete: false } });
  redirect("/");
}

function Page() {
  return (
    <>
      <form
        className="container mx-auto mt-4 flex flex-col gap-2 sm:max-w-md"
        action={createTodo}
      >
        <Input type="text" label="Task name" name="title" isRequired />
        <div className="flex justify-end gap-1">
          <Button as={Link} color="danger" href="..">
            Cancel
          </Button>
          <Button type="submit" color="success">
            Add
          </Button>
        </div>
      </form>
    </>
  );
}

export default Page;
