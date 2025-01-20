import CuerpoCalculadora from "./componentes/cuerpoCalculadora";

export default function App() {
  return (
    <>
      <div className="flex flex-col gap-5">
        <h1 className="text-3xl font-bold text-red-300">Calculadora</h1>
        <CuerpoCalculadora />
      </div>
    </>
  );
}
