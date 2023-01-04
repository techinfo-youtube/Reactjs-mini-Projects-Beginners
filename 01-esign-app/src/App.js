import React, { useState } from "react";
import Title from "./components/Title";

function App() {
  const [name, setName] = useState("Techinfoyt");
  const [date, setDate] = useState("DOB");

  return (
    <div className="container-fluid">
      <h1 className="text-center">Signature app</h1>
      <Title text={date} />
      <Title text={name} />
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia soluta
        quaerat neque? Repellendus fuga molestias ipsum voluptates temporibus
        odio, aperiam adipisci, expedita eligendi nihil magnam in molestiae
        assumenda, consequuntur facere reprehenderit saepe veniam dolorem magni
        consequatur excepturi inventore eos. Omnis aperiam illum amet. Dolorum
        omnis aliquid perferendis cum illo at adipisci maiores consequuntur
        saepe modi! Atque illum esse quidem eos laudantium, blanditiis obcaecati
        itaque ratione quaerat. Dolore nostrum, assumenda inventore quae cum
        velit labore explicabo in? Similique magni officia dolores repellat
        sequi quibusdam ab fuga eveniet natus, nisi exercitationem eaque facilis
        temporibus modi, dolor minus assumenda, accusantium voluptatem quo.
        Alias?
      </p>
      <div className="d-flex input-boxes">
        <input
          type="date"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
    </div>
  );
}

export default App;
