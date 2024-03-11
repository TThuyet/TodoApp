import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import { ITodoItem } from "./types/TodoType";
import AddTodo from "./components/AddTodo";
import { ListTodo } from "./components/ListTodo";
import { nanoid } from "nanoid";

function App() {
  const [listTodo, setlistTodo] = useState<ITodoItem[]>([
    {
      id: "1",
      todoContent: "Todo 1",
      isComplete: false,
    },
    {
      id: "2",
      todoContent: "Todo 2",
      isComplete: false,
    },
    {
      id: "3",
      todoContent: "Todo 3",
      isComplete: false,
    },
  ]);

  const handleAddTodo = (value: string) => {
    let result: any = listTodo[listTodo.length - 1]?.id;

    // let id: string = ;
    const newTodoItem: ITodoItem = {
      // id: (result ? result : 0) * 1 + 1 + "",
      id: nanoid(),
      todoContent: value,
      isComplete: false,
    };

    setlistTodo([...listTodo, newTodoItem]);
  };

  const handleDeleteTodo = (index: number) => {
    setlistTodo((prev) => {
      const newListTodo = [...prev];
      newListTodo.splice(index, 1);
      // setlistTodo([...listTodo]);
      return newListTodo;
    });
  };

  const handleUpdateTodo = (id: string) => {
    // const newListTodo = listTodo.map((item: ITodoItem) => {
    //   if (item.id === id) {
    //     item.isComplete = !item.isComplete;
    //   }
    //   return item;
    // });

    // setlistTodo([...newListTodo]);

    // setlistTodo((prev) => {
    //   const newListTodo = [...prev];
    //   const arr: ITodoItem[] = [];
    //   newListTodo.map((item: ITodoItem) => {
    //     if (item.id === id) {
    //       item.isComplete = !item.isComplete;
    //     }
    //     return item;
    //   });
    // });

    // const todoChange = listTodo.filter((item) => item.id === id)[0];
    // todoChange.isComplete = !todoChange.isComplete;
    const newListTodo = listTodo.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          isComplete: !item.isComplete,
        };
      }
      return item;
    });
    setlistTodo(newListTodo);
  };

  return (
    <>
      <Header />
      <AddTodo handleAddTodo={handleAddTodo} />
      <ListTodo
        listTodo={listTodo}
        handleDeleteTodo={handleDeleteTodo}
        handleUpdateTodo={handleUpdateTodo}
        // handleFilterTodo={handleFilterTodo}
      />
    </>
  );
}

export default App;
