import './App.scss';
import ColorSelection from './components/ColorSelection';
import ImageGallery from './components/ImageGallery';

function App() {

  return (
    <div className="app wrapper">
      <ColorSelection />
      <ImageGallery />
    </div>
  );
}

export default App;
