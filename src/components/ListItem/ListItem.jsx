import classes from "./ListItem.module.css";

export const ListItem = ({ listId, item, onDeleteTask, onToggleTask }) => {
  return (
    <div className={classes.list}>
      <div>
        <input
          type="checkbox"
          checked={item.completed}
          onChange={(e) => onToggleTask(listId, item.id)}
        />
        <span className={classes.title}>{item.name}</span>
      </div>
      <div className={classes.delete_mark}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="15"
          viewBox="0 -960 960 960"
          width="15"
          className={classes.delete}
          onClick={(e) => onDeleteTask(listId, item.id)}
        >
          <path d="m249-207-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z" />
        </svg>
      </div>
    </div>
  );
};
