import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import "./index.css";
import Header from "./components/Header";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div className="page">
      <Header />

      <button className="button">Test!</button>
    </div>
  );
}

export default App;
