import React, { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>React codé et compilé par mon IA</h1>
      <button onClick={() => setCount(count + 1)}>Compteur: {count}</button>
    </div>
  );
};

export default App;