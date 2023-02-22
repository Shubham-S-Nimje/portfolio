import { useState } from "react";
import Contact from "./components/Contact";
import Header from './components/Header';
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className = {darkMode && "dark"}>
      <Header darkMode = {darkMode} setDarkMode = {setDarkMode}/>

      <main className="bg-white dark:bg-gray-900 text-gray-900
       dark:text-white">
      <Hero />
      <Services />
      <Portfolio />
      <Contact />
      </main>
    </div>
  );
}

export default App;
