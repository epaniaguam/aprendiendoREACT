import { useState, useEffect } from "react";
import "./Cronometro.css";

export function Cronometro() {
  const [cronoMili, setCronoMili] = useState(0);
  const [cronoSeco, setCronoSeco] = useState(0);
  const [cronoMinu, setCronoMinu] = useState(0);
  const [pause, setPause] = useState(true); // true = pausado, false = corriendo
  const [continuar, setContinuar] = useState(false);

  useEffect(() => {
    let intervalo;
    if (pause === false) {
      intervalo = setInterval(() => {
        setCronoMili(cronoMili + 1);
        if (cronoMili === 99) {
          setCronoSeco(cronoSeco + 1);
          setCronoMili(0);
          if (cronoSeco === 59) {
            setCronoMinu(cronoMinu + 1);
            setCronoSeco(0);
          }
        }
      }, 9);
    } else {
      clearInterval(intervalo);
    }
    return () => clearInterval(intervalo);
  }, [pause, cronoMili, cronoSeco, cronoMinu]);

  const resetCrono = () => {
    setCronoMili(0);
    setCronoSeco(0);
    setCronoMinu(0);
    setContinuar(false);
    setPause(true);
  };
  const iniciarCrono = () => {
    console.log("Valor pause anterior: " + pause);
    setPause(pause === true ? false : true);
    setContinuar(true);
  };

  const formatearNumero = (numero) => numero.toString().padStart(2, "0");

  return (
    <div className="cronometro">
      <h2>Crono mono</h2>

      <div className="timer">
        <span>{formatearNumero(cronoMinu)}</span>
        <span>:</span>
        <span>{formatearNumero(cronoSeco)}</span>
        <span>:</span>
        <span>{formatearNumero(cronoMili)}</span>
      </div>

      <div className="buttons">
        <button onClick={iniciarCrono}>
          {continuar === false
            ? "Comenzar"
            : pause === true
            ? "Continuar"
            : "Pausa"}
        </button>
        <button onClick={resetCrono}>Reset</button>
      </div>
    </div>
  );
}
