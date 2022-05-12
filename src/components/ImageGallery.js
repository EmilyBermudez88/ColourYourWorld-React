//ImageGallery.js
import LivingRoom from '../assets/room2.png'

function ImageGallery(props){
     console.log(props)
     return(
          <section className="colorGallery">
               <h1>Colour Your World</h1>
               <div className="imageContainer">
                    <div className="color1"></div>
                    <div className="color2"></div>
                    <div className="color3"></div>
                    <div className="color4"></div>
                    <img src={LivingRoom} alt="living room" />
               </div>
               
          </section>
     )
}

export default ImageGallery;