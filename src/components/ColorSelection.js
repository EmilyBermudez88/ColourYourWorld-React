//APICall.js
import axios from 'axios';
import Form from './Form'
import DisplayPalette from './DisplayPalette'
import Footer from './Footer';
import {useEffect, useState} from 'react';

function ColorSelection(){
     
     const [userChoices, setUserChoices]= useState({})
     const [colorData, setColorData]= useState([]);
     

     const formSubmit = (e, userParams) => {
          e.preventDefault();
          setUserChoices(userParams);
     }

     useEffect(()=>{
          axios({
               url: 'https://www.thecolorapi.com/scheme',
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
     },[userChoices]);
     

     return(
          <section className="colorSelection">
               <Form handleSubmit={formSubmit} />
               {
                    !colorData ? null : <DisplayPalette colors={colorData} />
               }
               <Footer />
          </section>
     )
}

export default ColorSelection;