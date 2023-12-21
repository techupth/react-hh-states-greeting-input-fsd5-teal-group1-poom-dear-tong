import { useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("Greeting Message");
  const [inputValue, setInputValue] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    setMessage(inputValue);
    setInputValue("");
  }

  return (
    <div className="App">
      <div className="greeting-container">{message}</div>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor="greeting-message">New Greeting Message</label>
          <input
            id="greeting-message"
            type="text"
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
          />
        </div>

        <div className="buttons">
          <button type="submit">Update text</button>
        </div>
      </form>
    </div>
  );
}

export default App;
