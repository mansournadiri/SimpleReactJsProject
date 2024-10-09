import { useState } from "react";
import "./App.css";
import { Header, Footer } from "./Components";
import { AllRoutes } from "./routes/AllRoutes";

function App() {
  const [items, setItems] = useState([]);
  const [count, setCount] = useState(0);
  function GenerateList() {
    setItems([
      { id: 1, description: "product one" },
      { id: 2, description: "product two" },
      { id: 3, description: "product three" },
      { id: 4, description: "product four" },
      { id: 5, description: "product five" },
      { id: 6, description: "product six" },
      { id: 7, description: "product seven" },
    ]);
  }
  function HandleAdd() {
    setCount(count + 1);
  }
  function HandleSub() {
    setCount(count - 1);
  }
  function removeItem(id) {
    setItems(items.filter((item) => item.id !== id));
  }
  return (
    <div className="App">
      <Header />
      <AllRoutes />
      <div className="GenerateList">
        <div className="list">
          <button className="btn btn-success" onClick={GenerateList}>
            Generate List
          </button>
          <ul>
            {items.map((item) => (
              <li key={item.id}>
                <p>
                  {item.description}
                  <button
                    className="btn btn-danger ml-2"
                    onClick={() => removeItem(item.id)}
                  >
                    ×
                  </button>
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div className="box">
          <p>{count}</p>
          <button className="btn btn-success" onClick={HandleAdd}>
            add
          </button>
          <button className="btn btn-danger" onClick={HandleSub}>
            sub
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
