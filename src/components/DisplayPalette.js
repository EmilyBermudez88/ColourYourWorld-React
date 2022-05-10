//DisplayPalette.js

function DisplayPalette(props){

     const colorArray = props.colors;

     return(
          <ul className="colorsList">
               {colorArray.map(color=>{
                    return(
                         <li 
                              className="individualColor"
                              key={color.hex.clean}
                         >
                              <div 
                                   className="swatch"
                                   style={{backgroundColor:`${color.hex.value}`}}>
                              </div>
                              <div>
                                   <p>{color.name.value}</p>
                                   <p>{color.hex.value}</p>
                              </div>
                         </li>
                    )
               })}
          </ul>
     )
}

export default DisplayPalette;