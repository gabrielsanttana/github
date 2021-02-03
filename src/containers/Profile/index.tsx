import React from 'react';
import styles from './Profile.module.scss';

const Main: React.FC = () => {
  return (
    <div className={styles.container}>
      <main>
        <div className={styles.leftSide}>
          <address>
            <div>
              <img
                src="https://avatars.githubusercontent.com/u/47339825?s=460&u=185ed18386f6fe2aac392ab8968a25139dc1c087&v=4"
                alt="Profile Picture"
              />

              <div>
                <h1>Gabriel Santana</h1>
                <h2>gabrielsanttana</h2>
              </div>
            </div>

            <ul>
              <li>
                <b>100</b>
                <span>followers</span>
                <span>-</span>
              </li>

              <li>
                <b>100</b>
                <span>following</span>
              </li>
            </ul>

            <ul></ul>
          </address>
        </div>

        <div className={styles.rightSide}></div>
      </main>
    </div>
  );
};

export default Main;
