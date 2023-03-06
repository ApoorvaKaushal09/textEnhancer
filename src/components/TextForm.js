import React,{useState} from 'react'
import { GrammarlyEditorPlugin } from "@grammarly/editor-sdk-react";



export default function TextForm(props) {
    let old, newText;
    const [text, setText] = useState("");
    // const [pretext, setpsreText] = useState("");
    const handleUpperClick = () =>
    {
        newText=text.toUpperCase();
        setText(newText);
        props.showAlert(": Converted to upper case", "success");
    }

    const handleLowerClick = () =>
    {
        newText=text.toLowerCase();
        setText(newText);
        props.showAlert(": Converted to lower case", "success");
    }

    const handleClearClick = () =>
    {
        newText=' '
        setText(newText);
        props.showAlert(": Text Cleared", "success");
    }

    const handleTitleClick = () =>
    {
        newText='';
        let a = text.split(" ");
        for(let i = 0; i < a.length; i++)
        {
            let c = a[i].charAt(0).toUpperCase();
            newText += c + a[i].substring(1) +" ";
        }
        setText(newText);
        props.showAlert(": Converted to Title case", "success");
    }

    const handleSentenceClick = () =>
    {
        let c = text.charAt(0).toUpperCase();
        newText=c+ text.substring(1).toLowerCase();
        setText(newText);
        props.showAlert(": Converted to Sentence case", "success");
    }
    
    const handleremoveExtraClick = () =>
    {
        newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert(": Extra spaces removed", "success");
    }

    const handleCopyClick = () =>
    {
        navigator.clipboard.writeText(text);
        alert("Text Copied");
        props.showAlert(": Text Copied", "success");

        // setText(newText);
    }

    const handleChange = (event) =>
    {
        old = event.target.value;
        setText(old);
    }

    // const handlePreview = (event) =>
    // {
    //    if(text.length > 0)
    //    setpreText(text);
    //    else
    //    setpreText("write something to preview");
    //    var a = window.open('', '', 'height=500, width=500');
    //    a.document.write('<html>');
    //    a.document.write('<body>');
    //    a.document.write(<h6>pretext</h6>);
    //    a.document.write('</body></html>');
    //    a.document.close();
    // //    a.print();
    // }

    return (
    <>



    <div className="container" style={{color: props.clrmode === 'info'?'white':'black'}} >
    <h1>{props.heading}</h1>
    <GrammarlyEditorPlugin clientId="client_PehEfip5DDuTHMs3hrKoF9">
    <div className="mb-3">
        <textarea style={{backgroundColor: props.clrmode==='green'?'#9F8772':'#05595B' || props.mode === 'light'?'#DEDEDE':'#2E2E2E', color: props.mode === 'dark'?'#DEDEDE':'#2E2E2E'}} className="form-control" onChange={handleChange} value={text} id="exampleFormControlTextarea1" rows="10"></textarea>
    </div>
    </GrammarlyEditorPlugin>
    <button className={`btn btn-${props.clrmode} mx-2`} onClick={handleUpperClick}>Convert to Upper Case</button>
    <button className={`btn btn-${props.clrmode} mx-2`}onClick={handleLowerClick}>Convert to Lower Case</button>
    <button className={`btn btn-${props.clrmode} mx-2`}onClick={handleClearClick}>Clear</button>
    <button className={`btn btn-${props.clrmode} mx-2`}onClick={handleTitleClick}>Title Case</button>
    <button className={`btn btn-${props.clrmode} mx-2`}onClick={handleSentenceClick}>Sentence Case</button>
    <button className={`btn btn-${props.clrmode} mx-2`}onClick={handleCopyClick}>Copy to Clipboard</button>
    <button className={`btn btn-${props.clrmode} mx-2`} onClick={handleremoveExtraClick}>Remove Extra Spaces</button>
    <div className='mb-3'>
        <h3>Your Text Summary</h3>
        <p>{text.split(" ").filter((t) => t !== "").length} words and {text.length} characters</p>
        <p>{0.008*text.split(" ").length} minutes read</p>
    </div>
    <h3>Preview Text</h3>
    {/* <button className="btn btn-primary mx-2">Click to Preview</button> */}
    <h6>{text.length>0?text:"write smething"}</h6>
    </div>
</>
  )
}