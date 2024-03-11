import * as React from "react";
import styles from "./Header.module.css";

export interface IHeaderProps {}

export default function Header(props: IHeaderProps) {
  return (
    <div>
      <h3 className={styles.h3}>Let's add what you have to do!</h3>
      <p className={styles.p}>
        Fill the input and click button or "Enter" to add a new task into the
        list.
      </p>
      <p className={styles.p}>
        To mark as completed, just click directly to the task
      </p>
    </div>
  );
}
