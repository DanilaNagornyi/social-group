import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from "../theme/ThemeContext";
import {useContext} from "react";

interface UseThemeTypes {
  toggleTheme: () => void;
  theme: Theme;
}

export function useTheme(): UseThemeTypes {
  const {theme, setTheme} = useContext(ThemeContext);

  const toggleTheme = (): void => {
    const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
    setTheme(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  }

  return {theme, toggleTheme}
}