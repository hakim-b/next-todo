"use client";

import Link from "next/link";
import { createTodo } from "../actions";
import { Button, Input } from "@nextui-org/react";

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
