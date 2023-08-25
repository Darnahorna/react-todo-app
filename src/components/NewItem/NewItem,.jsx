import { useState } from "react";
import classes from "./NewItem.module.css";

export const NewItem = ({ listId, deactivateMode, onAddTask }) => {
  const [newTask, setNewTask] = useState("");

  const onTaskNameChange = (e) => {
    setNewTask(e.currentTarget.value);
  };

  const onAddNewTask = (e) => {
    onAddTask(listId, newTask);
    setNewTask("");
    deactivateMode;
  };

  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className={classes.input_data}>
          <textarea
            placeholder="Enter a title for this task"
            name="title"
            rows={2}
            cols={30}
            value={newTask}
            onChange={onTaskNameChange}
          ></textarea>
        </div>
        <div className={classes.input_data_footer}>
          <button
            type="submit"
            className={classes.add_btn}
            onClick={onAddNewTask}
          >
            Add
          </button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            viewBox="0 -960 960 960"
            width="20"
            onClick={deactivateMode}
          >
            <path d="m249-207-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z" />
          </svg>
        </div>
      </form>
    </>
  );
};
