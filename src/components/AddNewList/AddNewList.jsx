import classes from "./AddNewList.module.css";
import { useState } from "react";
export const AddNewList = ({ onAddList }) => {
  const [editMode, setEditMode] = useState(false);
  const [listName, setListName] = useState("");

  const activateMode = () => {
    setEditMode(true);
  };
  const deactivateMode = () => {
    setEditMode(false);
    onAddList(listName);
    setListName("");
  };
  const onListNameChange = (e) => {
    setListName(e.currentTarget.value);
  };

  return (
    <section className={classes.add_new_section}>
      {!editMode && (
        <div className={classes.add_list_block}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            viewBox="0 -960 960 960"
            width="20"
          >
            <path d="M450-450H200v-60h250v-250h60v250h250v60H510v250h-60v-250Z" />
          </svg>
          <button
            className={classes.add_list_btn}
            type="button"
            onClick={activateMode}
          >
            Add new list
          </button>
        </div>
      )}
      {editMode && (
        <form onSubmit={deactivateMode}>
          <input
            type="text"
            className={classes.field}
            value={listName}
            autoFocus
            onChange={onListNameChange}
          />

          <div className={classes.input_data_footer}>
            <button type="submit" className={classes.add_btn}>
              Add
            </button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20"
              viewBox="0 -960 960 960"
              width="20"
              onClick={(e) => setEditMode(false)}
            >
              <path d="m249-207-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z" />
            </svg>
          </div>
        </form>
      )}
    </section>
  );
};
