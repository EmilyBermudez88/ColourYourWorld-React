//ImageGallery.js
import { Route, Routes } from 'react-router-dom';
import RoomsNav from './RoomsNav';
import LivingRoom from './LivingRoom';
import Kitchen from './Kitchen';
import Bedroom from './Bedroom';

function ImageGallery(props){
     const backgrounds = props.colors;

     return(
          <main>
               <Routes>
                    <Route path = "/" element = {<LivingRoom backgrounds = {backgrounds}/>}/>
                    <Route path="/kitchen" element={<Kitchen backgrounds={backgrounds}/>}/>
                    <Route path="/bedroom" element={<Bedroom backgrounds={backgrounds}/>}/>
               </Routes>
               <RoomsNav />
          </main>
     )
}

export default ImageGallery;