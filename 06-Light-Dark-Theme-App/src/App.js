import React, { useState, useEffect } from "react";
import Posts from "./components/Posts";
import { ThemeContext, themes } from "./context/themeContext";

function App() {
  const [theme, setTheme] = useState(themes.light);

  //btn
  function handleOnClick() {
    theme === themes.light ? setTheme(themes.dark) : setTheme(themes.light);
  }

  const body = document.body;
  useEffect(() => {
    switch (theme) {
      case themes.light:
        body.classList.remove("bg-dark");
        body.classList.remove("text-light");
        body.classList.add("bg-light");
        body.classList.add("text-dark");
        break;
      case themes.dark:
        body.classList.remove("bg-light");
        body.classList.remove("text-dark");
        body.classList.add("bg-dark");
        body.classList.add("text-light");
        break;
      default:
        body.classList.remove("bg-dark");
        body.classList.remove("text-light");
        body.classList.add("bg-light");
        body.classList.add("text-dark");
    }
  }, [theme]);

  return (
    <>
      <ThemeContext.Provider value={{ theme, handleOnClick }}>
        <div className="main-container">
          <h1 className="text-center">Light Dark Theme App</h1>
          <Posts theme={theme} />
        </div>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
