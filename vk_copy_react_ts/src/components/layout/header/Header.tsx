import React, { useState } from "react";

import { Search } from '@mui/icons-material';

import styles from './Header.module.css';

import vkLogo from '../../../assets/vk.svg';

const Header: React.FC = () => {

  const [serchActive, setSearchActive] = useState<boolean>(false);

  const onFocusSearchHandler = () => {
    setSearchActive(true);
  }

  const onBlurSerchHandler = () => {
    setSearchActive(false);
  }

  return (
    <header className={styles['header']}>
      <div className={styles['image-wrapper']}>
        <img src={vkLogo} alt="" width='32' height='32' />
      </div>
      <div className={styles['wrapper']}>
        {!serchActive && <Search />}
        <input
          type="text"
          placeholder="Поиск..."
          onFocus={onFocusSearchHandler}
          onBlur={onBlurSerchHandler} />
      </div>

    </header>
  );
};

export default Header;