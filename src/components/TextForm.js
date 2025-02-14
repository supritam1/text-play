import React, {useState} from 'react'

export default function TextForm(props) {
  const[text, setText]=useState('')

  const handleonchange=(event)=>{
    setText(event.target.value);
  }
  const converttoupcase=()=>{
    let newText = text.toUpperCase();
    setText (newText);
    props.showAlert("Converted to Uppercase!" ,"success")
  }
  const converttolocase=()=>{
    let newText = text.toLowerCase();
    setText (newText);
    props.showAlert("Converted to Lowercase!", "success")
  }
  const convertclclick=()=>{
    let newText = ('');
    setText (newText);
    props.showAlert("Text cleared!",  "success")
  }
  const convertcoclick=()=>{
    navigator.clipboard.writeText(text);
    props.showAlert("Copied!", "success")
  }
  const convertreclick=()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(' '))
    props.showAlert("Extra space removed!", "success")
  }

  return (
    <div className="mx-3 my-4" style={{color:props.mode==='dark'?'white':'black'}} >
        <h1>Enter Your {props.head}</h1>
      <div>
        <textarea className="form-control my-2 " id="exampleFormControlTextarea1" rows="8" value={text} onChange={handleonchange} placeholder='Enter Your Text...'style={{backgroundColor:props.mode==='light'?'white':'#3d4853',color:props.mode==='light'?'black':'white'}}></textarea>

        <button className="btn btn-primary my-1 mx-1" type="submit" onClick={converttoupcase}>Convert to Uppercase</button>
        <button className="btn btn-primary my-1 mx-1" type="submit" onClick={converttolocase}>Convert to Lowercase</button>
        <button className="btn btn-primary my-1 mx-1" type="submit" onClick={convertclclick}>Clear</button>
        <button className="btn btn-primary my-1 mx-1" type="submit" onClick={convertcoclick}>Copy</button>
        <button className="btn btn-primary my-1 mx-1" type="submit" onClick={convertreclick}>Remove Extra spaces</button>

        <h3>Your text Summary</h3>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008 *  text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview!"}</p>
      </div>
    </div>
  );
}
