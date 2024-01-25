"use client";

import { Button, Checkbox } from "@nextui-org/react";

type ListItemProps = {
  id: string;
  title: string;
  complete: boolean;
  toggleTodo: (id: string, complete: boolean) => void;
  deleteTodo: (id: string) => void;
};

function ListItem({ id, title, complete, toggleTodo, deleteTodo }: ListItemProps) {
  return (
    <>
      <li className="flex justify-between gap-3">
        <Checkbox
          color="success"
          lineThrough
          defaultSelected={complete}
          onChange={(e) => toggleTodo(id, e.target.checked)}
          id={id}
        >
          {title}
        </Checkbox>
        <Button onClick={() => deleteTodo(id)} color="danger">
          Delete
        </Button>
      </li>
    </>
  );
}

export default ListItem;
