import BedroomImage from '../assets/bedroom.png'

function Bedroom(props) {
     const backgrounds = props.colors;
     return (
          <section className="colorGallery">
               <div className="imageContainer">
                    <div
                         className="color1"
                         style={
                              backgrounds === undefined || !backgrounds.length ? { backgroundColor: "transparent" } : { backgroundColor: `${props.colors[0].hex.value}` }}
                    >
                    </div>
                    <div
                         className="color2"
                         style={
                              backgrounds === undefined || !backgrounds.length ? { backgroundColor: "transparent" } : { backgroundColor: `${backgrounds[1].hex.value}` }}>
                    </div>
                    <div
                         className="color3"
                         style={
                              backgrounds === undefined || !backgrounds.length ? { backgroundColor: "transparent" } : { backgroundColor: `${backgrounds[2].hex.value}` }}>
                    </div>
                    <div
                         className="color4"
                         style={
                              backgrounds === undefined || !backgrounds.length ? { backgroundColor: "transparent" } : { backgroundColor: `${backgrounds[2].hex.value}` }}>
                    </div>
                    <img src={BedroomImage} alt="living room" />
               </div>

          </section>
     )
}

export default Bedroom;