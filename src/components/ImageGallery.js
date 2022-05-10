//ImageGallery.js
import LivingRoom from '../assets/room2.png'

function ImageGallery(){
     return(
          <section className="colorGallery">
               <h1>Colour Your World</h1>
               <div>
                    <img src={LivingRoom} alt="living room" />
               </div>
               
          </section>
     )
}

export default ImageGallery;