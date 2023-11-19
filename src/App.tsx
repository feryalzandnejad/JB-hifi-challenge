import { useState } from 'react';

import MyForm from './Components/MyForm/MyForm';

function App() {
  const [ toggle, setToggle] = useState(true)
  return (
    <>
    {toggle ? <MyForm /> : null}
    <button onClick={() => setToggle(!toggle)} >toogle</button>
    </>
  );
}

export default App;
