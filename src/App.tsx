import './App.css'
import { workshopName } from "./variable";

function soma(x: number, y: number): number{
  return x + y
}

function App() {
  return (
    <main>
      <h1>{workshopName}</h1>
      <p>Soma 2 + 2: {soma(2,2)}</p>
    </main>
  );
}

export default App;
