import React, { useEffect, useState } from "react";
import copy from "copy-to-clipboard";

import "./App.css";

function App() {
  let [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      `https://emoji-api.com/emojis?access_key=${process.env.REACT_APP_API_KEY}`
    )
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  return (
    <div className="App">
      <div className="container">
        {data.map((e, i) => (
          <button
            className="card"
            onClick={() => navigator.clipboard.writeText(e.character)}
            key={e.codePoint}
          >
            <p className="emo">{e.character}</p>
            <p>{e.unicodeName}</p>
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
