import { useState } from "react";
import { ListItem } from "../ListItem/ListItem";
import { NewItem } from "../NewItem/NewItem,";
import classes from "./List.module.css";

export const List = ({
  list,
  onDeleteList,
  onAddTask,
  onDeleteTask,
  onToggleTask,
}) => {
  const [addNewMode, setAddNewMode] = useState(false);

  const onDeleteListClick = (listId) => {
    const doDelete = window.confirm(
      "Are you sure you want to delete this list?"
    );

    if (doDelete) {
      onDeleteList(listId);
    }
  };

  const activateMode = () => {
    setAddNewMode(true);
  };
  const deactivateMode = () => {
    setAddNewMode(false);
  };

  return (
    <>
      <section className={classes.list_block}>
        <div className={classes.list_block_header}>
          <h2>{list.name}</h2>
          <button
            className={classes.delete_btn}
            onClick={() => onDeleteListClick(list.id)}
          >
            delete
          </button>
        </div>

        {list.items.map((item) => {
          return (
            <ListItem
              listId={list.id}
              item={item}
              onDeleteTask={onDeleteTask}
              onToggleTask={onToggleTask}
              key={item.id}
            />
          );
        })}

        {!addNewMode && (
          <div className={classes.add_new_btn}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20"
              viewBox="0 -960 960 960"
              width="20"
              className={classes.add_svg}
            >
              <path d="M450-450H200v-60h250v-250h60v250h250v60H510v250h-60v-250Z" />
            </svg>
            <button className={classes.add_btn} onClick={activateMode}>
              Add new
            </button>
          </div>
        )}
        {addNewMode && (
          <NewItem
            listId={list.id}
            deactivateMode={deactivateMode}
            onAddTask={onAddTask}
          />
        )}
      </section>
    </>
  );
};
