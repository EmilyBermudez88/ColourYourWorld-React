//ImageGallery.js
import LivingRoom from '../assets/room2.png'

function ImageGallery(){
     return(
          <section className="colorGallery">
               <h1>Colour Your World</h1>
               <img src={LivingRoom} alt="" />
          </section>
     )
}

export default ImageGallery;