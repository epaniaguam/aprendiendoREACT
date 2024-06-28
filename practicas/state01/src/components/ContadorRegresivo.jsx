/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

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
    <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/3">
      <h2 className="text-4xl mb-3">REGRESAMOS EN</h2>
      <div className="time grid grid-rows-2 gap-2 justify-items-center text-white ">
        <div className="text-7xl grid grid-cols-7 gap-2 justify-items-center">
          <span>{dias}</span>
          <span className="gap-1">:</span>
          <span>{formatearNumero(horas)}</span>
          <span className="gap-1">:</span>
          <span>{formatearNumero(minutos)}</span>
          <span className="gap-1">:</span>
          <span>{formatearNumero(segundos)}</span>
        </div>
        <div className="text-s grid grid-cols-7 gap-2 justify-items-center">
          <span>Días</span>
          <span></span>
          <span>Horas</span>
          <span></span>
          <span>Minutos</span>
          <span></span>
          <span>Segundos</span>
        </div>
      </div>
    </div>
  );
}
