import React , {useState} from 'react';
import PropTypes from 'prop-types';
// Use React Hooks & State


export default function TextForm(props) {
    const [txt , setTxt] = useState("");
    /* 
        By default value of text set by useState func parameter
        setTxt() - func use to cchange the text inside the txt var
    
    */
    const handleOnChange=(event)=>{
        // console.log(event);
        setTxt(event.target.value);
    }

    const handleUpClick = () => {
        /*
            Change txt Variable in Upper Case & and usesetTxt func to change the txt
        */
        // console.log("Upper Case Clicked" , txt);
        setTxt(txt.toUpperCase()); // Change txt to Upper Case
    }
    const handleDownClick=()=>{
        setTxt(txt.toLowerCase());
    }
    const titleCase = () => {
        let title = txt.toLowerCase().split(" ").map((word)=>{return (word.charAt(0).toUpperCase() + word.slice(1))});
        setTxt(title.join(" "));
    }
    const RemoveExtraSpace = () => {
        let newTxt  = txt.split(/[ ]+/).join(" ");
        setTxt(newTxt);
    }

    const RemoveExtraLine =()=>{
        let newTxt = txt.split(/["\n"]+/).join("\n");
        setTxt(newTxt);
    }

    // Stylesheet
    // const [txtCol , setTxtCol] = useState("black");
    const txtStyle = {color : props.mode === "light"?"#363845":"#DEE4CE",};

    const clipboard = ()=> {
        /* Copy to ClipBoard */
        if (txt === " " || txt === ""){
            props.showAlert(" ! Enter the Text to copy" , "info");
        }
        else {
            navigator.clipboard.writeText(txt); 
            props.showAlert("Text Copied !" , "success");
        }
    };
    const clearTxt = () => {
        setTxt("");
        props.showAlert("Text Cleared !" , "warning");
    }

    return (
        <>
            <div className="container" style={txtStyle}>
                <h2 htmlFor="mybox" className="mb-3 font-link"><b>{props.heading}</b></h2>
                <div className="mb-3">
                <textarea style={{backgroundColor : props.mode==="dark"?"#667574":"white" , color : props.mode==="dark"?"white":"black"}} spellCheck="false" className="form-control" value={txt} onChange={handleOnChange} id="mybox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary me-auto mb-2 mb-lg-0 mx-2 " onClick={handleUpClick}>Convert to Upper Case</button>
                <button className="btn btn-primary me-auto mb-2 mb-lg-0 mx-2" onClick={handleDownClick}>Convert to Lower Case</button>
                <button className="btn btn-primary me-auto mb-2 mb-lg-0 mx-2" onClick={titleCase}>Change into Title Case</button>
                <button className="btn btn-primary me-auto mb-2 mb-lg-0 mx-2" onClick={RemoveExtraSpace}>Remove Extra Spaces</button>
                <button className="btn btn-primary me-auto mb-2 mb-lg-0 mx-2" onClick={RemoveExtraLine}>Remove Extra Lines</button>

                <button className="btn btn-primary me-auto mb-2 mb-lg-0 mx-2"  onClick={clipboard} title="Copt Text To ClipBoard">Copy to Clipboard</button>
                <button className="btn btn-primary me-auto mb-2 mb-lg-0 mx-2" onClick={clearTxt}>Clear</button>
            </div>
            <div className="container my-3 " style={txtStyle}>
                <h2 className="font-link">Text Summary</h2>
                <p><b>{txt.split(/\s+/).filter(function(val,index, arr){return val !== ""}).length}</b> Words | <b>{txt.length}</b> Characters | <b>{txt.length===0?0:txt.split("\n").length}</b> line</p>
                <p>Average time to read <b>{txt.length===0?0:0.008*txt.split(" ").length}m</b></p>
                <h3 className="font-link">Wanna Read</h3>
                <p>{txt.length>0?txt:"---> Enter something in textbox to Preview - TextManipulator is Word and character counter | Change text into Upper Case , Lower Case and Title Case | Remove Extra Space and Remove Extra Line "}</p>
            </div>
        </>
        
    )
}

TextForm.propTypes = {
    heading : PropTypes.string,
    mode : PropTypes.string,
    showAlert : PropTypes.func,
}

