import React, {useState, useEffect} from 'react';
import axios from "axios";
import "./testMeStyle.css"

// animation triggers before added to dom on initial load, must use useeffect or other option.
// finish overall styling

function Forum() {


    const [inputValue, setInputValue] = useState("");
    const [conversation, setConversation] = useState([{}]);

    function handleFakeScreenClick() {
        document.getElementById("hiddenInput").focus();
    }

    function handleInputChange(e) {
        setInputValue(e.target.value);

    }

    function handleKeyPress(e) {
        if (e.key === "Enter") {

            setConversation(conv => [...conv, 
                {text: inputValue,
                type: "user"
                }]);

            e.preventDefault();
            setInputValue("");
            submitData();

        }
    }

    async function submitData() {
       
        try {
            
            const response = await axios.post('/askQuestion', {
                message: inputValue
            });

            if (response.status === 200) {

                setConversation(conv => [...conv,  {text:response.data.respondMessage, type: "response"}] );
            


            } else {
                //alert("Server responded with a non-success status");
            }
        } catch (e) {
           // alert("An error occurred: " + e.message);
        }
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
        <section id={"Forum"} >
            <div className="container">
            <div className="fakeScreen rounded-3 col-lg-10" id="terminalWindow" onClick={handleFakeScreenClick}>

                <div>
                    <p className="line1">Ask me for a song recommendation</p>
                    <span className="fs-5 fw-normal pb-0">
                    {conversation.map((entry, index) => (
                        <div key={index} className={` ${entry.type=='response' ? "responseText" : 'userText'}`}>
                            
                            {entry.text}
                        
                        </div>
                    ))}
                        <span className="userText pt-0"> {inputValue}</span>
                    <span className="cursor fw-bold ">_</span>
                </span>

                </div>

                <input
                    id="hiddenInput"
                    type="text"
                    className={"invisibleInput"}
                    value={inputValue}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyPress}
                    autoComplete="off"  // Disables autocomplete
                    autoCorrect="off"  // Disables autocorrect
                    autoCapitalize="off"  // Disables auto-capitalization
                    spellCheck="false"  // Disables spell check
                />


            </div>
            </div>

        </section>)
}

export default Forum