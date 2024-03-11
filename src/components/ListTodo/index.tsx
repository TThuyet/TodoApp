import * as React from "react";
import { ITodoItem } from "../../types/TodoType";
import { useState } from "react";
import styles from "./ListTodo.module.css";

export interface IListTodoProps {
  listTodo: ITodoItem[];
  handleDeleteTodo: (id: number) => void;
  handleUpdateTodo: (id: string) => void;
  // handleFilterTodo: (type: string) => void;
}

export function ListTodo({
  listTodo,
  handleDeleteTodo,
  handleUpdateTodo,
}: // handleFilterTodo,
IListTodoProps) {
  const [filter, setFilter] = useState("all");
  const handleItemTodo = (e: any) => {
    const item = e.target.closest(".delete");
    // console.log();

    if (item) {
      const index = e.target.dataset.index;
      // console.log(index);
      handleDeleteTodo(index);
    } else {
      const id = e.target.dataset.id;
      console.log(id);
      handleUpdateTodo(id);
    }
  };

  let newListTodo: ITodoItem[] = listTodo;
  if (filter === "all") {
    newListTodo = listTodo;
  } else if (filter === "todo") {
    newListTodo = listTodo.filter((todo) => !todo.isComplete);
  } else if (filter === "done") {
    newListTodo = listTodo.filter((todo) => todo.isComplete);
  }
  return (
    <div className={styles.list}>
      <p className={styles.flexbox}>
        <span className={styles.span}> List :</span>
        <select
          className={styles.select}
          name=""
          id=""
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">All</option>
          <option value="todo">To do</option>
          <option value="done">Done</option>
        </select>
      </p>
      <ul onClick={handleItemTodo}>
        {newListTodo.map((todo, index) => (
          <li
            key={todo.id}
            data-id={todo.id}
            className={`${todo.isComplete ? styles.complete : ""} ${
              styles.li
            } ${styles.flexbox}`}
          >
            <p data-id={todo.id}>{todo.todoContent}</p>{" "}
            <span className={styles.del}>
              <i className="fa-solid fa-trash delete" data-index={index}></i>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
