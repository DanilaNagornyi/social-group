import {classNames} from "shared/lib/classNames/classNames";
import s from './Button.module.scss';
import {ButtonHTMLAttributes, FC} from "react";

export enum ThemeButtonEnum {
  CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButtonEnum;
}

export const Button: FC<ButtonProps> = ({
                                          className,
                                          children,
                                          theme,
                                          ...restProps
                                        }) => {
  return (
    <button
      className={classNames(s.Button, {}, [className, s[theme]])}
      {...restProps}
    >
      {children}
    </button>
  );
};
