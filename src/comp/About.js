import React from 'react';
import PropTypes from 'prop-types';

export default function About(props) {
    let txtStyle = {
        color : props.mode === "light"?'#363845':'#DEE4CE',
        backgroundColor : props.mode === "light"?"#DEE4CE":"#363845",
        border : "1px solid",
        borderColor : props.mode === "light"?"#DEE4CE":"#363845",
    }

    // let accordianStyle = {
    //     // border : "5 px solid black",
    //     // color : "red",
        
    // }
    return (
        <div className="container">
            <h1 className="font-link" style={{color : props.mode==="light"?"#363845":"#DEE4CE"}}>About us</h1>
            <div className="accordion" id="accordionPanelsStayOpenExample">
                <div  className="accordion-item" >
                    <h2 className="accordion-header" id="panelsStayOpen-headingOne" >
                    <button className="accordion-button" type="button"  style={txtStyle} data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne" >
                        <strong>What is TextManipulatior ?</strong> 
                    </button>
                    </h2>
                    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne" style={txtStyle}>
                    <div className="accordion-body">
                        TextManipulator is WebApp can be Used to Manipulate Your text in a variety of ways .
                        
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                    <button className="accordion-button" type="button" style=
                    {txtStyle} data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="true" aria-controls="panelsStayOpen-collapseTwo">
                        <strong>Why TextManipulator ?</strong> 
                    </button>
                    </h2>
                    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingTwo">
                    <div className="accordion-body" style={txtStyle}>
                        From length of Space between letters words of text, to the length of space between the words of a sentence, to change in Lower case , Upper case or in Title case .
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                    <button className="accordion-button" type="button" style=
                    {txtStyle} data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="true" aria-controls="panelsStayOpen-collapseThree">
                        <strong>Browser Compatible & Free To Use</strong> 
                    </button>
                    </h2>
                    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingThree">
                    <div className="accordion-body" style={txtStyle}>
                        This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document etc.
                        Free Word Analysis Statical tool.
                    </div>
                    </div>
                </div>
            </div>            
        </div>
    )
}

About.propTypes = {
    mode : PropTypes.string,
}