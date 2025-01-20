import BtnOperadores from "./btnOperadores";
import BtnOperadorIgual from "./btnOperadorIgual";
import BtnNumeros from "./btnNumeros";
import BtnReiniciar from "./btnReiniciar";
import { useState } from "react";

const CuerpoCalculadora = () => {
  const [operacion, setOperacion] = useState("");
  const [text, setText] = useState("0");
  const [primerValor, setPrimerValor] = useState(null);

  const handleClickIgual = () => {
    if (!operacion || primerValor === null) return;

    const segundoValor = parseFloat(text);
    const operaciones = {
      "+": (a, b) => a + b,
      "-": (a, b) => a - b,
      "*": (a, b) => a * b,
      "/": (a, b) => (b !== 0 ? a / b : "Error"),
    };

    const resultado = operaciones[operacion](primerValor, segundoValor);
    setText(resultado.toString());
    setOperacion("");
    setPrimerValor(null);
  };

  const handleOperador = (e) => {
    const operadorSeleccionado = e.target.textContent.trim();
    setOperacion(operadorSeleccionado);
    setPrimerValor(parseFloat(text));
    setText("0");
  };

  const handleClickbtnNumber = (e) => {
    const value = e.target.value;
    setText((prevText) => (prevText === "0" ? value : prevText + value));
  };

  const handleReiniciar = () => {
    setText("0");
    setOperacion("");
    setPrimerValor(null);
  };

  return (
    <div className="flex flex-col gap-5 justify-center items-center border border-black p-4 rounded-lg bg-blue-200">
      <textarea
        className="w-full rounded-lg border-2 border-red-500 p-2 text-right"
        name="Pantalla"
        value={text}
        id="Pantalla"
        readOnly
      ></textarea>
      <div className="flex gap-4">
        <section className="grid grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num) => (
            <BtnNumeros
              key={num}
              classNames={num === 0 ? "col-span-3" : ""}
              onClic={handleClickbtnNumber}
              values={num}
            >
              {num}
            </BtnNumeros>
          ))}
        </section>
        <div className="grid grid-cols-1 gap-4">
          <BtnReiniciar onClic={handleReiniciar}>C</BtnReiniciar>
          {["+", "-", "*", "/"].map((op) => (
            <BtnOperadores key={op} onClic={handleOperador}>
              {op}
            </BtnOperadores>
          ))}
          <BtnOperadorIgual onClic={handleClickIgual}>=</BtnOperadorIgual>
        </div>
      </div>
    </div>
  );
};

export default CuerpoCalculadora;
