import "./App.css";
import { Analytics } from "@vercel/analytics/react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";

function App() {
  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <Analytics />
    </>
  );
}

export default App;
