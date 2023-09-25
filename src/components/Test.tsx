import React from 'react';
import type { FC } from 'react';
import s from './Test.module.scss';
const Test: FC = () => {
  return (
    <div>
      <button className={s.button}>Button</button>
    </div>
  );
};

export default Test;
