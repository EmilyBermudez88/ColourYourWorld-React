import './App.scss';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import ColorSelection from './components/ColorSelection';
import ImageGallery from './components/ImageGallery';

function App() {

  const [colors, setColors]= useState([])

  const passingColors = (colorParams)=>{
    setColors(colorParams);
  }

  return (
    <div className="app wrapper">
      <ColorSelection handleChange={passingColors}/>
      <Routes>
        <Route path="/" element={<ImageGallery colors={colors}/>}/>
      </Routes>
      
      
    </div>
  );
}

export default App;
