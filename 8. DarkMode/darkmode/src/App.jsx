import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [theme, setTheme] = useState(()=> localStorage.getItem("theme") || "light");

  useEffect(()=>{
    document.body.className = theme;

    localStorage.setItem("theme", theme);
  },[theme])

  const toggleTheme = () => {
    setTheme((prevTheme)=> (prevTheme==="light"? "dark": "light"));
  }

  return (
    <>
      <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Theme
      </button>
      <h1>{theme === "light" ? "Light Theme" : "Dark Theme"} is Active!</h1>
    </>
  )
}

export default App;
