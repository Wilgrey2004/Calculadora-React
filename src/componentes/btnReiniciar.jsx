// eslint-disable-next-line react/prop-types
const BtnReiniciar = ({ onClic }) => {
  return (
    <>
      <button
        onClick={onClic}
        className="rounded-lg p-4 border-2 border-transparent bg-red-300 text-black font-bold hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-150 hover:-translate-y-1"
      >
        c
      </button>
    </>
  );
};

export default BtnReiniciar;
