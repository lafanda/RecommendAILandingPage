import React, {useState, useEffect } from 'react';
import axios from "axios";
import "./testMeStyle.css"



function Forum() {


    const [inputValue, setInputValue] = useState("");

    function handleFakeScreenClick(){
        document.getElementById("hiddenInput").focus();
    }

    function handleInputChange(e){
        setInputValue(e.target.value);
    }

    function handleKeyPress(e){
        if(e.key === "Enter"){
            e.preventDefault();
            submitData();
        }
    }

    async function submitData(){
      /*
      const data = {value: inputValue}
        await axios.get("/hello");
    */
      }


    useEffect(() => {
        const inputElement = document.getElementById("hiddenInput");
        const preventDefault = (e) => e.preventDefault();
        inputElement.addEventListener('mousedown', preventDefault);
        return () => {
          inputElement.removeEventListener('mousedown', preventDefault);
        };
      }, []);


  return (
    <div className = "container">

        <div class="fakeScreen rounded-3 col-lg-10" id ="terminalWindow" onClick = {handleFakeScreenClick}>

        <div>
        <p className = "line1">Ask me a question</p>

        <span className="fs-5 fw-normal">
          {inputValue}
          <span className="cursor fw-bold fs-3">_</span>
        </span>
    
    </div>
        <input 
            id="hiddenInput"
            type="text" 
            className="invisibleInput"
            onChange={handleInputChange}
            onKeyDown={handleKeyPress}
            autoComplete="off"  // Disables autocomplete
            autoCorrect="off"  // Disables autocorrect
            autoCapitalize="off"  // Disables auto-capitalization
            spellCheck="false"  // Disables spell check
          />
        

  </div>

    </div>
  )
}

export default Forum