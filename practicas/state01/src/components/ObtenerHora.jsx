import React, { useState, useEffect } from "react";
import "./ObtenerHora.css";

export function ObtenerHora() {
  const [hora, setHora] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setHora(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="obtenerHora">
      <h2>Hora actual</h2>
      <div className="hora">
        <span>{hora.getHours()}</span>
        <span>:</span>
        <span>{hora.getMinutes()}</span>
        <span>:</span>
        <span>{hora.getSeconds()}</span>
      </div>
      <button>Mostrar Hora</button>
    </div>
  );
}
