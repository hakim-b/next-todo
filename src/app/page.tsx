import ListItem from "@/components/ListItem";
import { prisma } from "@/db";
import { revalidatePath } from "next/cache";

async function getTodos() {
  return prisma.todo.findMany();
}

async function toggleTodo(id: string, complete: boolean) {
  "use server";

  await prisma.todo.update({ where: { id }, data: { complete } });
}

async function deleteTodo(id: string) {
  "use server";

  await prisma.todo.delete({ where: { id } });
  revalidatePath("/");
}

async function Home() {
  const todos = await getTodos();

  return (
    <>
      <div className="mt-10 flex h-screen justify-center">
        <ul className="pl-4 flex flex-col gap-3">
          {todos.map((todo) => (
            <ListItem
              key={todo.id}
              {...todo}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
            />
          ))}
        </ul>
      </div>
    </>
  );
}

export default Home;
