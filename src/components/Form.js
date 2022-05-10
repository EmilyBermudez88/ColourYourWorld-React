//Form.js
import {useState} from 'react';

function Form(props){

          const [colorInput, setColorInput]= useState("#FFFFFF");
          const [hexCode, setHexCode] = useState("#FFFFFF")
          const [userChoices, setUserChoices]= useState({"hexValue":"#FFFFFF","scheme": "analogic"});

          const getColour=()=>{
               const colorInput= document.getElementById("colorInput");
               const hexValue = colorInput.value;
               const hex={"hexValue": hexValue}
               setColorInput(hexValue);
               setHexCode(hexValue)
               setUserChoices({
                    ...userChoices,
                    ...hex
               })
          }

          const getColourViaHex=()=>{
               const colorInput = document.getElementById("colorText");
               const hexValue = colorInput.value;
               setColorInput(hexValue);
               setHexCode(hexValue);
          }

          const handleScheme = (e)=>{
               const selected = document.querySelectorAll("option:checked");
               const option= selected[0].value
               const schemeChoice = {"scheme": option};
               setUserChoices({...userChoices,
                    ...schemeChoice})
          }

          const handleSubmit = (e)=>{
               props.handleSubmit(e, userChoices)
          }

     return(
          <form 
          action=""
          onSubmit={handleSubmit}>
               <div className="formFlexContainer">
                    <label htmlFor="keyword">Select a Colour</label>
                    <div className="colourSelector">
                         <input type="color" id="colorInput" value={colorInput} onChange={getColour}/>
                         <input type="text" id="colorText" placeholder={hexCode} onChange={getColourViaHex}/>
                    </div>
               </div>
               <div className="schemeSelector">
                    <label htmlFor="schemes">Select a Colour Scheme</label>
                    <select 
                    name="schemes" 
                    id="schemes"
                    onChange={handleScheme}>
                         <option value="analogic" >Analogic</option>
                         <option value="analogic-complement">Analogic-Complement</option>
                         <option value="monochrome-dark">Monochrome-Dark</option>
                         <option value="monochrome">Monochrome</option>
                         <option value="triad">Triad</option>
                         <option value="quad">Quad</option>
                    </select>
               </div>
               <button type="submit" className="submit">Find Colours to Match</button>
          </form>
     )
}

export default Form;