import ListItem from "@/components/list-item";
import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";

async function getTodos() {
  return prisma.todo.findMany();
}

async function toggleTask(id: string, complete: boolean) {
  "use server";

  await prisma.todo.update({ where: { id }, data: { complete } });
}

async function deleteTask(id: string) {
  "use server";

  await prisma.todo.delete({ where: { id } });
  revalidatePath("/");
}

async function Home() {
  const todos = await getTodos();

  return (
    <>
      <div className="mt-10 flex h-screen justify-center">
        <ul className="flex flex-col gap-3 pl-4">
          {todos.map((task) => (
            <ListItem
              key={task.id}
              {...task}
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
