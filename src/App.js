import { useState } from "react";
import "./style.css";

function App() {
  const [item, setItem] = useState({ text: "", id: null });
  const [items, setItems] = useState([]);

  const handleChange = (e) => {
    setItem({ text: e.target.value, id: Date.now() });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setItems((prevItems) => [...prevItems, item]);

    setItem({ text: "", id: null });
  };

  const handleDelete = (id) => {
    const newItems = items.filter((item) => {
      return item.id !== id;
    });
    setItems(newItems);
  };

  return (
    <div className="main">
      <h1>MY TODO APP</h1>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <label>Add Item Here:</label>
          <br />
          <input type="text" value={item.text} onChange={handleChange} />
          <button type="submit" className="btn btn-outline-secondary btn-sm">
            +
          </button>
        </form>
      </div>
      <section className="items">
        <h3>MY TODO LIST:</h3>
        <ul className="list-group list-group-flush">
          {items.map((item) => {
            return (
              <div key={item.id}>
                <li className="list-group-item">
                  {item.text}
                  <button
                    type="button"
                    className="btn-delete btn btn-outline-secondary btn-sm"
                    onClick={() => handleDelete(item.id)}
                  >
                    Remove Item
                  </button>
                </li>
              </div>
            );
          })}
        </ul>
      </section>
    </div>
  );
}

export default App;
