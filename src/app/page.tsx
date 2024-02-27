import ListItem from "~/components/list-item";
import prisma from "~/lib/db";
import { revalidatePath } from "next/cache";
import { For } from "~/utils/for";
import { Task } from "@prisma/client";

async function toggleTask(id: number, complete: boolean) {
  "use server";

  await prisma.task.update({ where: { id }, data: { complete } });
}

async function deleteTask(id: number) {
  "use server";

  await prisma.task.delete({ where: { id } });
  revalidatePath("/");
}

async function Home() {
  const tasks = await prisma.task.findMany();

  return (
    <>
      <div className="mt-10 flex h-screen justify-center">
        {tasks.length === 0 && (
          <h1 className="text-4xl font-bold">Your TODO List is empty</h1>
        )}
        <ul className="flex flex-col gap-3 pl-4">
          <For
            each={tasks}
            render={(task: Task) => (
              <ListItem
                todo={task}
                toggleTodo={toggleTask}
                deleteTodo={deleteTask}
              />
            )}
          />
        </ul>
      </div>
    </>
  );
}

export default Home;
