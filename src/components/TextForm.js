import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        //console.log("Uppercase was click" + text);
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showAlert("Converted to Uppercase!", "success");
    }
    const handleloClick = ()=>{
        let newtext = text.toLowerCase();
        setText(newtext);
        props.showAlert("Converted to Lowercase!", "success");
    }
    const handleClearClick = ()=>{
        let newtext = '';
        setText(newtext);
        props.showAlert("Text cleared!", "success");
    }
    const handleCopy = ()=>{
        let newtext = document.getElementById("TextBox");
        newtext.select();
        navigator.clipboard.writeText(newtext.value);
        props.showAlert("Copied to Clipboard!", "success");
    }
    const handleExtraSpaces = ()=>{
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "));
        props.showAlert("Extra spaces removed!", "success");
    }
    const handleOnChange = (event)=> {
        //console.log("On Change");
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    return (
        <>
        <div className='container' style={{color: props.mode ==='dark'?'white':'#042743'}}>
            <h2>{props.heading}</h2>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode ==='dark'?'grey':'white',
            color: props.mode ==='dark'?'white':'#042743'}} id="TextBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to upper case</button>
            <button className="btn btn-primary mx-1" onClick={handleloClick}>Convert to lower case</button>
            <button className="btn btn-primary mx-1" onClick={handleClearClick}>Remove Text</button>
            <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Space</button>
        </div>
        <div className="container my-4" style={{color: props.mode ==='dark'?'white':'#042743'}}>
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length}Minutes read</p>
            <h3>Preview</h3>
            <p>{text.length>0?text:"Enter something in the TextBox above to preview it here :)"}</p>
        </div>
        </>
    )
}
