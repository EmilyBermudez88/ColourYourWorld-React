//DisplayPalette.js

function DisplayPalette(props){

     const colorArray = props.colors;

     return(
          <ul>
               {colorArray.map(color=>{
                    return(
                         <li key={color.hex.clean}>
                              <div 
                                   className="swatch"
                                   style={{backgroundColor:`${color.hex.value}`}}>
                              </div>
                              <p>{color.name.value}</p>
                              <p>{color.hex.value}</p>
                         </li>
                    )
               })}
          </ul>
     )
}

export default DisplayPalette;