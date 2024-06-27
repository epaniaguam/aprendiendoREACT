/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import "./ContadorRegresivo.css";

export function ContadorRegresivo({ fecha }) {
  const DATE_TARGET = new Date(fecha.toString());
  const DURACION = DATE_TARGET - new Date();
  const MILI_SECONDS = 1000;
  const MILI_MINUTES = MILI_SECONDS * 60;
  const MILI_HOURS = MILI_MINUTES * 60;
  const MILI_DAYS = MILI_HOURS * 24;

  const [segundos, setSegundos] = useState(() => {
    const sec = Math.floor((DURACION % MILI_MINUTES) / MILI_SECONDS);
    console.log(sec);
    return sec;
  });
  const [minutos, setMinutos] = useState(() => {
    const min = Math.floor((DURACION % MILI_HOURS) / MILI_MINUTES);
    console.log(min);
    return min;
  });
  const [horas, setHoras] = useState(() => {
    const hour = Math.floor((DURACION % MILI_DAYS) / MILI_HOURS);
    console.log(hour);
    return hour;
  });
  const [dias, setDias] = useState(() => {
    const day = Math.floor(DURACION / MILI_DAYS);
    console.log(day);
    return day;
  });

  useEffect(() => {
    const intervalo = setInterval(() => {
      if (segundos <= 0 && minutos <= 0 && horas <= 0 && dias <= 0) {
        clearInterval(intervalo);
        return;
      }

      setSegundos(segundos - 1);
      // console.log(segundos);
      if (segundos === 0) {
        setSegundos(59);
        setMinutos(minutos - 1);
        if (minutos === 0) {
          setMinutos(59);
          setMinutos(horas - 1);
          if (horas === 0) {
            setHoras(23);
            setDias(dias - 1);
          }
        }
      }
    }, 1000);

    return () => clearInterval(intervalo);
  }, [segundos, minutos, horas, dias]);

  const formatearNumero = (numero) => numero.toString().padStart(2, "0");

  return (
    <div className="contador">
      <h2 className="text-3xl ">REGRESAMOS EN</h2>
      <div className="time">
        <span className="numeros">{dias}</span>
        <span className="numeros">:</span>
        <span className="numeros">{formatearNumero(horas)}</span>
        <span className="numeros">:</span>
        <span className="numeros">{formatearNumero(minutos)}</span>
        <span className="numeros">:</span>
        <span className="numeros">{formatearNumero(segundos)}</span>
        <span className="sub-texto">Días</span>
        <span className="sub-texto"></span>
        <span className="sub-texto">Horas</span>
        <span className="sub-texto"></span>
        <span className="sub-texto">Minutos</span>
        <span className="sub-texto"></span>
        <span className="sub-texto">Segundos</span>
      </div>
    </div>
  );
}
