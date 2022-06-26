import React, { useState } from 'react';
import data from './data';

function App() {
  const [number, setNumber] = useState(0);
  const [texts, setTexts] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (number > 0) {
      setTexts(data.slice(0, number));
    } else {
      setNumber(0);
      setTexts([]);
    }
  };
  return (
    <main>
      <section>
        <h3>Tired of boring lorem Ipsum</h3>
        <form className='lorem-form' onSubmit={handleSubmit}>
          <label htmlFor='lorem'>parahraphs</label>
          <input
            type='number'
            id='lorem'
            name='number'
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
          <button className='btn'>generate</button>
        </form>
        <div className='result'>
          {texts.map((text, index) => {
            return <p key={index}>{text}</p>;
          })}
        </div>
      </section>
    </main>
  );
}

export default App;
