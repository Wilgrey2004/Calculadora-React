// eslint-disable-next-line react/prop-types
const BtnOperadores = ({ children, onClic, value }) => {
  return (
    <>
      <button
        onClick={onClic}
        value={value}
        className="
      flex items-center justify-center rounded-lg px-6 border-2
      border-transparent bg-blue-300 hover:bg-blue-400
      text-black font-bold 
      transition-all 
      duration-150 hover:scale-90 text-center"
      >
        {children}
      </button>
    </>
  );
};

export default BtnOperadores;
