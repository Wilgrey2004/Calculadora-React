// eslint-disable-next-line react/prop-types
const BtnOperadorIgual = ({ onClic }) => {
  return (
    <>
      <button
        onClick={onClic}
        className="rounded-lg p-4 border-2 border-transparent bg-sky-300 text-black font-bold hover:shadow-lg hover:shadow-green-500/50 transition-all duration-150 hover:-translate-y-1"
      >
        =
      </button>
    </>
  );
};

export default BtnOperadorIgual;
