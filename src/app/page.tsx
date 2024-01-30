import ListItem from "@/components/list-item";
import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";

async function toggleTask(id: string, complete: boolean) {
  "use server";

  await prisma.task.update({ where: { id }, data: { complete } });
}

async function deleteTask(id: string) {
  "use server";

  await prisma.task.delete({ where: { id } });
  revalidatePath("/");
}

async function Home() {
  const tasks = await prisma.task.findMany();

  return (
    <>
      <div className="mt-10 flex h-screen justify-center">
        <ul className="flex flex-col gap-3 pl-4">
          {tasks.map((task) => (
            <ListItem
              key={task.id}
              todo={task}
              toggleTodo={toggleTask}
              deleteTodo={deleteTask}
            />
          ))}
        </ul>
      </div>
    </>
  );
}

export default Home;
