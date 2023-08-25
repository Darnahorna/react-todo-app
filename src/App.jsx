import { useState } from "react";
import "./App.css";
import { List } from "./components/List/List";
import { AddNewList } from "./components/AddNewList/AddNewList";

const toDoList = [
  {
    id: 1,
    name: "Personal",
    items: [
      { id: 1, name: "Buy milk", completed: true },
      { id: 2, name: "Create new item", completed: true },
      { id: 3, name: "Finish a project", completed: false },
    ],
  },
  {
    id: 2,
    name: "Work",
    items: [
      { id: 1, name: "Buy milk", completed: true },
      { id: 2, name: "Create new item", completed: false },
      { id: 3, name: "Finish a project", completed: true },
      { id: 4, name: "Finish a project", completed: true },
      { id: 5, name: "Finish a project", completed: true },
      { id: 6, name: "Finish a project", completed: true },
    ],
  },
];

function App() {
  const [lists, setLists] = useState(toDoList);

  const onAddList = (listToAdd) => {
    setLists((currentLists) => {
      return [
        ...currentLists,
        { id: crypto.randomUUID(), name: listToAdd, items: [] },
      ];
    });
  };

  const onDeleteList = (id) => {
    setLists((currentLists) => {
      return currentLists.filter((toDoList) => toDoList.id !== id);
    });
  };

  const onAddTask = (listId, newTask) => {
    setLists((currentLists) => {
      return currentLists.map((list) => {
        if (list.id === listId) {
          return {
            ...list,
            items: [
              ...list.items,
              { id: crypto.randomUUID(), name: newTask, completed: false },
            ],
          };
        }
        return list;
      });
    });
  };

  const onDeleteTask = (listId, taskId) => {
    setLists((currentLists) => {
      return currentLists.map((list) => {
        if (list.id === listId) {
          return {
            ...list,
            items: list.items.filter((item) => item.id !== taskId),
          };
        }
        return list;
      });
    });
  };

  const onToggleTask = (listId, taskId) => {
    setLists((currentLists) => {
      return currentLists.map((list) => {
        if (list.id === listId) {
          const updatedItems = list.items.map((item) => {
            if (item.id === taskId) {
              return { ...item, completed: !item.completed };
            }
            return item;
          });

          return { ...list, items: updatedItems };
        }
        return list;
      });
    });
  };

  return (
    <main className="content">
      {lists.map((list) => {
        return (
          <List
            list={list}
            onDeleteList={onDeleteList}
            onAddTask={onAddTask}
            onDeleteTask={onDeleteTask}
            onToggleTask={onToggleTask}
            key={list.id}
          />
        );
      })}
      <AddNewList onAddList={onAddList} />
    </main>
  );
}

export default App;
