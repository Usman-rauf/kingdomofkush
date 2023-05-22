import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { BsFillBrightnessHighFill, BsFillMoonFill } from "react-icons/bs";
export default function ThemeSwitcher({ isAdmin }) {
  const [isDark, setIsDark] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  useEffect(() => {
    const curTheme = typeof window !== 'undefined' ? theme : systemTheme
    setIsDark(curTheme === 'dark');
  }, [theme]);
  if (isAdmin == true) {
    return (
      <button className="rounded-full" onClick={() => setTheme(isDark ? 'light' : 'dark')}>
        {isDark ? <BsFillMoonFill className="text-[1.5rem]" /> : <BsFillBrightnessHighFill className="text-[1.5rem]" />}
      </button>
    );
  }
  return (<div className="fixed lg:top-[35%] bottom-[10%] lg:left-0 left-[90%] z-[99999]">
    <button className="lg:-rotate-90 bg-[#fff] dark:bg-[#454545] w-10 lg:w-24 h-10 rounded-full border-[#fff] dark:border-[#454545] border-2 flex justify-center items-center drop-shadow-md"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}>
      <b className="mr-2 hidden lg:block">{isDark ? 'Dark' : 'Light'}</b>
      {isDark ? <BsFillMoonFill /> : <BsFillBrightnessHighFill />}
    </button>
  </div>);
};
