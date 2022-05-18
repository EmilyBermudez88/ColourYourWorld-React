//Form.js
import {useState} from 'react';

function Form(props){

          const [colorInput, setColorInput]= useState("#FFFFFF");
          const [hexCode, setHexCode] = useState("#FFFFFF");
          const [userChoices, setUserChoices]= useState({"hexValue":"#FFFFFF","scheme": "analogic"});
          const[regExReturn, setRegExReturn]= useState(true)

          const getColour=(param)=>{
               const hexValue = param.value;
               const hexValueUppercase = hexValue.toUpperCase();
               const hex={"hexValue": hexValue}
               setColorInput(hexValue);
               setHexCode(hexValueUppercase)
               setUserChoices({
                    ...userChoices,
                    ...hex
               })
          }

          const viaPicker =()=>{
               const picker = document.getElementById("colorInput");
               getColour(picker);
               const uppercase = picker.value.toUpperCase();
               setHexCode(uppercase);
          }

          const viaHex = () => {
               const textInput = document.getElementById("colorText");
               getColour(textInput);
               const inputValue = textInput.value;
               if(inputValue[0] !== "#"){
                    const hashtag = "#" + inputValue;
                    setColorInput(hashtag);
               } else {
                    setColorInput(inputValue);
               }
          }

          const testingHexCode = ()=>{
               let regExTest = /^#[a-f0-9/]{6,6}$/i
               let regExResult= regExTest.test(colorInput)
               setRegExReturn(regExResult);
          }

          const handleScheme = (e)=>{
               const selected = document.querySelectorAll("option:checked");
               const option= selected[0].value
               const schemeChoice = {"scheme": option};
               setUserChoices({...userChoices,
                    ...schemeChoice})
          }

          const handleSubmit = (e)=>{
               e.preventDefault();
               testingHexCode();  
               //right now passing up the regEx value one click too late - add in regExReturn into arguments
               props.handleSubmit(userChoices)
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
                              <input type="text" id="colorText" value= {hexCode} onChange={viaHex}/>
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
               {!regExReturn ? <p className="warning">Sorry, please enter a valid Hex Value (6 digits, A-F and 0-9)</p> : null }
               <button type="submit" className="submit">Find Colours to Match</button>
          </form>
     )
}

export default Form;