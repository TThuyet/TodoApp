import * as React from "react";
import { useState } from "react";
import styles from "./AddTodo.module.css";
export interface IAddTodoProps {
  handleAddTodo: (value: string) => void;
}

export default function AddTodo(props: IAddTodoProps) {
  const { handleAddTodo } = props;
  const [todoInput, setTodoinput] = useState("");
  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoinput(e.target.value);
  };

  const handleSubmitTodo = (e: React.FormEvent) => {
    e.preventDefault();
    handleAddTodo(todoInput);

    setTodoinput("");
  };

  return (
    <div>
      <form className={styles.form} action="" onSubmit={handleSubmitTodo}>
        <input
          type="text"
          value={todoInput}
          name=""
          id="todo"
          onChange={handleChangeInput}
          className={styles.input}
        />
        <button className={styles.button}>+</button>
      </form>
    </div>
  );
}
