import { useState, useEffect } from 'react';

const useTheme = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light'
  );

  useEffect(() => {
    localStorage.setItem('theme', theme);
    const localTheme = localStorage.getItem('theme');
    document.querySelector('html').setAttribute('data-theme', localTheme);

    const element = document.documentElement;

    if (theme === 'dark') {
      element.classList.add('dark');
      localStorage.setItem("theme", "dark");
      document.body.classList.add('dark');
    } else {
      element.classList.remove('dark');
      localStorage.setItem("theme", "light");
      document.body.classList.remove('dark');
    }
  }, [theme]);

  return [theme, setTheme];
};

export default useTheme;
