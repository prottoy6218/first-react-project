import { useState } from "react";

export default function Content() {
  const [message, setMessage] = useState("");

  const [updated, setUpdated] = useState(message);

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleClick = () => {
    setUpdated(message);
  };

  return (
    <div id="content">
      <input
        type="text"
        id="message"
        name="message"
        placeholder="Enter Text"
        onChange={handleChange}
        value={message}
      />
      <br />
      <br />
      <button id="color" onClick={handleClick}>
        Update
      </button>

      <h1>{updated}</h1>
    </div>
  );
}
