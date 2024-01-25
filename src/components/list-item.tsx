"use client";

import { Button, Checkbox } from "@nextui-org/react";
import { Task } from "@prisma/client";

type ListItemProps = {
  todo: Task;
  toggleTodo: (id: string, complete: boolean) => void;
  deleteTodo: (id: string) => void;
};

function ListItem({ todo, toggleTodo, deleteTodo }: ListItemProps) {
  return (
    <>
      <li className="flex justify-between gap-3">
        <Checkbox
          color="success"
          lineThrough
          defaultSelected={todo.complete}
          onChange={(e) => toggleTodo(todo.id, e.target.checked)}
          id={todo.id}
        >
          {todo.title}
        </Checkbox>
        <Button onClick={() => deleteTodo(todo.id)} color="danger">
          Delete
        </Button>
      </li>
    </>
  );
}

export default ListItem;
