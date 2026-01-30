import "./App.css";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import { Analytics } from "@vercel/analytics/react";

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
