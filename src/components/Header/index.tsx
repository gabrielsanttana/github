import React from 'react';
import styles from './Header.module.scss';
import {FaGithub} from 'react-icons/fa';

const Header: React.FC = () => {
  return (
    <header className={styles.container}>
      <FaGithub size={32} color="#fff" />

      <form onSubmit={() => {}}>
        <input type="text" placeholder="Enter a username or repo..." />
      </form>
    </header>
  );
};

export default Header;
