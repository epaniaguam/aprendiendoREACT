import { Cronometro } from "./components/Cronometro";
import { ObtenerHora } from "./components/ObtenerHora";
import { ContadorRegresivo } from "./components/ContadorRegresivo";
import { Footter } from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="app">
      {/* <Cronometro /> */}
      <ContadorRegresivo fecha={"07/19/2024 23:48"} />
      {/* <ObtenerHora /> */}
      <Footter />
    </div>
  );
}

export default App;
