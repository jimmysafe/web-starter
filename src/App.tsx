import Todos from "./components/todo/Todos";

const App = () => {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-gray-900 text-white">
      <h1 className="text-5xl">Happy Hacking!</h1>
      <Todos />
    </div>
  );
};

export default App;
