import logo from "./logo.svg";
import "./App.css";
import Table from "./component/Table";

function App() {
  return (
    <div className="App mt-4">
      <div className="flex flex-col flex-nowrap gap-6 justify-center">
        <text className="text-4xl text-gray-500">Tables Only For You</text>
        <header className="flex flex-row flex-wrap gap-6 justify-center">
          <Table num={2} />
          <Table num={3} />
          <Table num={4} />
          <Table num={5} />
        </header>
      </div>
    </div>
  );
}

export default App;
