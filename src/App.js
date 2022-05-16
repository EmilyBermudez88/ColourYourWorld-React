import './App.scss';
import { useState } from 'react';
import ColorSelection from './components/ColorSelection';
import ImageGallery from './components/ImageGallery';

function App() {

  //need state in order to store the colour array passed up from ColorSelection, which can then be passed over to ImageGallery
  const [colors, setColors]= useState([])
  // const [count, setCount] = useState(0);

  const passingColors = (colorParams)=>{
    setColors(colorParams);
  }


  return (
    <div className="app wrapper">
      <h1>Colour Your World</h1>
      <div className="flexContainer">
        <ColorSelection handleChange={passingColors} />
        <ImageGallery colors={colors}/>
      </div>  
    </div>
  );
}

export default App;
