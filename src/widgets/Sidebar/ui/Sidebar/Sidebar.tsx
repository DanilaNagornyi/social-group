import {classNames} from "shared/lib/classNames/classNames";
import s from './Sidebar.module.scss';
import React, {useState} from "react";
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher";

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({className}: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const handleToggle = () => {
    setCollapsed(prev => !prev);
  }

  return (
    <div className={classNames(s.Sidebar, {[s.collapsed]: collapsed}, [className])}>
      <button onClick={handleToggle}>toggle</button>
      <div className={s.switchers}>
        <ThemeSwitcher/>
        {/*  langSwitcher*/}
      </div>
    </div>
  );
};

