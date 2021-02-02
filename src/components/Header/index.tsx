import React from 'react';
import styles from './Header.module.scss';

const Header: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1>Header</h1>
    </div>
  );
};

export default Header;
