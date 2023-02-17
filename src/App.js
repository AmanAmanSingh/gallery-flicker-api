import { useState } from 'react';
import './App.css';
import Header from './component/header/header';
import Gallery from './component/photos/photo';
import { photoContext } from "./component/photoscontext"
function App() {
  const [inputField, setInputField] = useState("");

  return (
    <>
      <photoContext.Provider value={{ inputField, setInputField }}>
        <Header />
        <Gallery />
      </photoContext.Provider>

    </>
  );
}

export default App;
