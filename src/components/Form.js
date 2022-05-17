//Form.js
import {useState} from 'react';

function Form(props){

          const [colorInput, setColorInput]= useState("#FFFFFF");
          const [hexCode, setHexCode] = useState("#FFFFFF")
          const [userChoices, setUserChoices]= useState({"hexValue":"#FFFFFF","scheme": "analogic"});


          const getColour=(param)=>{
               const hexValue = param.value;
               const hex={"hexValue": hexValue}
               setColorInput(hexValue);
               setHexCode(hexValue)
               setUserChoices({
                    ...userChoices,
                    ...hex
               })
          }

          const viaHex=()=>{
               const colorInput = document.getElementById("colorText");
               testingHashtag(colorInput)
               getColour(colorInput);
          }

          const viaPicker =()=>{
               const colorInput = document.getElementById("colorInput");
               getColour(colorInput);
          }

          const testingHashtag = (param) => {
               let input = param.value;
               if (input[0] !== "#") {
                    input = "#" + input;
                    console.log(input);
                    setColorInput(input);
               }
          }

          const testingHexCode = ()=>{
               if (/#([a-f0-9]{6})/.test(colorInput)) {
                    console.log('yes')
                    console.log(colorInput)
               } else {
                    return false
               }
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
               testingHexCode();
          }

     return(
          <form 
          action=""
          onSubmit={handleSubmit}>
               <div className="formFlexContainer">
                    <div className="colorFlexContainer">
                         <label htmlFor="keyword">Select a Colour</label>
                         <div className="colorSelector">
                              <input type="color" id="colorInput" value={colorInput} onChange={viaPicker} />
                              <input type="text" id="colorText" value={hexCode} onChange={viaHex} />
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
               </div>
               {!testingHexCode ? <p>Wrong</p> : null }
               <button type="submit" className="submit">Find Colours to Match</button>
          </form>
     )
}

export default Form;