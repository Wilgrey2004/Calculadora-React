// eslint-disable-next-line react/prop-types
const BtnNumeros = ({ children, classNames, onClic, values }) => {
  return (
    <>
      <button
        value={values}
        onClick={onClic}
        className={`rounded-lg p-4 border-2 border-transparent bg-green-300 hover:bg-green-400 text-black font-bold   transition-all duration-150 hover:scale-90 ${
          classNames ? classNames : ``
        }`}
      >
        {" "}
        {children}
      </button>
    </>
  );
};

export default BtnNumeros;
