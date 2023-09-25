import React from 'react';
import type { FC } from 'react';
import Test from "./components/Test";
import './index.scss';

const App: FC = () => {
  return (
    <div className="app">
      <Test />
    </div>
  );
};

export default App;
