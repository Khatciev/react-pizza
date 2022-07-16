import React, { FC } from "react";

import styles from "./NotFoundBlock.module.scss";

export const NotFoundBlock: FC = () => {
  return (
    <div className={styles.root}>
      <h1>
        <span>
          <b>:(</b>
        </span>
        <br />
        Нечего не найдено
      </h1>
      <p className={styles.description}>
        Извините такой станице нету в нашем интернет магазине
      </p>
    </div>
  );
};
