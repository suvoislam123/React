import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Pricing from "./components/Pricing/Pricing";

export default function App() {
  return (
    <div>
      <Header></Header>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <h1 className="text-7xl">Hi this is text-7xl size text</h1>
      <Pricing></Pricing>
    </div>
  );
}
