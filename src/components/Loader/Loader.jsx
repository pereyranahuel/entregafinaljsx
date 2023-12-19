import Spinner from "./Spinner";

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-4xl font-semibold mb-4 text-gray-800">Cargando...</h2>
      <Spinner />
    </div>
  );
};

export default Loader;
