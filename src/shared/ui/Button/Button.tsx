import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, FC } from 'react';
import s from './Button.module.scss';

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
}) => (
    <button
        type="button"
        className={classNames(s.Button, {}, [className, s[theme]])}
        {...restProps}
    >
        {children}
    </button>
);
