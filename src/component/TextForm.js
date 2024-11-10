import React, { useState } from 'react'
import Speakimage from "../assets/speak.png"



const TextForm = (props) => {

    const [text, setText] = useState("");

    const changetoUpperCase = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Convert to uppercase","success")
    }
    const changetoLowerCase = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Convert to Lowercase","success")
    }
    const clearText = () => {
        let newText = "";
        setText(newText);
        props.showAlert("Text cleared","success")
    }
    const copyText=()=>{
        const text=document.getElementById("textBox")
        text.select()
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied","success")
    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    }
    return (
        <>
            <div className={`container my-5 text-${props.mode==="dark"?"info":"secondary"}`}>

                <div className="form-group">
                    <label for="textBox" className="px-2 fw-bold "><h4 > Enter your Text Below</h4></label>
                    <textarea className="form-control" id="textBox" rows="10" value={text} onChange={(e) => { setText(e.target.value) }}></textarea>
                </div>

                <div className="container mx-3">
                    <button className="btn btn-primary m-2 " onClick={changetoUpperCase}>Convert to Uppercase</button>
                    <button className="btn btn-primary m-2 " onClick={changetoLowerCase}>Convert to Lowercase</button>
                    <button className="btn btn-outline-info m-2 " onClick={copyText}>Copy text</button>
                    <button className="btn btn-danger m-2 px-3 " onClick={clearText}>Clear</button>
                    <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2"> <img src={Speakimage} alt="aa" srcset="" width={30} height={"auto"} />  Speak</button>
                </div>

                <div className="container my-3">
                    <h3>Text Summary</h3>
                    <p>Number of words: {text.split(" ").length}</p>
                    <p>Number of characters: {text.length}</p>
                </div>

            </div>
        </>
    )
}
export default TextForm
