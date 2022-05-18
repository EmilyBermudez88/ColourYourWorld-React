//APICall.js
import axios from 'axios';
import Form from './Form'
import DisplayPalette from './DisplayPalette'
import {useEffect, useState} from 'react';

function ColorSelection(props){
     
     const [userChoices, setUserChoices]= useState({})
     const [colorData, setColorData]= useState([]);
     

     const formSubmit = (e, userParams) => {
          e.preventDefault();
          setUserChoices(userParams);
     }

     useEffect(()=>{
          if (userChoices.scheme==="quad"){
               axios({
                    url: 'https://www.thecolorapi.com/scheme',
                    method: 'GET',
                    params: {
                         hex: userChoices.hexValue,
                         mode: userChoices.scheme,
                         count: 4
                    }
               }).then(response => {
                    if (response.ok || response.status === 200) {
                         setColorData(response.data.colors)
                    }
               })
          } else {
               axios({
                    url: 'https://www.thecolorapi.com/scheme',
                    method: 'GET',
                    params: {
                         hex: userChoices.hexValue,
                         mode: userChoices.scheme,
                         count: 3
                    }
               }).then(response => {
                    if (response.ok || response.status === 200) {
                         setColorData(response.data.colors)
                    }
               })
          }    
     },[userChoices]);

     useEffect(()=>{
          props.handleChange(colorData);
     }, [colorData]) //eslint-disable-line react-hooks/exhaustive-deps
     

     return(
          <section className="colorSelection">
               <Form handleSubmit={formSubmit} />
               {
                    !colorData ? null : <DisplayPalette colors={colorData} />
               }
          </section>
     )
}

export default ColorSelection;